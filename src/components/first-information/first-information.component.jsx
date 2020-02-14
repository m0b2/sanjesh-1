import React, { useState } from "react";
import './first-information.style.css';
import DotFooter from '../dot-footer/dot-footer.component';
import Dialog from '../dialog/dialog.component';
import TextDialog from '../textInput-dialog/textInput-dialog.component';
import { useStore } from 'react-redux';
import Fade from 'react-reveal/Fade';

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


const FirstInformation = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [gender, setGender] = useState('');
    const [married, setMarried] = useState('');
    const [state, setState] = useState('');
    const [cities, setCities] = useState('');
    const [education, setEducation] = useState('');
    const [age, setAge] = useState('');
    const [blood, setBlood] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [step, setStep] = useState(0);
    const city = useStore().getState().CityReducer;



    const stepComponent = [
        <><p className="login-copy">درصورت تمایل اطلاعات زیر را وارد نمایید</p>
            <TextDialog state={name} setState={setName} items={[]} title={'نام و نام خانوادگی'} />
            <TextDialog state={number} setState={setNumber} items={[]} title={'شماره همراه'} />
            <p className="login-copy" style={{ color: '#b71c1c', cursor: 'pointer' }}
                onClick={() => setStep((oldState) => oldState + 1)}
            >مایل به وارد کردن موارد فوق نیستم</p></>,



        <>
            <p className="login-copy">محل سکونت خود را وارد نمایید</p>
            <Dialog state={state} setState={setState} items={state_values} title={'استان'} />
            <Dialog state={cities} setState={setCities} items={city[state] ? city[state] : []} title={'شهرستان'} />
            <Dialog state={education} setState={setEducation} items={education_values} title={'تحصیلات'} />

        </>,





        <>
            <p className="login-copy">لطفا اطلاعات زیر را کامل نمایید</p>
            <Dialog state={gender} setState={setGender} items={gender_values} title={'جنسیت'} />
            <Dialog state={married} setState={setMarried} items={married_values} title={'وضعیت تاهل'} />

            <TextDialog state={age} setState={setAge} items={[]} title={'سال تولد'} />



        </>,

        <>
            <p className="login-copy">لطفا اطلاعات زیر را کامل نمایید</p>
            <Dialog state={blood} setState={setBlood} items={blood_type} title={'گروه خونی'} />
            <TextDialog state={height} setState={setHeight} items={[]} title={'قد'} />
            <TextDialog state={weight} setState={setWeight} items={[]} title={'وزن'} />


        </>,


    ];


    return (

        <div id="first-information">


            <div className="login-form">
                <div className="login-heading-container">
                    <h3 className="login-heading" style={{ direction: 'rtl', fontFamily: 'Samim', color: 'black' }}>
                        مشخصات</h3>
                </div>
                <div style={{ minHeight: '320px' }}>
                    <Fade spy={step} duration={400}>
                        {stepComponent[step]}
                    </Fade>
                </div>
                {/* {step === 3 ?
                    <button className="end-form-button" style={{ background: '#0094CC' }} >پایان</button> :
                    null} */}

                <DotFooter activeStep={step} setActiveStep={setStep} totalStep={4} />

            </div>
        </div>


    )

};



export default FirstInformation;