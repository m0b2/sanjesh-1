import React, { useEffect } from "react";
import Categories from "../../containers/categories/categories.container";
import axios from 'axios';
import { useDispatch, useStore, connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Category from '../../components/category/category.component'
import QuestionsTable from '../admin-questions-table/admin-questions-table'
const CategoriesPage = ({ admin }) => {

    useEffect(() => {
        let obj = {};
        // dispatch({ type: 'SET_TAB_VALUE', payload: tabs });
        // dispatch({ type: 'ADD_SIDE_LIST' });
        if (!admin.questions ) {



            const
                headers = {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('myBeLovedToken'))}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Vary': 'Authorization',


                }
            const url = 'http://185.55.226.171/api/questions';
            // const proxyurl = "https://cors-anywhere.herokuapp.com/";
            axios.get( url, { headers: headers })
                .then((response) => {
                     //console.log(response.data.data.data)
                    if (response.data.status === 200) {
                        obj = {};
                        response.data.data.data.map(
                            (value, index) => {

                                obj = {
                                    ...obj,
                                    [value.id]: {
                                        category_id: value.category.id,
                                        title: value.title,
                                        description: value.description,
                                        icon: "fas fa-question",
                                        id: value.id,
                                        index: index,
                                        answers: value.answers,
                                    }
                                }
                            }
                        )


                    }
                    store.dispatch({ type: 'ADMIN_SET_QUESTIONS', payload: obj });

                    //  //console.log(response.data)
                }

                ).catch((error) => {
                    if (error && error.response && error.response.status === 401) {
                        //  //console.log('Singed out!!!')
                        store.dispatch({ type: 'NOT_AUTHORISED', payload: '' })
                    } else {
                         //console.log(error)
                        store.dispatch({ type: 'AUTHORIZATION_NOT_HAPPEND', payload: '' })
                    }

                })




        }

        return () => dispatch({ type: 'REMOVE_SIDE_LIST' });
    }, []);

    const store = useStore();


    /**
     * Moshakhas mikone in page be sideList niaz dare ya na!
     */
    const dispatch = useDispatch();




    if (!admin.questions ) {
        return <div style={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress color="secondary" style={{ margin: '24px' }} />
        </div>
    }



    const MyCategories = Object.keys(admin.questions).map((keyName, index) => (
        <Category
            title={(admin.questions[keyName].title.length > 24 ? admin.questions[keyName].title.substring(0, 24) + '...' : admin.questions[keyName].title)}
            icon={admin.questions[keyName].icon}
            description={admin.questions[keyName].description}
            index={admin.questions[keyName].id}
            key={`category${index}`}
            category_id={`${admin.questions[keyName].category_id}`}
            questionMode
            tuchable
        />
    ));
    return (<>

        <div className="categories" style={{ width: '100%' }}>
            {MyCategories}
        </div>

    </>

    );
};



const mapStateToProps = store => {
    return {
        admin: store.admin
    };
};


export default connect(mapStateToProps)(CategoriesPage);


