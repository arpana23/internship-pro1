import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Works from './components/Works';
import Pricing from './components/Pricing';

import Productfirst from './components/Productfirst';
import Productsecond from './components/Productsecond';
import Productthird from './components/Productthird';
import Productfourth from './components/Productfourth';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
    <div className="overlay">
      <div className="main-container">
            <div className="first-container">
                <div id="mylogo">
                    <Link to="/home" className="logo">logo</Link>
                </div>
            </div>
            <div className="second-container">
              <div className="search-box">
                  <div id="search-icon"></div>
                  <input type="search" placeholder="Search for products" />
              </div>
              <input type="checkbox" id="check" />
              <label for="check" id="checkbtn">
                <i class="fas fa-bars"></i>
              </label>
              <div className="cover" id="myNav">
                <ul className="sub-container" id="myNav">
                    <li className="hiworks">
                        <Link to="/works" className="common">How it works</Link>
                    </li>
                    <li className="pricing">
                        <Link to="/pricing" className="common">Pricing</Link>
                    </li>
                </ul>
              </div>
              <ul className="sign-log">
                  <li className="login">
                      <a href="#">Login</a>
                  </li>
                  <li className="signup">
                      <a href="#">Sign up</a>
                  </li>
              </ul>
            </div>
        </div>
    </div>

    <div>
        <Switch>
          <Route  exact path="/home" component={Home}/>
          <Route  exact path="/works" component={Works}/>
          <Route  exact path="/pricing" component={Pricing}/>
          <Route  exact path="/product1" component={Productfirst}/>
          <Route  exact path="/product2" component={Productsecond}/>
          <Route  exact path="/product3" component={Productthird}/>
          <Route  exact path="/product4" component={Productfourth}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );


}

export default App;
