import React from 'react';
import './admin-homepage-content.style.css';
import IconCard from '../../components/icon-card/icon-card.component';
import barchart from '../../assets/barchart.svg';
import settings from '../../assets/settings.svg';
import add from '../../assets/add.svg';
import shape from '../../assets/shape.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



const AdminHomePage = ({ admin }) => {

    if (!admin || !admin.access) {
        return <div></div>
    }
    let ac = admin.access;

    // let dastrasi = {
    //     category: { view: null, create: null, update: null, delete: null },
    //     notification: { view: null, create: null, update: null, delete: null },
    //     role: { view: null, create: null, update: null, delete: null },
    //     user: { view: null, create: null, update: null, delete: null },
    //     setting: { view: null, create: null, update: null, delete: null },
    //     question: { view: null, create: null, update: null, delete: null },
    // }
    let panels = [
        { title: 'آمار', icon: barchart, link: '/chart' },
        (ac.user.create) ? { title: 'افزودن مدیر', icon: add, link: '/createadmin' } : null,
        (ac.category.view) ? { title: 'دسته‌ بندی', icon: shape, link: '/category' } : null,
        (ac.setting.view) ? { title: 'تنظیمات', icon: settings, link: '/setting' } : null,

    ]








    return (
        <div className="home-wrapper">

            <div className='progresss-div'>

                {panels.map((value, index) =>
                    (value) ?
                        <Link
                            to={`${value.link}`}
                            style={{ color: 'inherit', textDecoration: 'inherit' }}
                            key={`homeicon${index}`}
                        >
                            <IconCard adminCard icon={value.icon} title={value.title} />



                        </Link>
                        :
                        null
                )

                }




            </div>









        </div>

    )
}


const mapStateToProps = store => {
    return {

        admin: store.admin,
    };
};


export default connect(mapStateToProps)((AdminHomePage));

