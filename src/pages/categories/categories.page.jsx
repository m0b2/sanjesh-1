import React, { useEffect } from "react";
import "./categories.style.css";
import Categories from "../../containers/categories/categories.container";
import axios from 'axios';
import { useDispatch, useStore, connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
// const category = [
//   // { name: "کار", icon: "fas fa-running" },
//   { name: "مسکن", icon: "far fa-building" },
//   { name: "پیشینه روابط", icon: "far fa-handshake" },
//   { name: "جنسی", icon: "fas fa-venus-mars" },
//   { name: "سلامت", icon: "fas fa-heartbeat" },
//   { name: "ظاهر", icon: "fas fa-user" },
//   // { name: "پدر و مادر", icon: "fas fa-user" },
//   { name: "خانواده های گسترده", icon: "fas fa-users" },
//   { name: "دوستان", icon: "fas fa-user-friends" },
//   // { name: "حیوانات خانگی", icon: "fas fa-cat" },
//   { name: "سیاست", icon: "fas fa-globe-americas" },
//   // { name: "جامعه", icon: "" },
//   { name: "کارهای خیریه", icon: "far fa-handshake" },
//   { name: "خدمت سربازی", icon: "fas fa-fighter-jet" },
//   { name: "قانون", icon: "fas fa-balance-scale" },
//   { name: "رسانه", icon: "fas fa-tv" },
//   // { name: "دین", icon: "fa fa-pray" },
//   { name: "فرهنگ", icon: "far fa-flag" },
//   { name: "اوقات فراغت", icon: "fas fa-swimmer" },
//   { name: "تعطیلات و جشن ها", icon: "fas fa-birthday-cake" },
//   // { name: "سفر و تفریح", icon: "fas fa-car-side" },
//   { name: "آموزش", icon: "fas fa-user-graduate" },
//   { name: "حمل و نقل", icon: "fas fa-truck" },
//   { name: "ارتباطات", icon: "fas fa-wifi" },
//   { name: "صرف غذا", icon: "fas fa-utensils" },
//   // { name: "نقش پذیری جنسی", icon: "fas fa-person-booth" },
//   // { name: "نژاد، قومیت و تفاوت", icon: "fas fa-flag-usa" },
//   // { name: "زندگی هر روزه", icon: "fas fa-running" }
// ];
// const category2 = [
//   { name: "پرسشنامه اول", icon: "fas fa-check-double" },
//   { name: "پرسشنامه دوم", icon: "fas fa-check-double" },
//   { name: "پرسشنامه سوم", icon: "fas fa-check-double" },
//   { name: "پرسشنامه چهارم", icon: "fas fa-check-double" },
//   { name: "پرسشنامه پنجم", icon: "fas fa-check-double" },
// ];
// const tabs = ['فردی', 'رفتاری'];


const CategoriesPage = ({ loading, categories }) => {

  useEffect(() => {
    let obj = {};
    // dispatch({ type: 'SET_TAB_VALUE', payload: tabs });
    // dispatch({ type: 'ADD_SIDE_LIST' });
    if (!categories) {
      store.dispatch({ type: 'SET_LOADING', payload: { categories: true } });

      
      const
        headers = {
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem('myBeLovedToken'))}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Vary': 'Authorization',


        }
      const url = 'http://185.55.226.171/api/categories';
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      axios.get( url, { headers: headers })
        .then((response) => {
          if (response.data.status === 200) {
             obj = {};
            response.data.data.map(
              (value, index) => {

                obj = {
                  ...obj,
                  [value.id]: { name: value.title, icon: "fas fa-question", id: value.id, description: value.description, index: index }
                }
              }
            )
            

    }
    store.dispatch({ type: 'SET_CATEGORIES', payload: obj });
    store.dispatch({ type: 'SET_LOADING', payload: { categories: false } });
    // console.log(response.data)
  }

        ).catch ((error) => {
  if (error && error.response && error.response.status === 401) {
    // console.log('Singed out!!!')
    store.dispatch({ type: 'NOT_AUTHORISED', payload: '' })
  } else {
    // console.log('there is an problem')
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




if (!categories || loading.categories) {
  return <div style={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <CircularProgress color="secondary" style={{ margin: '24px' }} />
  </div>
}



// const mycategory = JSON.parse(localStorage.getItem('myBelovedCategories'));

// const filtered = mycategory.map(
//   (value, index) => ({ name: value.title, icon: value.icon, id: value.id, description: value.description }))

// dispatch({type:'SET_CATEGORIES', payload:filtered})
// console.log(categories)
return (
  <div className="categories-wrapper" style={{ minHeight: '90vh' }}>


    <Categories data={[categories, []]} />

  </div>
);
};



const mapStateToProps = store => {
  return {
    loading: store.loading,
    categories: store.Categories
  };
};


export default connect(mapStateToProps)(CategoriesPage);


