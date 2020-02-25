import React, { Component } from "react";
import QuestionPage from "../../components/admin-category/admin-category.component";
import axios from "axios";
import CircularProgress from '@material-ui/core/CircularProgress';
import './admin-view-categories.style.css'
import { useDispatch, connect } from 'react-redux';
//
//
const VerticalTabs = ({ admin }) => {
    const dispatch = useDispatch();
    const [state, setState] = React.useState({ mydata: (admin.categories)? (admin.categories.array):[] })
    React.useEffect(() => {
        
        getData();
        
    }, []);

    //
    // get data from server
    const getData =  ()=> {

        const headers = {
            "Content-Type": "application/json",
            Vary: "Authorization",
            'Authorization': `Bearer ${JSON.parse(
                localStorage.getItem("myBeLovedToken")
            )}`
        };

        const proxyurl = "https://cors-anywhere.herokuapp.com/";

        const url2 = "http://185.55.226.171/api/categories";

        axios
            .get(
                url2,
                {
                    headers: headers
                },
                null
            )
            .then(response => {
                    let all = {};
                    response.data.data.data.map((value,index)=>{
                        
                        all = {...all, [value.id]:{...value}}
                    })
                dispatch({
                    type: 'ADMIN_SET_CATEGORIES',
                    payload: { categories: {...all,array:response.data.data.data} }
                })

                // alert(response.data.data.data);
                setState({ mydata: response.data.data.data });
                // alert(this.state.mydata);
            })
            .catch(error => {
                 
            });
    }


    if (!admin.categories) {
        return <div style={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress color="secondary" style={{ margin: '24px' }} />
        </div>
    }


    return (
        <div className="root-admin-categories">
            <QuestionPage categories={state.mydata} />
        </div>
    );
}


const mapStateToProps = store => {
    return {
        admin: store.admin
    };
};

export default connect(mapStateToProps)(VerticalTabs);






