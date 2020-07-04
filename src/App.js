import React from 'react';
import $ from "jquery";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Landing from "./components/landing-page/landing-page";
import Home from "./components/home-page/home";
import Nav from "./components/navbar";
import Footer from "./components/footer";
import Register from "./components/landing-page/register";
import Login from "./components/landing-page/login";


function App() {

  return (
    <div className="App">
      <Router>

      <Switch>

        <Route path="/" exact component={Landing} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />

        <div>
        <Nav />
          <Route path="/home" exact component={Home} />
        <Footer />
        </div>

      </Switch>

      </Router>

    </div>
  );
}



export default App;
