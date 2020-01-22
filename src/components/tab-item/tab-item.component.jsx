import React from 'react';
import './tab-item.style.css';
import store from '../../redux/store';


export default ({ title, activeTab, setActive, index }) => {

    const myclass = (index === activeTab) ? "tab-span tab-item-active" : "tab-span";
    store.dispatch({ type: 'SET_QUESTION_TYPE', payload: activeTab });
    return (

        <span className={myclass}
            onClick={() => {
                setActive(index);
                store.dispatch({ type: 'SET_QUESTION_TYPE', payload: index });
            }}
        >
            {title}
        </span>


    )

}