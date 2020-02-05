import React from "react";
import Home from "./pages/home/home.page";
import Categories from "./pages/categories/categories.page";
import Footer from "./components/footer/footer.component";
import Question_review from "./pages/question-review/question-review.page";
import Notification from "./pages/notification/notification.page";
import "./App.css";
<<<<<<< HEAD
import Appbar from "./components/appbar/appbar.component";
import { SidebarContext } from "./context/sidebar.context";
import { Route, Switch, Redirect } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar.component";
import Header from "./components/header-navigation/header-navigation.component";
import ComparePage from "./pages/compare/compare.page";
import ProfileView from "./pages/profile-view/profile-view.component";
import SideList from "./containers/side-list/side-list.container";
=======
import Appbar from './components/appbar/appbar.component';
import { SidebarContext } from './context/sidebar.context';
import { Route, Switch } from "react-router-dom";
import Sidebar from './components/sidebar/sidebar.component';
import Header from './components/header-navigation/header-navigation.component';
import ComparePage from './pages/compare/compare.page'
import ProfileView from './pages/profile-view/profile-view.component';
import SideList from './containers/side-list/side-list.container';
import { connect } from 'react-redux';
import AnswerPage from './pages/answer/answer.page'
>>>>>>> d8d31a42c4f7655bebdfe7bfe4ea80d2dec8daaf
// man amade am vay vay
// rnpm baraye fron
// add address font

<<<<<<< HEAD
function App() {
  const [isOpen, setOpen] = React.useState({ right: false });
  const SidebarOpen = React.useMemo(() => ({ isOpen, setOpen }), [isOpen]);

  return (
    <div className="app">
      {window.screen.width < 421 ? <Footer /> : <Header />}
      <div className="main-app-and-list-wrapper">
        <SideList />
        <div className="main-app">
          <SidebarContext.Provider value={SidebarOpen}>
            {window.screen.width < 421 ? <Appbar /> : null}
            {window.screen.width < 421 ? <Sidebar /> : null}
          </SidebarContext.Provider>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/question" component={Categories} />
            <Route exact path="/question/:index" component={Question_review} />
            <Route exact path="/compare" component={ComparePage} />
            <Route exact path="/notification" component={Notification} />
            <Route exact path="/profile" component={ProfileView} />
            <Route exact path="/sign_in" component={sign_in} />
            {/* <Redirect to="/home" /> */}
          </Switch>
        </div>
      </div>
=======
function App({ sideTab }) {


  const [isOpen, setOpen] = React.useState({ right: false });
  const SidebarOpen = React.useMemo(() => ({ isOpen, setOpen }), [isOpen]);



  return (
    <div className="app">
      <SidebarContext.Provider value={SidebarOpen}>
        {window.screen.width < 421 ? <Footer /> : <Header />}
        <div className='main-app-and-list-wrapper'>
          {(sideTab.isVisible && window.screen.width > 421) ? < SideList /> : null}
          <div className='main-app'>
          <Sidebar />
          
            {window.screen.width < 421 ? <Appbar /> : null}
            {/* {window.screen.width < 421 ? <Sidebar /> : null} */}
            
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/question" component={Categories} />
              <Route exact path="/question/:index" component={Question_review} />
              <Route exact path="/compare" component={ComparePage} />
              <Route exact path="/notification" component={Notification} />
              <Route exact path="/profile" component={ProfileView} />
              <Route exact path="/answer" component={AnswerPage} />
              {/* <Redirect to="/home" /> */}
            </Switch>
          </div>
          
        </div>
      </SidebarContext.Provider>
>>>>>>> d8d31a42c4f7655bebdfe7bfe4ea80d2dec8daaf
      {window.screen.width < 421 ? <Footer /> : null}
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======




const mapStateToProps = (store) => {
  return {
    sideTab: store.SideTab
  };
};



export default connect(mapStateToProps)(App);


>>>>>>> d8d31a42c4f7655bebdfe7bfe4ea80d2dec8daaf
