import React from 'react';
import './homepage-content.style.css';
import NumberStatic from '../../components/number-static/number-static.component';
import Categories from '../categories/categories.container';
const category = ['کار', 'مسکن', 'پیشینه روابط', 'جنسی', 'سلامت', 'ظاهر', 'پدر و مادر', 'خانواده های گسترده', 'دوستان', 'حیوانات خانگی',
    'سیاست', 'جامعه', 'کارهای خیریه', 'خدمت سربازی', 'قانون', 'رسانه', 'دین', 'فرهنگ', 'اوقات فراغت', 'تعطیلات و جشن ها', 'سفر و تفریح',
    'آموزش', 'حمل و نقل', 'ارتباطات', 'صرف غذا', 'نقش پذیری جنسی', 'نژاد، قومیت و تفاوت', 'زندگی هر روزه']




export default ({ activePage }) => {
    return (
        <div className="home-wrapper">
            <div>
                <div className='progresss-div'>

                    <NumberStatic total={30} current={12} pathColor={'red'} title={'موضوعات تکمیل شده'} />
                    <NumberStatic total={125} current={46} pathColor={'blue'} title={'سوالات پاسخ داده شده'} />
                    <NumberStatic total={30} current={12} pathColor={'green'} title={'موضوعات تکمیل شده'} />
                    <NumberStatic total={125} current={46} pathColor={'yellow'} title={'سوالات پاسخ داده شده'} />

                </div>
            </div>








        </div>

    )
}