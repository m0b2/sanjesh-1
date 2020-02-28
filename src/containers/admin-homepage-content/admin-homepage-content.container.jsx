import React from 'react';
import './admin-homepage-content.style.css';
import IconCard from '../../components/icon-card/icon-card.component';
import barchart from '../../assets/barchart.svg';
import settings from '../../assets/settings.svg';
import add from '../../assets/add.svg';
import shape from '../../assets/shape.svg';
import { Link } from 'react-router-dom';



export default ({ activePage }) => {

    let panels = [
        { title: 'آمار', icon: barchart, link: '/chart' },
        { title: 'افزودن مدیر', icon: add, link: '/createadmin' },
        { title: 'دسته‌ بندی', icon: shape, link: '/category' },
        { title: 'تنظیمات', icon: settings, link: '/setting' },
        
    ]








    return (
        <div className="home-wrapper">

            <div className='progresss-div'>

                {panels.map((value, index) =>
                    <Link
                        to={`${value.link}`}
                        style={{ color: 'inherit', textDecoration: 'inherit' }}
                        key={`homeicon${index}`}
                    >
                        <IconCard adminCard icon={value.icon} title={value.title} />



                    </Link>
                )

                }




            </div>









        </div>

    )
}