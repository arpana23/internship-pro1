import React, { Component } from 'react';
import './Homesec.css';

export default class Homesec extends Component {
    render() {
        return (
            <div>
                <div className="section3">
                    <div className="banner2"></div>
                    <div className="box3">
                        <div className="box4">
                            <h4 className="title">SUPPLIER</h4>
                            <div className="heading3">
                                <h1 className="head1">Grow your store</h1>
                                <h1 className="head2">With a new sales</h1>
                                <h1 className="head3">channel</h1>
                            </div>
                            <div className="text3">
                                <p>Never worry about sales or income from outbound</p>
                                <p>channels. With chamb your store is directly</p>
                                <p>connected to thousands of interested in your</p>
                                <p>products.</p>
                            </div>
                            <div className="button3">
                                <button className="btn3">
                                    <a href="/home">Create a supplier account</a>
                                </button>
                            </div>
                        </div>
                        <div className="banner3"></div>
                    </div>
                </div>
            </div>
        )
    }
}
