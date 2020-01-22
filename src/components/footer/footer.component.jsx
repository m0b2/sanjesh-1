import React from 'react';
import './footer.style.css';
import Footeritem from '../footer-item/footer-item.component';

export default () => {
    const [active, setActive] = React.useState('home');

    return (
        <div className='main-footer'>
            <Footeritem iconClass={'home'} active={active} setCurrent={setActive} />
            <Footeritem iconClass={'search'} active={active} setCurrent={setActive} />
            <Footeritem iconClass={'question'} active={active} setCurrent={setActive} />
            <Footeritem iconClass={'notif'} active={active} setCurrent={setActive} />
        </div>
    )

}