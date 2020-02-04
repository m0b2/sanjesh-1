import React from 'react';
import './homepage-content.style.css';
import NumberStatic from '../../components/number-static/number-static.component';
import IconCard from '../../components/icon-card/icon-card.component';
import Categories from '../categories/categories.container';
import talk from '../../assets/talk.svg';
import compare from '../../assets/compare.svg';

const category = ['کار', 'مسکن', 'پیشینه روابط', 'جنسی', 'سلامت', 'ظاهر', 'پدر و مادر', 'خانواده های گسترده', 'دوستان', 'حیوانات خانگی',
    'سیاست', 'جامعه', 'کارهای خیریه', 'خدمت سربازی', 'قانون', 'رسانه', 'دین', 'فرهنگ', 'اوقات فراغت', 'تعطیلات و جشن ها', 'سفر و تفریح',
    'آموزش', 'حمل و نقل', 'ارتباطات', 'صرف غذا', 'نقش پذیری جنسی', 'نژاد، قومیت و تفاوت', 'زندگی هر روزه'];




export default ({ activePage }) => {
    return (
        <div className="home-wrapper">

            <div className='progresss-div'>

                <NumberStatic total={30} current={12} pathColor={'red'} title={'موضوعات تکمیل شده'} />
                <NumberStatic total={125} current={46} pathColor={'blue'} title={'سوالات پاسخ داده شده'} />
                <IconCard number={'6'} icon={talk} title={'نیازمند مشاوره'} />
                <IconCard number={'4'} icon={compare} title={'تعداد قیاس'} />



            </div>









        </div>

    )
}