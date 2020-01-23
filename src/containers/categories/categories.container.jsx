import React from 'react';
import './categories.style.css';
import Category from '../../components/category/category.component';
import Tab from '../../components/tab-header/tab-header.component';
import { connect } from 'react-redux';

const Categories = (props) => {
    const { data, current_tab } = props;
    const offset = (current_tab === 0) ? 1 : 29;
    const MyCategories = data[current_tab].map((value, index) =>
        <Category title={value}
            icon={`https://sanjesh.love/amar/img/${index + offset}.gif`}
            current={Math.floor(Math.random() * 50)}
            total={Math.floor(Math.random() * 50) + 50}
            index={index}
            tuchable
        />
    )
    return (
        <div className='categories'>
            <Tab />
            {MyCategories}
        </div>
    )

}

const mapStateToProps = (state) => {
    return (
        {
            current_tab: state.question_type
        }
    )

}


export default connect(mapStateToProps)(Categories);
