import React from 'react';
import Home from './pages/home/home.page';
import Categories from './pages/categories/categories.page';
import Footer from './components/footer/footer.component';
import './App.css';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/question" component={Categories} />

      </Switch>
      {(window.screen.width < 421) ? <Footer /> : null}
    </>

  );
}

export default App;
