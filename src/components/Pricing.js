import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

import './Pricing.css';

const API_URL = 'https://5ed296ce717d5f0016518314.mockapi.io/api/v1/pricing-details';




export default class Pricing extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          priceDetails: [],
        //   checked: false
        };  
        // this.handleChange = this.handleChange.bind(this)  
    }

    // handleChange(checked) {
    //     this.setState({checked})
    // }
    onCheck = () => {
        var x = document.getElementsByClassName("flip-card");
        if (x.style.transform === "rotateY(180deg)") {
          x.style.transform = "0deg";
        } else {
          x.style.transform = "rotateY(180deg)";
        }
      }

    componentDidMount() {
        axios
            .get(`${API_URL}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                  priceDetails: res.data,
                });
            })
            .catch(err => console.log(err));

            // this.onCheck();
    }
   
    // checked={this.state.checked} onChange={this.handleChange}

    render() {
        return (
            <div className="pri-container">
                <div className="pri-static-container">
                    <h1 className="fstitle">Pricing on Chamb</h1>
                    <p className="fspara">Get targeted distribution to Chamb's built-in network of global companies.</p>
                    <p className="fspara">Choose the right one for you.</p>
                </div>
                <div className="pri-flip-flop-container">
                    <label className="switch">
                        <span className="stext1">Monthly</span>
                        <span className="stext2">Yearly</span>
                        <input type="checkbox" className="check" onCheck={ this.onCheck } />
                        <span className="slider round"></span>
                    </label>
                    <div className="container">
                        {
                            this.state.priceDetails.map((item, i) => {
                                return(<li key={i}>
                               <div className="row">
                               <div className="col-3">
                               <div className="flip-card-container">
                                    <div className="flip-card">
                                    <div className="flip-card-front common-flip">
                                        <div className="boxf-1 common-f-box">
                                            <div className="header">
                                                <h2>Chamb Free</h2>
                                                <p className="p">No binding</p>     
                                            </div>
                                            <div className="divbox"> { item.monthly.map((sub) => 
                                                <ul className="list-front">

                                                    {/* {sub.free.map((sub1) => {})} */}
                                                    <li className="plist">{ sub.free.features }</li>
                                                    <h2 className="price"> { sub.free.price } </h2>
                                                    </ul> 
                                                )} 
                                            </div>

                                            <button id="btn-f">
                                                <Link to="#" className="Sign">Sign Up</Link>
                                            </button>   
                                        </div>
                                    </div>
                                    <div className="flip-card-back  common-flip">
                                        <div className="boxb-1 common-f-box">
                                                <div className="header">
                                                    <h2>Chamb Free</h2>
                                                    <p className="p">No binding</p>     
                                                </div>
                                                <div className="divbox"> { item.yearly.map((sub) => 
                                                    <ul className="list-front">
                                                        {/* {sub.free.map((sub1) => {})} */}
                                                        <li className="plist">{ sub.free.features }</li>
                                                        <h2 className="price"> { sub.free.price } </h2>
                                                        </ul> 
                                                    )} 
                                                </div> 
                                                <button id="btn-f">
                                                    <Link to="#" className="Sign">Sign Up</Link>
                                                </button>   
                                            </div>
                                    </div>
                                </div>
                                </div>
                               </div>

                                <div className="col-3">
                                <div className="flip-card-container">
                                    <div className="flip-card">
                                    <div className="flip-card-front common-flip">
                                    <div className="boxf-1 common-f-box">
                                            <div className="header">
                                                <h2>Chamb Pro</h2>
                                                <p className="p">No binding</p>     
                                            </div>
                                            <div className="divbox"> { item.monthly.map((sub) => 
                                                <ul className="list-front">
                                                    {/* {sub.free.map((sub1) => {})} */}
                                                    <li className="plist">{ sub.pro.features }</li>
                                                    <h2 className="price"> { sub.pro.price } <span className="p">trl per .mth.</span> </h2>
                                                </ul> 
                                            )} 
                                            </div> 
                                            <button id="btn-f">
                                                <Link to="#" className="Sign">Sign Up</Link>
                                            </button>   
                                        </div>
                                    </div>
                                    <div className="flip-card-back  common-flip">
                                        <div className="boxb-1 common-f-box">
                                            <div className="header">
                                                <h2>Chamb Pro</h2>
                                                <p className="p">No binding</p>     
                                            </div>
                                            <div className="divbox"> { item.yearly.map((sub) => 
                                                <ul className="list-front">
                                                    {/* {sub.free.map((sub1) => {})} */}
                                                    <li className="plist">{ sub.pro.features }</li>
                                                    <h2 className="price"> { sub.pro.price }  <span className="p">trl per .year.</span> </h2>
                                                    </ul> 
                                                )} 
                                            </div> 
                                            <button id="btn-f">
                                                <Link to="#" className="Sign">Sign Up</Link>
                                            </button>   
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </div>

                                <div className="col-3">
                               <div className="flip-card-container">
                                    <div className="flip-card">
                                    <div className="flip-card-front common-flip">
                                        <div className="boxf-1 common-f-box">
                                            <div className="header">
                                                <h2>Chamb Growth</h2>
                                                <p className="p">No binding</p>     
                                            </div>
                                            <div className="divbox"> { item.monthly.map((sub) => 
                                                <ul className="list-front">
                                                    <li className="plist">{ sub.growth.features }</li>
                                                    <h2 className="price"> { sub.growth.price }  <span className="p">trl per .mth.</span> </h2>
                                                </ul> 
                                            )} 
                                            </div> 
                                            <button id="btn-f">
                                                <Link to="#" className="Sign">Sign Up</Link>
                                            </button>   
                                        </div>
                                    </div>
                                    <div className="flip-card-back  common-flip">
                                        <div className="boxb-1 common-f-box">
                                            <div className="header">
                                                <h2>Chamb Growth</h2>
                                                <p className="p">No binding</p>     
                                            </div>
                                            <div className="divbox"> { item.yearly.map((sub) => 
                                                <ul className="list-front">
                                                    {/* {sub.free.map((sub1) => {})} */}
                                                    <li className="plist">{ sub.growth.features }</li>
                                                    <h2 className="price"> { sub.growth.price }  <span className="p">trl per .year.</span>  </h2>
                                                    </ul> 
                                                )} 
                                            </div> 
                                            <button id="btn-f">
                                                <Link to="#" className="Sign">Sign Up</Link>
                                            </button>   
                                        </div>
                                    </div>
                                </div>
                                </div>
                               </div>

                                <div className="col-3">
                                <div className="flip-card-container">
                                    <div className="flip-card">
                                    <div className="flip-card-front common-flip">
                                        <div className="boxf-1 common-f-box">
                                            <div className="header">
                                                <h2>Custom Solution</h2>
                                                <p className="p">No binding</p>     
                                            </div>
                                            <div className="divbox"> { item.monthly.map((sub) => 
                                                <ul className="list-front">
                                                    {/* {sub.free.map((sub1) => {})} */}
                                                    <li className="plist">{ sub.custom.features }</li>
                                                    <h2 className="price"> { sub.custom.price }  <span className="p">per .mth.</span>  </h2>
                                                </ul> 
                                            )} 
                                            </div> 
                                            <button id="btn-f">
                                                <Link to="#" className="Sign">Sign Up</Link>
                                            </button>   
                                        </div>
                                    </div>
                                    <div className="flip-card-back  common-flip">
                                        <div className="boxb-1 common-f-box">
                                            <div className="header">
                                                <h2>Custom Solution</h2>
                                                <p className="p">No binding</p>     
                                            </div>
                                            <div className="divbox"> { item.yearly.map((sub) => 
                                                <ul className="list-front">
                                                    {/* {sub.free.map((sub1) => {})} */}
                                                    <li className="plist">{ sub.custom.features }</li>
                                                    <h2 className="price"> { sub.custom.price } <span className="p">per .year.</span> </h2>
                                                </ul> 
                                                )} 
                                            </div> 
                                            <button id="btn-f">
                                                <Link to="/pricing" className="Sign">Sign Up</Link>
                                            </button>   
                                        </div>
                                    </div>
                                </div>
                               </div>
                                </div>
                                   
                               </div>
                            </li>)
                            })}       
                    </div>   
                </div>
            </div>
        )
    }
}

