import "./App.css";
import React from "react";
import Home from "./component/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Banner from "./component/Banner/Banner";
import Footer from "./component/Footer/Footer";
import Services from "./component/Services/Services";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Menubar from "./component/Menubar/Menubar";
import Eror from "./component/Error/Eror";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Banner></Banner> */}
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">
             <Menubar></Menubar>
            <Services></Services>
          </Route>
          <Route path="/About">
            <Menubar></Menubar>
            <About></About>
          </Route>
          <Route path="/contact">
            <Menubar></Menubar>
            <Contact></Contact>
          </Route>
          <Route path="*">
            <Menubar></Menubar>
            <Eror></Eror>
          </Route>
        </Switch>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
