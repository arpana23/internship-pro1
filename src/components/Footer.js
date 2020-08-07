import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="banner">
                    <div className="footer-main">
                        <div className="footer-container">
                            <div className="footer-item">
                                <div className="text">
                                    <h3>Start a free</h3>
                                    <h3>account today</h3>
                                </div>
                                <div className="email-box">
                                    <input type="text" placeholder="Enter your e-mail" />
                                    <button id="btn">Continue</button>
                                </div>
                                <div className="call-us">
                                    <h4>Question? Call us on 12345678 for help</h4>
                                    <p>Easy setup - no payment fees - up to 100 products for free</p>
                                </div>
                            </div>
                        </div>
                        <div className="footer-link-container">
                            <div className="footer-link-item">
                                <h5 className="common">
                                    <span className="title">sell on chamb</span>
                                </h5>
                                <ul>
                                    <li>
                                        <Link to="/pricing" className="foo">Pricing</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-link-item">
                                <h5 className="common">
                                    <span className="title">buy on chamb</span>
                                </h5>
                                <ul>
                                    <li>
                                        <Link to="/works" className="foo">How it works suppliers</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-link-item">
                                <h5 className="common">
                                    <span className="title">company</span>
                                </h5>
                                <ul>
                                    <li>
                                        <a href="#" className="foo common1">Contact us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-link-item">
                                <h5 className="common">
                                    <span className="title">industries</span>
                                </h5>
                                <ul>
                                    <li>
                                        <a href="#" className="foo common1">Textiles</a>
                                        <a href="#" className="foo common1" id="last-link">Furniture</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;
