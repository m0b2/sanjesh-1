import React from 'react';
import './menu.style.css';
import Item from '../item/item.component';


const Menu = (props) => {

    return (
        <div className='menu-item' onClick={()=>props.history.push(`/${props.historytoPush}`)}>
            <Item {...props}/>
        </div>
    )
}


export default Menu;