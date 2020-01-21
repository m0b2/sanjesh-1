import React from 'react';
import Items from '../../containers/items/items.component';
import Item from '../item/item.component';

const Menu = () => {

    return (
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}

                <Item title='خانه' href='#' classIcon={'fa fa-home nav-icon'} active={true} />
                <Items title={'پروفایل'} classIcon={''}>
                    <Item title='مشاهده پروفایل' href='#' classIcon={'right fa fa-address-card nav-icon'} />
                    <Item title='ویرایش اطلاعات' href='#' classIcon={'fa fa-pencil nav-icon'} />
                    <Item title='تغییر کلمه عبور' href='#' classIcon={'fa fa-key nav-icon'} />
                </Items>

                <Items title={'سوالات'} classIcon={''}>
                    <Item title='سوالات سنجش فردی' href='#' classIcon={'fa fa-tasks nav-icon'} />
                    <Item title='سوالات مدیریت رفتار' href='#' classIcon={'fa fa-tasks nav-icon'} />
                </Items>
                <Item title='اعلان‌ها' href='#' classIcon={'fa fa-bell nav-icon'}>

                </Item>
                <Item title='خروج' href='#' classIcon={'fa fa-sign-out nav-icon'} />


            </ul>
        </nav>
    )
}


export default Menu;