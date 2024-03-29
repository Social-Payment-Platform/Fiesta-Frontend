import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './pages/login'
import SignUp from './pages/signUp'
import Home from './pages/home'
import Profile from './pages/profile'
import FindProfessional from './pages/findProfessional'
import PaymentSuccessful from './pages/paymentSuccessful'
import Provider from "./context";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Provider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/user/profile" component={Profile} />
            <Route path="/find-professional" component={FindProfessional} />
            <Route path="/payment-successful" component={PaymentSuccessful} />
          </Switch>
        </Provider>
      </React.StrictMode>
  </BrowserRouter>
  );
}

export default App;
