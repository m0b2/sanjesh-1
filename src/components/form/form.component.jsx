import './form.style.css';
import React, { useState } from "react";
import Dialog from '../dialog/dialog.component';
import { useStore } from 'react-redux'
import TextDialog from '../textInput-dialog/textInput-dialog.component';
import axios from 'axios';

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

const Form = ({ disabled, user }) => {
    const [name, setName] = useState(user.full_name);
    const [gender, setGender] = useState(user.sex);
    const [married, setMarried] = useState(user.married);
    const [state, setState] = useState(user.province);
    const [cities, setCities] = useState(user.city);
    const [education, setEducation] = useState(user.education);
    const [age, setAge] = useState('21');//user.???
    const [blood, setBlood] = useState(user.blood);
    const [height, setHeight] = useState(user.height);
    const [weight, setWeight] = useState(user.weight);
    const [mobile, setMobile] = useState(user.mobile);
    const city = useStore().getState().CityReducer;









    const sendProfile = () => {




        const headers = {
            'Content-Type': 'application/json',
            'Vary': 'Authorization',
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('myBeLovedToken'))}`,


        }
        const data = {
            "full_name": name,
            "sex": gender,
            "city": cities,
            "province": state,
            "married": married,
            "education": education,
            "height": height,
            "weight": weight,
            "blood": blood,
            "birthday": user.birthday,
            "mobile": mobile
        }


        const url = 'http://185.55.226.171/api/login';
        const proxyurl = "https://cors-anywhere.herokuapp.com/";

        axios.post(proxyurl + url, data, {
            headers: headers
        }).then((response) => {
            console.log('data profile poster succesuflly')
        })




    }







    useStore().dispatch({ type: 'SET_GLOBAL_FUNCTION', payload: sendProfile })





    return (


        <div style={{ direction: 'rtl' }}>


            <TextDialog state={name} setState={setName} items={[]} title={'نام و نام خانوادگی'} disabled={disabled} />
            <TextDialog state={mobile} setState={setMobile} items={[]} title={'شماره موبایل'} disabled={disabled} />
            <Dialog state={gender} setState={setGender} items={gender_values} title={'جنسیت'} disabled={disabled} />
            <Dialog state={blood} setState={setBlood} items={blood_type} title={'گروه خونی'} disabled={disabled} />
            <Dialog state={state} setState={setState} items={state_values} title={'استان'} disabled={disabled} />
            <Dialog state={cities} setState={setCities} items={city[state] ? city[state] : []} title={'شهرستان'} disabled={disabled} />
            <Dialog state={married} setState={setMarried} items={married_values} title={'وضعیت تاهل'} disabled={disabled} />
            <Dialog state={education} setState={setEducation} items={education_values} title={'تحصیلات'} disabled={disabled} />
            <TextDialog state={height} setState={setHeight} items={[]} title={'قد'} disabled={disabled} />
            <TextDialog state={weight} setState={setWeight} items={[]} title={'وزن'} disabled={disabled} />
            <TextDialog state={age} setState={setAge} items={[]} title={'سال تولد'} disabled={disabled} />





        </div>

    )
}


export default Form;


