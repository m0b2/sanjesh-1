import React from 'react';
import './categories.style.css';
import Categories from '../../containers/categories/categories.container';
const category = ['کار', 'مسکن', 'پیشینه روابط', 'جنسی', 'سلامت', 'ظاهر', 'پدر و مادر', 'خانواده های گسترده', 'دوستان', 'حیوانات خانگی',
    'سیاست', 'جامعه', 'کارهای خیریه', 'خدمت سربازی', 'قانون', 'رسانه', 'دین', 'فرهنگ', 'اوقات فراغت', 'تعطیلات و جشن ها', 'سفر و تفریح',
    'آموزش', 'حمل و نقل', 'ارتباطات', 'صرف غذا', 'نقش پذیری جنسی', 'نژاد، قومیت و تفاوت', 'زندگی هر روزه']

export default () => {


    return (
        <Categories data={category} />
    )
}