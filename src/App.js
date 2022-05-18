import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './pages/login'
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
