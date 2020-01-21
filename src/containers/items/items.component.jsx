import React from 'react';

const Items = (props) => {
    return (
        <li className="nav-item has-treeview">
            {/* //add 'active' to class <a> to highlight it as a active link */}
            <a href="#" className="nav-link ">
                <i className="nav-icon fa " />
                <p>
                    {props.title}
                    <i className="right fa fa-angle-left" />
                </p>
            </a>
            <ul className="nav nav-treeview">
                {props.children}
            </ul>
        </li>
    )
}


export default Items;