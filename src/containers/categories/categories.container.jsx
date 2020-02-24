import React from "react";
import "./categories.style.css";
import Category from "../../components/category/category.component";
import Tab from "../../components/tab-header/tab-header.component";
import { connect, useDispatch } from "react-redux";

const Categories = props => {



  const { data, current_tab, sideTab } = props;


  
  const subject = data[sideTab.current];
  // console.log(subject)
  const MyCategories = Object.keys(subject).map((keyName, index) => (
    <Category
      title={subject[keyName].name}
      icon={subject[keyName].icon}
      description={subject[keyName].description}
      index={subject[keyName].id}
      key={`category${index}`}
      answeredCount={subject[keyName].answeredCount}
      questionCount={subject[keyName].questionCount}

      tuchable
    />
  ));

  return (
    <div className="categories">
      {/* {window.screen.width < 800 ? <Tab /> : null} */}
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
