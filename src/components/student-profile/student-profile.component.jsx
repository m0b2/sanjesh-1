import React, { useState } from "react";
import Dialog from '../dialog/dialog.component';
import TextDialog from '../textInput-dialog/textInput-dialog.component';
const hamsanGozini_values = [' تمایل دارم جهت ازدواج مورد سنجش قرار گیرم', 'تمایلی به این کار ندارم'];

const isargari_values = ['شاهد', 'جانباز','آزاده', 'رزمنده', 'هیچکدام',];
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
    const [studentNumber, setStudentNumber] = useState('9442365104');
    const [hamsan, setHamsan] = useState('');
    const [collegeCity, setCollegeCity] = useState('');
    const [placeofIssue, setPlaceofIssue] = useState('');
    const [isargari, setIsargari] = useState('');
    const [education, setEducation] = useState('لیسانس');
    const [enterYear, setEnterYear] = useState('68');

    return (


        <div style={{ direction: 'rtl' }}>


            <TextDialog state={studentNumber} setState={setStudentNumber} items={[]} title={'شماره دانشجویی'} disabled={disabled} />
            <Dialog state={hamsan} setState={setHamsan} items={hamsanGozini_values} title={'همسان گزینی'} disabled={disabled} />
            <Dialog state={collegeCity} setState={setCollegeCity} items={state_values} title={'دانشگاه محل تحصیل'} disabled={disabled} />
            <Dialog state={education} setState={setEducation} items={education_values} title={'مقطع تحصیلی'} disabled={disabled} />
            <TextDialog state={enterYear} setState={setEnterYear} items={[]} title={'سال ورود'} disabled={disabled} />
            <TextDialog state={placeofIssue} setState={setPlaceofIssue} items={[]} title={'محل صدور'} disabled={disabled} />
            <Dialog state={isargari} setState={setIsargari} items={isargari_values} title={'وضعیت ایثارگری'} disabled={disabled} />
            





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

