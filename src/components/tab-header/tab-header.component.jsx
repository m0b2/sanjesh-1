import React from 'react';
import './tab-header.style.css';
import TabItem from '../tab-item/tab-item.component';


export default ({ }) => {
    const [active, setActive] = React.useState('فردی');


    return (
        <div className='tab-contianer'>
        <TabItem title={'فردی'} activeTab={active} setActive={setActive}/>
        <TabItem title={'رفتاری'} activeTab={active} setActive={setActive}/>
        </div>
    )

}