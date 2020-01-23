import React from 'react';
import './footer.style.css';
import Footeritem from '../footer-item/footer-item.component';
import { withRouter } from 'react-router-dom';

const Footer = ({ location }) => {
    const [active, setActive] = React.useState(location.pathname.substring(1));
   //   *** set active tab to current location!! ***

    return (
        <div className='main-footer'>
            <Footeritem iconClass={'home'} active={active} setCurrent={setActive} />
            <Footeritem iconClass={'search'} active={active} setCurrent={setActive} />
            <Footeritem iconClass={'question'} active={active} setCurrent={setActive} />
            <Footeritem iconClass={'notif'} active={active} setCurrent={setActive} />
        </div>
    )

}


export default withRouter(Footer);