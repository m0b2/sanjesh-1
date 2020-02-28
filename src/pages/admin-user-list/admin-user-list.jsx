import React, { useEffect } from "react";
import Categories from "../../containers/categories/categories.container";
import axios from 'axios';
import { useDispatch, useStore, connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Category from '../../components/category/category.component'
import QuestionsTable from '../admin-questions-table/admin-questions-table';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import './admin-user-list.style.css'
const CategoriesPage = ({ admin }) => {


    const [search, setSearch] = React.useState('')


    
const searchHandleChange = (e)=>setSearch(e.target.value)






    useEffect(() => {
        let obj = {};
        // dispatch({ type: 'SET_TAB_VALUE', payload: tabs });
        // dispatch({ type: 'ADD_SIDE_LIST' });
        if (!admin.users) {



            const
                headers = {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('myBeLovedToken'))}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Vary': 'Authorization',


                }
            const url = 'http://185.55.226.171/api/client_users';
            // const proxyurl = "https://cors-anywhere.herokuapp.com/";
            axios.get( url, { headers: headers })
                .then((response) => {
                     //console.log(response.data.data)
                    if (response.data.status === 200) {
                        obj = {};
                        response.data.data.data.map(
                            (value, index) => {

                                obj = {
                                    ...obj,
                                    [value.id]: {
                                        ...value,
                                        index:index,
                                        icon:'fas fa-user'
                                    }
                                }
                            }
                        )


                    }
                    store.dispatch({ type: 'ADMIN_SET_USERS', payload: obj });

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




    if (!admin.users) {
        return <div style={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress color="secondary" style={{ margin: '24px' }} />
        </div>
    }

    

    const MyCategories = Object.keys(admin.users).filter((keyName,index)=>admin.users[keyName].username.includes(search)).map((keyName, index) => (
        <Category
            title={(admin.users[keyName].username.length > 24 ? admin.users[keyName].username.substring(0, 24) + '...' : admin.users[keyName].username)}
            icon={admin.users[keyName].icon}
            description={admin.users[keyName].full_name}
            index={admin.users[keyName].id}
            key={`usersAdmin${index}`}
            category_id={`${admin.users[keyName].index+1}`}
            push_value={``}
            adminUserMode
            tuchable
        />
    ));
    return (<>

        <div className="categories" style={{ width: '100%' }}>
        <TextField
        value={search}
          id="standard-multiline-static"
          color="secondary"
          placeholder="جستجو..."
          style={{paddingBottom:'16px',fontFamily:'VazirFD'}}
          rows="4"
          fullWidth
          variant={"standard"}
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          
        }}
        onChange={searchHandleChange}
        />
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


