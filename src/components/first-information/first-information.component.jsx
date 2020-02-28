import React, { useState } from "react";
import './first-information.style.css';
import DotFooter from '../dot-footer/dot-footer.component';
import Dialog from '../dialog/dialog.component';
import TextDialog from '../textInput-dialog/textInput-dialog.component';
import Fade from 'react-reveal/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect, useStore } from 'react-redux'
import axios from 'axios';
import DateDialog from '../dialog-date-input/dialog-date-input.component';
let f = true;
const gender_values = ['مرد', 'زن'];
let index = 1;
const married_values = ['متاهل', 'مجرد', 'مطلقه'];
const blood_type = ['+A', '+B', '+AB', '+O', '-A', '-B', '-AB', '-O'];
const education_values = ['زیردیپلم', 'دیپلم', 'فوق دیپلم', 'لیسانس', 'فوق لیسانس', 'دکتری'];


const FirstInformation = ({ city, user }) => {
    const store = useStore();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [gender, setGender] = useState('');
    const [married, setMarried] = useState('');
    const [state, setState] = useState('');
    const [cities, setCities] = useState('');
    const [education, setEducation] = useState('');
    const [age, setAge] = useState(null);
    const [blood, setBlood] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [step, setStep] = useState(0);
    const [shahrestan, setSharestan] = useState('');
    const [message, setMessage] = useState('');
    const [end, setEnd] = useState(false);

    let zeroDays = age && age.day < 10 ? ('0' + age.day) : age ? age.day : '';
    let zeroMonth = age && age.month < 10 ? ('0' + age.month) : age ? age.month : '';
    let bd = !age ? '' : `${age.year}-${zeroMonth}-${zeroDays}`;





    React.useEffect(() => {
        if (!city) {
            getcity(store)
        }
    }, [])


    if (city && state.length > 1 && Object.keys(shahrestan).length === 0) {
        city.map((v, i) => {
            if (v === state) {
                index = i + 1;
            }
        })
        getShahrestan(index, setSharestan);
    }



    let shahrestan_items = [];



    Object.entries(shahrestan).forEach(
        ([key, value]) => {
            shahrestan_items.push(value)
        }
    )






    const states = [
        ['ssss', 'ssss'],
        [state, cities, education],

        [gender, married, age],
        [height, weight, blood],
    ];
    const stepComponent = [
        <>
            <TextDialog state={name} setState={setName} items={[]} title={'نام و نام خانوادگی'} />
            <TextDialog state={number} setState={setNumber} items={[]} title={'شماره همراه'} number />
            <p className="login-copy" style={{ color: '#b71c1c', cursor: 'pointer' }}
                onClick={() => setStep((oldState) => oldState + 1)}
            >مایل به وارد کردن موارد فوق نیستم</p></>,



        <>

            <Dialog state={state} setState={(new_city) => {
                if (new_city !== state) {
                    setSharestan('');
                    setState(new_city)
                    setCities('')
                }
            }} items={city} title={'استان'} />
            <Dialog state={cities} setState={setCities} items={shahrestan_items} title={'شهرستان'} />
            <Dialog state={education} setState={setEducation} items={education_values} title={'تحصیلات'} />


        </>,





        <>

            <Dialog state={gender} setState={setGender} items={gender_values} title={'جنسیت'} />
            <Dialog state={married} setState={setMarried} items={married_values} title={'وضعیت تاهل'} />
            <DateDialog
                state={bd}
                daySelected={age}
                setState={setAge}
                items={[]}
                title={'تاریخ تولد'}
            />



        </>,

        <>

            <Dialog state={blood} setState={setBlood} items={blood_type} title={'گروه خونی'} />
            <TextDialog state={height} setState={setHeight} items={[]} title={'قد'} number />
            <TextDialog state={weight} setState={setWeight} items={[]} title={'وزن'} number />


        </>,


    ];

    if (end && f) {

        endOfTheLine(
            name, gender, cities,
            index, married, education,
            height, weight, blood,
            number, store, shahrestan,
            bd, state, setMessage, setEnd
        )
    }


    return (

        <div id="first-information">

            {

                (!end && city) ?
                    <div className="login-form">
                        <div className="login-heading-container">
                            <h3 className="login-heading"
                                style={{
                                    direction: 'rtl',
                                    fontFamily: 'Samim', color: 'black'
                                }}>
                                مشخصات</h3>
                        </div>
                        <div style={{ minHeight: '320px' }}>
                            <p className="login-copy">لطفا اطلاعات زیر را کامل نمایید</p>
                            <Fade spy={step} duration={400}>
                                {stepComponent[step]}
                            </Fade>

                        </div>




                        <DotFooter activeStep={step}
                            setActiveStep={setStep}
                            totalStep={4}
                            message={message}
                            setMessage={setMessage}
                            states={states}
                            setEnd={setEnd}

                        />
                        <Fade spy={message} duration={256}>
                            <p className="login-copy" style={{ color: '#b71c1c', cursor: 'pointer' }}>

                                {message}
                            </p>
                        </Fade>


                    </div>


                    :


                    <div style={{
                        minHeight: '90vh', display: 'flex',
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <CircularProgress color="secondary"
                            style={{ margin: '24px' }} />
                    </div>
            }

        </div>


    )

};



const mapStatetoProps = (store) => {
    return (
        {

            user: store.user,
            city: store.CityReducer

        }
    )
}

export default connect(mapStatetoProps)(FirstInformation);








const getcity = (store) => {


    const headers = {


    }

    const url = `http://185.55.226.171/api/provinces`;
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    axios.get(url, { headers: headers })
        .then((response) => {
            if (response.data.status === 200) {
                //  //console.log(response.data)
                let arr = [];
                Object.entries(response.data.data).forEach(
                    ([key, value]) => {
                        arr.push(value)
                    }
                )

                store.dispatch({ type: 'SET_CITY', payload: arr });
                // store.dispatch({ type: 'SET_LOADING', payload: { profile: false } });
                //  //console.log(response.data)

            }

        }).catch((error) => {
            if (error && error.response && error.response.status === 401) {
                //  //console.log('Singed out!!!')
                store.dispatch({ type: 'NOT_AUTHORISED', payload: '' })
            } else {
                //  //console.log('there is an problem')
                store.dispatch({ type: 'AUTHORIZATION_NOT_HAPPEND', payload: '' })
            }

            //console.log(error)

        })



}

const getShahrestan = (index, setSharestan) => {

    const headers = {


    }

    const url = `http://185.55.226.171/api/cities/${index}`;
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    axios.get(url, { headers: headers })
        .then((response) => {
            if (response.data.status === 200) {
                //  //console.log(response.data)

                setSharestan(response.data.data)
                // store.dispatch({ type: 'SET_LOADING', payload: { profile: false } });
                //  //console.log(response.data)

            }

        }).catch((error) => {
            if (error && error.response && error.response.status === 401) {
                //  //console.log('Singed out!!!')
            } else {
                //  //console.log('there is an problem')
            }

            //console.log(error)

        })


}








const endOfTheLine = (name, gender, cities, index,
    married, education, height, weight, blood, mobile,
    store, shahrestan, bd, state, setMessage, setEnd) => {

    //MIN
    if (name.length < 5) {
        setMessage('نام انتخابی بسیار کوتاه است')
        setEnd(false)
        return;
    }
    // MAX
    if (name.length > 120) {
        setMessage('نام انتخابی بسیار طولانی است')
        setEnd(false)
        return;
    }

    // MAX
    if (mobile.length !== 11 || mobile.length === 0) {
        setMessage('شماره همراه وارد شده صحیح نیست')
        setEnd(false)
        return;
    }
    if (mobile.length === 11) {
        if (mobile.substring(0, 2) !== '09') {
            setMessage('شماره همراه وارد شده صحیح نیست')
            setEnd(false)
            return;
        }

    }
    if (gender.length === 0) {
        setMessage('لطفا جنسیت خود را مشخص کنید')
        setEnd(false)
        return;
    }
    if (married.length === 0) {
        setMessage('لطفا وضعیت تاهل خود را مشخص کنید')
        setEnd(false)
        return;
    }
    if (bd.length < 1) {
        setMessage('لطفا تاریخ تولد خود را انتخاب کنید')
        setEnd(false)
        return;
    }

    if (state.length === 0) {
        setMessage('لطفا استان محل سکونت خود را وارد کنید')
        setEnd(false)
        return;
    }
    if (cities.length === 0) {
        setMessage('لطفا شهرستان محل سکونت خود را وارد کنید')
        setEnd(false)
        return;
    }
    if (blood.length === 0) {
        setMessage('لطفا گروه خونی خود را مشخص کنید')
        setEnd(false)
        return;
    }
    if (education.length === 0) {
        setMessage('لطفا تحصیلات خود را مشخص کنید')
        setEnd(false)
        return;
    }


    //MIN
    if (weight === '' || parseInt(weight) < 30) {
        setMessage('وزن انتخابی مجاز نیست، لطفا وزن خود را به صورت کیلوگرم وارد کنید')
        setEnd(false)
        return;
    }
    // MAX
    if (weight === '' || parseInt(weight) > 200) {
        setMessage('وزن انتخابی مجاز نیست، لطفا وزن خود را به صورت کیلوگرم وارد کنید')
        setEnd(false)

        return;
    }
    //MIN
    if (height === '' || parseInt(height) < 50) {
        setMessage('قد انتخابی مجاز نیست، لطفا قد خود را به صورت سانتی متر وارد کنید')
        setEnd(false)
        return;
    }
    // MAX
    if (height === '' || parseInt(height) > 230) {
        setMessage('قد انتخابی مجاز نیست، لطفا قد خود را به صورت سانتی متر وارد کنید')
        setEnd(false)

        return;
    }


    f = false;









    let city_id = 1;
    Object.entries(shahrestan).forEach(
        ([key, value]) => {
            if (value === cities) {
                city_id = key;
            }
        })

    let auth = JSON.parse(localStorage.getItem('myBeLovedToken'));
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('myBeLovedToken'))}`,


    }
    let data = {
        full_name: name,
        sex: gender,
        city: city_id,
        province: index,
        married: married,
        education: education,
        height: height,
        weight: weight,
        blood: blood,
        birthday: bd,
        mobile: mobile
    }


    const url = 'http://185.55.226.171/api/profile';
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";

    axios.post(url, data, {
        headers: headers
    }).then((response) => {
        store.dispatch({
            type: 'SET_CURRENT_USER', payload: {
                ...data, city: { id: city_id, title: cities },
                province: { id: index, title: state },
                token: JSON.parse(localStorage.getItem('myBeLovedToken'))
            }
        })
        store.dispatch({ type: 'USER_END_FIRST_TIME' });
        localStorage.setItem('myBeLovedToken', JSON.stringify(auth));
    })
        .catch((error) => {
            //console.log(error.response)
        })




}


