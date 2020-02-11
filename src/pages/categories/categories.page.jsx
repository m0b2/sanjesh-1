import React from "react";
import "./categories.style.css";
import Categories from "../../containers/categories/categories.container";
import { Container } from "@material-ui/core";
import { useDispatch } from 'react-redux';
const category = [
  // { name: "کار", icon: "fas fa-running" },
  { name: "مسکن", icon: "far fa-building" },
  { name: "پیشینه روابط", icon: "far fa-handshake" },
  { name: "جنسی", icon: "fas fa-venus-mars" },
  { name: "سلامت", icon: "fas fa-heartbeat" },
  { name: "ظاهر", icon: "fas fa-user" },
  // { name: "پدر و مادر", icon: "fas fa-user" },
  { name: "خانواده های گسترده", icon: "fas fa-users" },
  { name: "دوستان", icon: "fas fa-user-friends" },
  // { name: "حیوانات خانگی", icon: "fas fa-cat" },
  { name: "سیاست", icon: "fas fa-globe-americas" },
  // { name: "جامعه", icon: "" },
  { name: "کارهای خیریه", icon: "far fa-handshake" },
  { name: "خدمت سربازی", icon: "fas fa-fighter-jet" },
  { name: "قانون", icon: "fas fa-balance-scale" },
  { name: "رسانه", icon: "fas fa-tv" },
  // { name: "دین", icon: "fa fa-pray" },
  { name: "فرهنگ", icon: "far fa-flag" },
  { name: "اوقات فراغت", icon: "fas fa-swimmer" },
  { name: "تعطیلات و جشن ها", icon: "fas fa-birthday-cake" },
  // { name: "سفر و تفریح", icon: "fas fa-car-side" },
  { name: "آموزش", icon: "fas fa-user-graduate" },
  { name: "حمل و نقل", icon: "fas fa-truck" },
  { name: "ارتباطات", icon: "fas fa-wifi" },
  { name: "صرف غذا", icon: "fas fa-utensils" },
  // { name: "نقش پذیری جنسی", icon: "fas fa-person-booth" },
  // { name: "نژاد، قومیت و تفاوت", icon: "fas fa-flag-usa" },
  // { name: "زندگی هر روزه", icon: "fas fa-running" }
];
const category2 = [
  { name: "پرسشنامه اول", icon: "fas fa-check-double" },
  { name: "پرسشنامه دوم", icon: "fas fa-check-double" },
  { name: "پرسشنامه سوم", icon: "fas fa-check-double" },
  { name: "پرسشنامه چهارم", icon: "fas fa-check-double" },
  { name: "پرسشنامه پنجم", icon: "fas fa-check-double" },
];
const tabs = ['فردی', 'رفتاری'];
export default () => {


  /**
   * Moshakhas mikone in page be sideList niaz dare ya na!
   */
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({ type: 'SET_TAB_VALUE', payload: tabs });
    dispatch({ type: 'ADD_SIDE_LIST' });


    return () => dispatch({ type: 'REMOVE_SIDE_LIST' });
  }, []);












  return (
    <div className="categories-wrapper">
      <Categories data={[category, category2]} />
    </div>
  );
};
