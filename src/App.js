import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './pages/login'
import SignUp from './pages/signUp'
import Home from './pages/home'
import FindProfessional from './pages/findProfessional'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/find-professional" component={FindProfessional} />
        </Switch>
      </React.StrictMode>
  </BrowserRouter>
  );
}

export default App;
