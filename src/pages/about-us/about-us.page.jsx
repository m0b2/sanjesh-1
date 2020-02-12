import React from 'react';
import './about-us.style.css';
import CCard from '../../components/contact-card/contact-card.component';

const AboutUs = () => {
    const Teams = team.map((value, index) => <CCard key={`teamm${index}`}
        name={value.name} title={value.title} image={value.image} />)

    return (
        <div className='abous-us-container'>
            <h3 style={{
                width: '100%', fontFamily: "Samim", fontSize: '22px', paddingTop: '28px',
                fontWeight: '900', textAlign: 'center'
            }}>اعضای اصلی پایگاه تفاهم سنجی زوجین</h3>
            {Teams}
        </div>
    )
}



export default AboutUs;



const team = [
    { name: 'مهرداد قیطاسی', title: 'مدیر پایگاه تفاهم سنجی زوجین', image: 'http://sanjesh.love/img/team/team_img1.jpg' },
    { name: 'میثم شیروانی', title: 'مدیر فنی پایگاه تفاهم سنجی زوجین', image: 'http://sanjesh.love/img/team/team_img2.jpg' },
    { name: 'علی رجبی', title: 'مدیر کنترل محتوا و تبلیغات پایگاه تفاهم سنجی زوجین', image: 'http://sanjesh.love/img/team/team_img3.jpg' },
    { name: 'مستانه جعفربیگی', title: 'مدیر رسانه پایگاه تفاهم سنجی زوجین', image: 'http://sanjesh.love/img/team/team_img4.jpg' },
    { name: 'آزاده عباسی', title: 'مدیر مشاوره و روانشناسی پایگاه تفاهم سنجی زوجین', image: 'http://sanjesh.love/img/team/team_img5.jpg' },
    { name: 'حسنا دارابی', title: 'مدیر فرهنگی اجتماعی و تبلیغات اسلامی پایگاه تفاهم سنجی زوجین', image: 'http://sanjesh.love/img/team/team_img6.jpg' },
]