import React from 'react';
import Home from './components/navbar';
import Categories from './pages/categories/categories.page';
import './App.css';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/Homepage" component={Home} />
      <Route exact path="/questions" component={Categories} />
    </Switch>

  );
}

export default App;
