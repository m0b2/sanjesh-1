import React from 'react';
import './footer-item.style.css';
import { withRouter} from 'react-router-dom';



const Footer_Item = ({ iconClass, active, setCurrent, history }) => {
    const current = active === iconClass ? 'active' : '';

    return (
        <div className={'footer-item' + ` ${current}`}
            onClick={() => {
                setCurrent(iconClass);
                history.push('/'+iconClass);
            }
            }>

            <span className={`footer-icon ${iconClass}-icon`}></span>

        </div>
    )
}


export default withRouter(Footer_Item);


