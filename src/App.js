import React from "react";
import Home from "./pages/home/home.page";
import Categories from "./pages/categories/categories.page";
import Footer from "./components/footer/footer.component";
import Question_review from "./pages/question-review/question-review.page";
import Notification from "./pages/notification/notification.page";
import "./App.css";
import Appbar from './components/appbar/appbar.component';
import { SidebarContext } from './context/sidebar.context';
import { Route, Switch, Redirect } from "react-router-dom";
import Sidebar from './components/sidebar/sidebar.component';
import Header from './components/header-navigation/header-navigation.component';
import ComparePage from './pages/compare/compare.page'
import ProfileView from './pages/profile-view/profile-view.component';
// man amade am vay vay

function App() {


  const [isOpen, setOpen] = React.useState({ right: false });
  const SidebarOpen = React.useMemo(() => ({ isOpen, setOpen }), [isOpen]);


  return (
    <div className="app">
      {window.screen.width < 421 ? <Footer /> : <Header/>}
      
      <div className='main-app'>
      
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
          {/* <Redirect to="/home" /> */}
        </Switch>
      </div>
      {window.screen.width < 421 ? <Footer /> : null}
    </div>
  );
}

export default App;
