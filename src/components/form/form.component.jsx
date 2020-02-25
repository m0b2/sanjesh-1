import './form.style.css';
import React, { useState } from "react";
import Dialog from '../dialog/dialog.component';
import { connect, useStore } from 'react-redux'
import TextDialog from '../textInput-dialog/textInput-dialog.component';
import axios from 'axios';
let index = 1;
const gender_values = ['مرد', 'زن'];
const married_values = ['متاهل', 'مجرد', 'مطلقه'];
const blood_type = ['+A', '+B', '+AB', '+O', '-A', '-B', '-AB', '-O'];
const education_values = ['زیردیپلم', 'دیپلم', 'فوق دیپلم', 'کارشناسی', 'کارشناسی ارشد', 'دکتری'];
const state_values = [
    'تهران', 'گیلان', 'آذربایجان شرقی', 'خوزستان', 'فارس',
    'اصفهان', 'خراسان رضوی', 'قزوین', 'سمنان', 'قم',
    'مرکزی', 'زنجان', 'مازندران', 'گلستان', 'اردبیل',
    'آذربایجان غربی', 'همدان', 'کردستان', 'کرمانشاه', 'لرستان',
    'بوشهر', 'کرمان', 'هرمزگان', 'چهارمحال و بختیاری', 'یزد',
    'سیستان و بلوچستان', 'ایلام', 'کهگلویه و بویراحمد', 'خراسان شمالی', 'خراسان جنوبی',
    'البرز'];

const Form = ({ disabled, user, city }) => {


    const [name, setName] = useState(user.full_name);
    const [gender, setGender] = useState(user.sex);
    const [married, setMarried] = useState(user.married);
    const [state, setState] = useState(user.province.title);
    const [cities, setCities] = useState(user.city.title);
    const [education, setEducation] = useState(user.education);
    const [age, setAge] = useState('21');//user.???
    const [blood, setBlood] = useState(user.blood);
    const [height, setHeight] = useState(user.height);
    const [weight, setWeight] = useState(user.weight);
    const [mobile, setMobile] = useState(user.mobile);
    const store = useStore();
    const [shahrestan, setSharestan] = useState('');

    React.useEffect(() => {
        getcity(store)
    }, [])








    const sendProfile = () => {




        const headers = {
            'Content-Type': 'application/json',

            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('myBeLovedToken'))}`,


        }
        const data = {
            full_name: name,
            sex: gender,
            city: cities,
            province: state,
            married: married,
            education: education,
            height: height,
            weight: weight,
            blood: blood,
            birthday: user.birthday,
            mobile: mobile
        }


        const url = 'http://185.55.226.171/api/profile';
        const proxyurl = "https://cors-anywhere.herokuapp.com/";

        axios.post( url, data, {
            headers: headers
        }).then((response) => {
            store.dispatch({ type: 'SET_CURRENT_USER', payload: data })
        })
            .catch((error) => {
                console.log(error.response)
            })




    }


    if (city && state.length > 1 && Object.keys(shahrestan).length === 0) {
        console.log('Yes')
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





    useStore().dispatch({ type: 'SET_GLOBAL_FUNCTION', payload: sendProfile })





    return (


        <div style={{ direction: 'rtl' }}>


            <TextDialog state={name} setState={setName} items={[]} title={'نام و نام خانوادگی'} disabled={disabled} />
            <TextDialog state={mobile} setState={setMobile} items={[]} title={'شماره موبایل'} disabled={disabled} />
            <Dialog state={gender} setState={setGender} items={gender_values} title={'جنسیت'} disabled={disabled} />
            <Dialog state={blood} setState={setBlood} items={blood_type} title={'گروه خونی'} disabled={disabled} />
            <Dialog state={state} setState={(new_city) => {
                if (new_city !== state) {
                    setSharestan({});
                    setState(new_city)
                    setCities('')
                }
            }} items={city ? city : []} title={'استان'} disabled={disabled} />
            <Dialog state={cities} setState={setCities} items={shahrestan_items} title={'شهرستان'} disabled={disabled} />
            <Dialog state={married} setState={setMarried} items={married_values} title={'وضعیت تاهل'} disabled={disabled} />
            <Dialog state={education} setState={setEducation} items={education_values} title={'تحصیلات'} disabled={disabled} />
            <TextDialog state={height} setState={setHeight} items={[]} title={'قد'} disabled={disabled} />
            <TextDialog state={weight} setState={setWeight} items={[]} title={'وزن'} disabled={disabled} />
            <TextDialog state={age} setState={setAge} items={[]} title={'سال تولد'} disabled={disabled} />





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
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    axios.get( url, { headers: headers })
        .then((response) => {
            if (response.data.status === 200) {
                // console.log(response.data)

                setSharestan(response.data.data)
                // store.dispatch({ type: 'SET_LOADING', payload: { profile: false } });
                // console.log(response.data)

            }

        }).catch((error) => {
            if (error && error.response && error.response.status === 401) {
                // console.log('Singed out!!!')
            } else {
                // console.log('there is an problem')
            }

            console.log(error)

        })


}



const getcity = (store) => {


    const headers = {


    }

    const url = `http://185.55.226.171/api/provinces`;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    axios.get( url, { headers: headers })
        .then((response) => {
            if (response.data.status === 200) {
                // console.log(response.data)
                let arr = [];
                Object.entries(response.data.data).forEach(
                    ([key, value]) => {
                        arr.push(value)
                    }
                )

                store.dispatch({ type: 'SET_CITY', payload: arr });
                // store.dispatch({ type: 'SET_LOADING', payload: { profile: false } });
                // console.log(response.data)

            }

        }).catch((error) => {
            if (error && error.response && error.response.status === 401) {
                // console.log('Singed out!!!')
                store.dispatch({ type: 'NOT_AUTHORISED', payload: '' })
            } else {
                // console.log('there is an problem')
                store.dispatch({ type: 'AUTHORIZATION_NOT_HAPPEND', payload: '' })
            }

            console.log(error)

        })



}