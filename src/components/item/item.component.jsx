import React from 'react';
import './item.style.css';

const Item = ({ title, Icon, history, historyTopush }) => {

    return (
        <div className="side-bar-item">
            <Icon style={{ fontSize: 40 ,color: '#283593'}}/>
            <p style={{ marginRight: '16px' , fontFamily:'B Yekan', fontSize:'20px' }}>{title}</p>
        </div>
    )
}


export default Item;