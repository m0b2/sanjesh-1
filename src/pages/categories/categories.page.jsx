import React from "react";
import "./categories.style.css";
import Categories from "../../containers/categories/categories.container";
<<<<<<< HEAD
import { Container } from "@material-ui/core";
=======
import { useDispatch } from 'react-redux';
>>>>>>> d8d31a42c4f7655bebdfe7bfe4ea80d2dec8daaf
const category = [
  "کار",
  "مسکن",
  "پیشینه روابط",
  "جنسی",
  "سلامت",
  "ظاهر",
  "پدر و مادر",
  "خانواده های گسترده",
  "دوستان",
  "حیوانات خانگی",
  "سیاست",
  "جامعه",
  "کارهای خیریه",
  "خدمت سربازی",
  "قانون",
  "رسانه",
  "دین",
  "فرهنگ",
  "اوقات فراغت",
  "تعطیلات و جشن ها",
  "سفر و تفریح",
  "آموزش",
  "حمل و نقل",
  "ارتباطات",
  "صرف غذا",
  "نقش پذیری جنسی",
  "نژاد، قومیت و تفاوت",
  "زندگی هر روزه"
];
const category2 = [
  "پرسشنامه اول",
  "پرسشنامه دوم",
  "پرسشنامه سوم",
  "پرسشنامه چهارم",
  "پرسشنامه پنجم"
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
