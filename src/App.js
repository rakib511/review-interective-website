import "./App.css";
import React from "react";
import Home from "./component/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Banner from "./component/Banner/Banner";
import Footer from "./component/Footer/Footer";
import Services from "./component/Services/Services";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Banner></Banner>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">
            <Services></Services>
          </Route>
          <Route path="/About">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
