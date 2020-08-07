import React, { Component } from 'react';
import './Home.css';
import Landingsec from './Landingsec';
import Carouselcards from './Carouselcards';

import Homesec from './Homesec';

class Home extends Component {

   
    render() {
        return (
            <div className="home">
                <div id="banner-home">
                    <div className="section1">
                        <div className="static-container">
                            <div className="static-item1">
                                <h1>Find your next product here.</h1>
                                <p>It has never been easier.</p>
                            </div>
                            <div className="static-item2">
                                <div className="search-item" id="mySearch">
                                    <input type="search" placeholder="Search something you want" />
                                </div>
                                <select>
                                    <option id="myOption1">Furniture</option>
                                    <option id="myOption2">Appliances</option>
                                    <option id="myOption3">Stationary</option>
                                </select>
                                <div className="btn1">
                                    <button className="myBtn">
                                        <a href="#">Search</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Landingsec />
                    </div>
                </div>
                <div className="section2">
                    <div className="box2a">
                        <div className="box2" id="content2a">
                            <div className="icon21"></div>
                            <h2>"Chamb" Your Business</h2>
                            <p>Grow easily with chamb.Create free</p>
                            <p>account.We help expanding your buisness</p>
                            <p>easily.</p>
                        </div>
                        <div className="box2" id="content2b">
                            <div className="icon22"></div>
                            <h2>Create and add</h2>
                            <p>Grow easily with chamb.Create free</p>
                            <p>account.We help expanding your buisness</p>
                            <p>easily.</p>
                            </div>
                        <div className="box2" id="content2c">
                            <div className="icon23"></div>
                            <h2>Get inspired</h2>
                            <p>Grow easily with chamb.Create free</p>
                            <p>account.We help expanding your buisness</p>
                            <p>easily.</p>
                        </div>
                    </div>
                    <div className="box2b">
                        <div className="box21b" id="myline">
                            <div className="b-icon1"></div>
                            <h1>Explore <b>exciting</b> and exotic products</h1>
                            <h1>tailored to you.</h1>
                            <p className="space">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                            <p>do eiusmod tempor incididunt ut labore et dolore magna</p>
                            <p>aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                            <p>ullamco laboris..</p>
                        </div>
                        <div className="box21b">
                            <div className="b-icon2"></div>
                            <h1><b>List your products on</b> on chamb and</h1>
                            <h1>grow connections.</h1>
                            <p className="space">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                            <p>do eiusmod tempor incididunt ut labore et dolore magna</p>
                            <p>aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                            <p>ullamco laboris..</p>
                        </div>
                    </div>
                </div>
                <Homesec />
                <Carouselcards />
            </div>
        )
         
    }
}

export default Home;
