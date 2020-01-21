import React from 'react';
import './categories.style.css';
import Category from '../../components/category/category.component';


export default ({ data }) => {

    const MyCategories = data.map((value, index) =>
        <Category title={value}
            icon={`https://sanjesh.love/amar/img/${index + 1}.gif`}
            current={Math.floor(Math.random() * 50)}
            total={Math.floor(Math.random() * 50) + 50}
        />
    )
    return (
        <div className='categories'>

            {MyCategories}

        </div>
    )

}