import React from 'react';
import './tab-item.style.css';
import store from '../../redux/store';

// SET_CURRENT_TAB
export default ({ title, activeTab, setActive, index }) => {

    const myclass = (index === activeTab) ? "tab-span tab-item-active" : "tab-span";
    
    return (

        <span className={myclass}
            onClick={() => {
                // setActive(index);
                // store.dispatch({ type: 'SET_QUESTION_TYPE', payload: index });
                store.dispatch({ type: 'SET_CURRENT_TAB', payload: index });
            }}
        >
            {title}
        </span>


    )

}