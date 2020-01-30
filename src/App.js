import React from "react";
import Home from "./pages/home/home.page";
import Categories from "./pages/categories/categories.page";
import Footer from "./components/footer/footer.component";
import Question_review from "./pages/question-review/question-review.page";
import Notification from "./pages/notification/notification.page";
import "./App.css";
import Appbar from './components/appbar/appbar.component';
import ListMenu from './components/header-navigation/header-navigation.component';
import { Route, Switch, Redirect } from "react-router-dom";

// man amade am vay vay

function App() {
  return (
    <div className="app">
          {window.screen.width > 421 ? <Footer /> : null}

      <div className='main-app'>
        <Appbar />
        {/* <Sidebar/> */}
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/question" component={Categories} />
          <Route exact path="/question/:index" component={Question_review} />
          <Route exact path="/compare" component={Notification} />
          <Route exact path="/notification" component={Notification} />
          {/* <Redirect to="/home" /> */}
        </Switch>
      </div>
      {window.screen.width < 421 ? <Footer /> : null}
    </div>
  );
}

export default App;
