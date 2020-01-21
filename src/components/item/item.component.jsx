import React from 'react';


const Item = (props) => {

    return (
        <li className="nav-item">
            <a href={props.href} className={"nav-link"}>
                <i className={props.classIcon}></i>
                <p>{props.title}</p>
                {props.children}

            </a>
        </li>
    )
}


export default Item;