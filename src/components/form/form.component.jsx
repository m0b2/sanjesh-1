import './form.style.css';
import React, { useState } from "react";
import Dialog from '../dialog/dialog.component';
import { connect, useStore } from 'react-redux'
import TextDialog from '../textInput-dialog/textInput-dialog.component';
import axios from 'axios';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DateDialog from '../dialog-date-input/dialog-date-input.component';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router-dom';
let index = 1;
const gender_values = ['مرد', 'زن'];
const married_values = ['متاهل', 'مجرد', 'مطلقه'];
const blood_type = ['+A', '+B', '+AB', '+O', '-A', '-B', '-AB', '-O'];
const education_values = ['زیردیپلم', 'دیپلم', 'فوق دیپلم', 'کارشناسی', 'کارشناسی ارشد', 'دکتری'];
let city_id = 1;
const Form = ({ disabled, user, city }) => {
    const history = useHistory()
    const [name, setName] = useState(user.full_name);
    const [gender, setGender] = useState(user.sex);
    const [married, setMarried] = useState(user.married);
    const [state, setState] = useState(user.province.title);
    const [cities, setCities] = useState(user.city.title);
    const [education, setEducation] = useState(user.education);
    const [age, setAge] = useState(
        user.birthday && user.birthday.length > 8 ?
            {
                year: parseInt(user.birthday.substring(0, 4)),
                month: parseInt(user.birthday.substring(5, 7)),
                day: parseInt(user.birthday.substring(8, 10))
            } : null);//user.???
    const [blood, setBlood] = useState(user.blood);
    const [height, setHeight] = useState(user.height);
    const [weight, setWeight] = useState(user.weight);
    const [mobile, setMobile] = useState(user.mobile);
    const store = useStore();
    const [shahrestan, setSharestan] = useState('');
    const [message, setMessage] = React.useState('');
    const [status, setStatus] = React.useState({ sending: false, failed: false, sended: false });
    React.useEffect(() => {
        getcity(store)
    }, [])


    let zeroDays = age.day < 10 ? ('0' + age.day) : age.day;
    let zeroMonth = age.month < 10 ? ('0' + age.month) : age.month;
    let bd = age === '' ? '' : `${age.year}-${zeroMonth}-${zeroDays}`;

    const sendProfile = () => {
        // MAX
        if (mobile.length !== 11 || mobile.length === 0) {
            setMessage('شماره موبایل وارد شده صحیح نیست')
            return;
        }
        if (cities.length === 0) {
            setMessage('لطفا شهرستان محل سکونت خود را وارد کنید')
            return;
        }

        //MIN
        if (name.length < 5) {
            setMessage('نام بسیار کوتاه است')
            return;
        }
        // MAX
        if (name.length > 120) {
            setMessage('نام بسیار طولانی است')
            return;
        }
        //MIN
        if (parseInt(weight) < 30) {
            setMessage('وزن انتخابی مجاز نیست، لطفا وزن خود را به صورت کیلوگرم وارد کنید')
            return;
        }
        // MAX
        if (parseInt(weight) > 200) {
            setMessage('وزن انتخابی مجاز نیست، لطفا وزن خود را به صورت کیلوگرم وارد کنید')

            return;
        }
        //MIN
        if (parseInt(height) < 50) {
            setMessage('قد انتخابی مجاز نیست، لطفا قد خود را به صورت سانتی متر وارد کنید')
            return;
        }
        // MAX
        if (parseInt(height) > 230) {
            setMessage('قد انتخابی مجاز نیست، لطفا قد خود را به صورت سانتی متر وارد کنید')

            return;
        }
        if (bd.length < 1) {
            setMessage('لطفا تاریخ تولد خود را انتخاب کنید')

            return;
        }


        setStatus((old) => ({ ...old, sending: true }))

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

        console.log(data)

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('myBeLovedToken'))}`,


        }




        const url = 'http://185.55.226.171/api/profile';

        axios.post(url, data, {
            headers: headers
        }).then((response) => {
            store.dispatch({
                type: 'SET_CURRENT_USER',
                payload: {
                    ...data, city: { id: city_id, title: cities },
                    province: { id: index, title: state },
                    token: JSON.parse(localStorage.getItem('myBeLovedToken'))
                }
            })
            setStatus((old) => ({ ...old, sending: false, sended: true }))
        })
            .catch((error) => {
                //console.log(error.response)
            })




    }


    if (city && state.length > 1 && Object.keys(shahrestan).length === 0) {
        city.map((v, i) => {
            if (v === state) {
                index = i + 1;
            }
        })
        getShahrestan(index, setSharestan);
    }
    Object.entries(shahrestan).forEach(
        ([key, value]) => {
            if (value === cities) {
                city_id = key;
            }
        }
    )



    let shahrestan_items = [];



    Object.entries(shahrestan).forEach(
        ([key, value]) => {
            shahrestan_items.push(value)
        }
    )





    useStore().dispatch({ type: 'SET_GLOBAL_FUNCTION', payload: () => sendProfile(setMessage) })



    if (status.sending) {



        return (<div style={{
            minHeight: '90vh', display: 'flex', justifyContent: 'center',
            alignItems: 'center'
        }}>
            <CircularProgress color="secondary" style={{ margin: '24px' }} />
        </div>)



    }






    if (status.sended) {



        setTimeout(() => {

            history.goBack()
            // window.location.reload();
        }, 2000)
        return (<div style={{
            minHeight: '90vh', display: 'flex', justifyContent: 'center',
            alignItems: 'center'
        }}>
            <span>مشخصات تغییر یافت</span>
        </div>)



    }

























    return (


        <div style={{ direction: 'rtl' }}>


            <TextDialog
                state={name}
                setState={setName}
                items={[]}
                title={'نام و نام خانوادگی'}
                disabled={disabled}
                number={false} />
            <TextDialog
                state={mobile}
                setState={setMobile}
                items={[]}
                title={'شماره موبایل'}
                disabled={disabled}
                number
            />

            <Dialog
                state={gender}
                setState={setGender}
                items={gender_values}
                title={'جنسیت'}
                disabled={disabled} />

            <Dialog
                state={blood}
                setState={setBlood}
                items={blood_type}
                title={'گروه خونی'}
                disabled={disabled}
            />
            <Dialog
                state={state}
                setState={(new_city) => {
                    if (new_city !== state) {
                        setSharestan({});
                        setState(new_city)
                        setCities('')
                    }
                }}
                items={city ? city : []}
                title={'استان'}
                disabled={disabled}
            />
            <Dialog
                state={cities}
                setState={setCities}
                items={shahrestan_items}
                title={'شهرستان'}
                disabled={disabled}
            />
            <Dialog
                state={married}
                setState={setMarried}
                items={married_values}
                title={'وضعیت تاهل'}
                disabled={disabled}
            />
            <Dialog
                state={education}
                setState={setEducation}
                items={education_values}
                title={'تحصیلات'}
                disabled={disabled}
            />
            <TextDialog
                state={height}
                setState={setHeight}
                items={[]}
                title={'قد'}
                disabled={disabled}
                number />
            <TextDialog
                state={weight}
                setState={setWeight}
                items={[]}
                title={'وزن'}
                disabled={disabled}
                number />

            <DateDialog state={bd}
                daySelected={age}
                setState={setAge}
                items={[]}
                title={'تاریخ تولد'}
                disabled={disabled} />



            <p className="login-copy" style={{ color: '#b71c1c', textAlign: 'center' }}>
                {message}
            </p>


        </div>


    )
}

const mapStatetoProps = (store) => {
    return (
        {


            city: store.CityReducer

        }
    )
}

export default connect(mapStatetoProps)(Form);






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