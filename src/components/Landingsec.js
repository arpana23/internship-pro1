import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Landingsec.css';

export default class Landingsec extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          products: [{
                "id": "1",
                "name": "Asgard Sofa",
                "preview_image": "https://i.ibb.co/NCKPL5F/preview-product-1-01.png",
                "product_detail": "/product1"
            },
            {
                "id": "2",
                "name": "Globe Swing",
                "preview_image": "https://i.ibb.co/dQd8dNk/preview-product-2-01.png",
                "product_detail": "/product2"
            },  
            {
                "id": "3",
                "name": "2 Seator Sofa",
                "preview_image": "https://i.ibb.co/P9KW7XF/preview-product-3-01.png",
                "product_detail": "/product3"
            },
            {
                "id": "4",
                "name": "Magazine Rack",
                "preview_image": "https://i.ibb.co/5FSBfFf/preview-product-4-01.png",
                "product_detail": "/product4"
            }]
         };
    }
   
    // componentWillMount(){
    //     fetch('https://5ed296ce717d5f0016518314.mockapi.io/api/v1/homepage-data')
    //     .then(response => response.json())
    //     .then(json => this.setState({ products: json }))
    //     .catch(error => alert(error.message));
    //   }

    render() {
        return (
               <div className="landing-sec-container">
                  {
                    this.state.products.map(item => {
                        return(
                            <div key={item.id}>
                            <div className="landing-sec-item">
                                <div className="box1">
                                    <Link to={item.product_detail} id="mylink">
                                        <div className="pro-name">
                                            <h4> { item.name } </h4>
                                        </div>
                                        <div className="pro-image">
                                            <img src={item.preview_image} className="myimage" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                           </div> 
                        );
                    })}                      
                </div> 
        )
    }
}
