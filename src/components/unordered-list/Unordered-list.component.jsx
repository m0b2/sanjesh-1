import React from 'react';
import './Unordered-list.style.css';

const Ul = (props)=>{
    const li = props.li.map((value,index)=><li><a href={value.href}>{value.name}</a></li>);

    return(
        <ul className='unordered-list'>
            {li}
        </ul>
    )
}


export default Ul;