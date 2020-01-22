import React from 'react';
import './tab-header.style.css';
import TabItem from '../tab-item/tab-item.component';


export default ({ }) => {
    const [active, setActive] = React.useState(0);


    return (
        <div className='tab-contianer'>
        <TabItem title={'فردی'} activeTab={active} setActive={setActive} index={0}/>
        <TabItem title={'رفتاری'} activeTab={active} setActive={setActive} index={1}/>
        </div>
    )

}