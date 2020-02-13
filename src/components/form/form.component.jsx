import './form.style.css';
import React, { useState } from "react";
import Dialog from '../dialog/dialog.component';
import { useStore } from 'react-redux'
import TextDialog from '../textInput-dialog/textInput-dialog.component';
const gender_values = ['مرد', 'زن'];

const married_values = ['متاهل', 'مجرد', 'مطلقه'];
const blood_type = ['+A', '+B', '+AB', '+O', '-A', '-B', '-AB', '-O'];
const education_values = ['زیردیپلم', 'دیپلم', 'فوق دیپلم', 'لیسانس', 'فوق لیسانس', 'دکتری'];
const state_values = [
    'تهران', 'گیلان', 'آذربایجان شرقی', 'خوزستان', 'فارس',
    'اصفهان', 'خراسان رضوی', 'قزوین', 'سمنان', 'قم',
    'مرکزی', 'زنجان', 'مازندران', 'گلستان', 'اردبیل',
    'آذربایجان غربی', 'همدان', 'کردستان', 'کرمانشاه', 'لرستان',
    'بوشهر', 'کرمان', 'هرمزگان', 'چهارمحال و بختیاری', 'یزد',
    'سیستان و بلوچستان', 'ایلام', 'کهگلویه و بویراحمد', 'خراسان شمالی', 'خراسان جنوبی',
    'البرز'];
const Form = ({disabled}) => {
    const [name, setName] = useState('اکبر عبدی');
    const [gender, setGender] = useState('مرد');
    const [married, setMarried] = useState('متاهل');
    const [state, setState] = useState('اردبیل');
    const [cities, setCities] = useState('اردبیل');
    const [education, setEducation] = useState('لیسانس');
    const [age, setAge] = useState('68');
    const [blood, setBlood] = useState('+A');
    const [height, setHeight] = useState('175');
    const [weight, setWeight] = useState('95');
    const city = useStore().getState().CityReducer;
    // console.log('form render!')
    return (


        <div style={{ direction: 'rtl' }}>


            <TextDialog state={name} setState={setName} items={[]} title={'نام و نام خانوادگی'} disabled={disabled} />
            <Dialog state={gender} setState={setGender} items={gender_values} title={'جنسیت'}  disabled={disabled} />
            <Dialog state={blood} setState={setBlood} items={blood_type} title={'گروه خونی'}  disabled={disabled} />
            <Dialog state={state} setState={setState} items={state_values} title={'استان'}  disabled={disabled} />
            <Dialog state={cities} setState={setCities} items={city[state] ? city[state] : []} title={'شهرستان'}  disabled={disabled} />
            <Dialog state={married} setState={setMarried} items={married_values} title={'وضعیت تاهل'}  disabled={disabled} />
            <Dialog state={education} setState={setEducation} items={education_values} title={'تحصیلات'}  disabled={disabled} />
            <TextDialog state={height} setState={setHeight} items={[]} title={'قد'}  disabled={disabled} />
            <TextDialog state={weight} setState={setWeight} items={[]} title={'وزن'}  disabled={disabled} />
            <TextDialog state={age} setState={setAge} items={[]} title={'سال تولد'}  disabled={disabled} />





        </div>

    )
}


export default Form;







// const DateComponent = <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa"
// style={{
//     maxWidth: '218px', fontFamily: 'Samim',
//     backgroundColor: 'transparent', borderColor: 'transparent'
// }}

// >

// <DatePicker
//     clearable
//     okLabel="تأیید"
//     cancelLabel="لغو"
//     clearLabel="پاک کردن"
//     labelFunc={date => (date ? date.format("jYYYY/jMM/jDD") : "")}
//     value={selectedDate}
//     onChange={handleDateChange}
//     style={{ fontFamily: 'Samim', backgroundColor: 'transparent', borderColor: 'transparent' }}
//     color={'secondary'}

// />
// </MuiPickersUtilsProvider>

