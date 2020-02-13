import React from "react";
import Home from "./pages/home/home.page";
import Categories from "./pages/categories/categories.page";
import Footer from "./components/footer/footer.component";
import Question_review from "./pages/question-review/question-review.page";
import Notification from "./pages/notification/notification.page";
import "./App.css";
import Appbar from "./components/appbar/appbar.component";
import { SidebarContext } from "./context/sidebar.context";
import { Route, Switch } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar.component";
import Header from "./components/header-navigation/header-navigation.component";
import ComparePage from "./pages/compare/compare.page";
import ProfileView from "./pages/profile-view/profile-view.component";
import SideList from "./containers/side-list/side-list.container";
import { connect } from "react-redux";
import AnswerPage from "./pages/answer/answer.page";
import Edit_Profile_Page from "./pages/profile-edit/profile-edit.component";
import Sign_Up_Page from "./pages/signUp/sign_up.page";
import Question_Analyze from './pages/question-analyze/question-analyze.page';
import User_Info_Page from "./pages/user-info/user_info.page";
import About_Us_Page from './pages/about-us/about-us.page';
import { loadCSS } from "fg-loadcss";
import SinginPage from './pages/sign_in/sign_in.page';

// man amade am vay vay
// rnpm baraye fron
// add address font

function App({ sideTab, isFooterNeeded }) {
  // return(<SinginPage/>)
  React.useEffect(() => {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
  }, []);
  const [isOpen, setOpen] = React.useState({ right: false });
  const SidebarOpen = React.useMemo(() => ({ isOpen, setOpen }), [isOpen]);

  return (
    <div className="app">
      <SidebarContext.Provider value={SidebarOpen}>
        
        <div className="main-app-and-list-wrapper">
        {window.screen.width < 800 ? null : <Header />}
          {sideTab.isVisible && window.screen.width > 800 ? <SideList /> : null}
          <div className="main-app">
            <Sidebar />

            {window.screen.width < 800 ? <Appbar /> : null}
            {/* {window.screen.width < 421 ? <Sidebar /> : null} */}

            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/question" component={Categories} />
              <Route
                exact
                path="/question/:index"
                component={Question_review}
              />
              <Route exact path="/compare" component={ComparePage} />
              <Route exact path="/notification" component={Notification} />
              <Route exact path="/profile" component={ProfileView} />
              <Route
                exact
                path="/question/:index/answer"
                component={AnswerPage}
              />
              
              <Route exact path="/edit" component={Edit_Profile_Page} />
              <Route exact path="/question/:index/analyze" component={Question_Analyze} />
              <Route exact path="/aboutus" component={About_Us_Page} />
              {/* <Route exact path="/signin" component={Sign_In_Page} /> */}
              <Route exact path="/signup" component={Sign_Up_Page} />
              <Route exact path="/userInfo" component={User_Info_Page} />

              {/* <Redirect to="/home" /> */}
            </Switch>
          </div>
        </div>
      </SidebarContext.Provider>
      
      {isFooterNeeded && window.screen.width < 800 ? <Footer /> : null}
    </div>
  );
}

const mapStateToProps = store => {
  return {
    sideTab: store.SideTab,
    isFooterNeeded: store.FooterReducer
  };
};

export default connect(mapStateToProps)(App);
