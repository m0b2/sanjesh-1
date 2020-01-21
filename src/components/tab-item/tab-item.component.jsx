import React from 'react';
import './tab-item.style.css';



export default ({ title, activeTab, setActive }) => {

    const myclass = (title === activeTab) ? "tab-span tab-item-active" : "tab-span";
    return (

        <span className={myclass}
            onClick={() => {
                    setActive(title);
            }}
        >
            {title}
        </span>


    )

}