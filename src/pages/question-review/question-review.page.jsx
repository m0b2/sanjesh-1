import React from 'react';
import './question-review.style.css';
import {useParams} from "react-router-dom";
export default () => {

    const {index} = useParams();


    return (
        <h1>{index}</h1>
    )
}