import React from "react";
import "./categories.style.css";
import Category from "../../components/category/category.component";
import Tab from "../../components/tab-header/tab-header.component";
import { connect, useDispatch } from "react-redux";

const Categories = props => {



  const { data, current_tab, sideTab } = props;




  const offset = current_tab === 0 ? 1 : 29;
  const MyCategories = data[sideTab.current].map((value, index) => (
    <Category
      title={value.name}
      icon={value.icon}
      current={Math.floor(Math.random() * 50)}
      total={Math.floor(Math.random() * 50) + 50}
      index={index}
      key={`category${index}`}
      tuchable
    />
  ));

  return (
    <div className="categories">
      {window.screen.width < 421 ? <Tab /> : null}
      {MyCategories}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    current_tab: state.question_type,
    sideTab: state.SideTab
  };
};

export default connect(mapStateToProps)(Categories);
