import React, { Component } from 'react';
import axios from 'axios';
import './Product.css';


const API_URL = 'https://5ed296ce717d5f0016518314.mockapi.io/api/v1/products/';

export default class Productthird extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productDetails: [],
        };
    }

    componentDidMount() {
        axios
            .get(`${API_URL}/?id=${3}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    productDetails: res.data
                });
            })
            .catch(err => console.log(err));
    }


  
    render() {
        return (
            <div className="pDetails-container">
                <div className="container">
                {
                this.state.productDetails.map(item => {
                return(
                        <li key={item.id}>

                        <div className="Pr-header">
                            <h1 className="prod-name">{ item.product_name }</h1>
                            <p className="usern">By <span className="tcolor">Dex { item.posted_by }</span></p>
                        </div>
                        <div className="pDetails row">
                        <div className="pDetailsc1 col-2">
                            <figure id="userPic">
                                <img src= { item.user_pic } className="myimage" alt="user pic" />
                            </figure>
                            <p className="p_user">  { item.posted_by } <i class="fas fa-check-circle" className="fontch"></i> </p>
                            <div className="vstore"><a href="#" className="vistore">Visit store</a></div>
                        </div>
                        <div className="pDetailsc2 col-7">
                            <div className="prod-col">
                                <figure id="Proimage">
                                    <img src= { item.preview_image } className="preview image" alt="Pro_image" />
                                </figure>
                                <ul className="image-item">
                                    {item.photos.map((sub) => 
                                    <li className="image-list">                                     
                                        <img src= { sub } className="image" alt="Pro_image" />
                                    </li>
                                    )}
                                </ul>
                                <div className="user-likes">
                                    <div className="wlist"><i class="fa fa-star" aria-hidden="true"></i>  Save to wishlist</div>
                                    <div className="lik"><i class="fa fa-thumbs-up" aria-hidden="true"></i>  Like this</div>
                                    <p className="ulike"> { item.likes } likes </p>        
                                </div>
                                <div className="desc">
                                    <h4 className="hdesc co">Description</h4>
                                    <div className="dtext"> { item.description } </div>
                                </div>
                                <div className="stable">
                                    <h4 className="spec co">Specifications</h4>
                                    <table id="s-col" border="2">
                                        <tr className="tr">
                                            <th>Measurements</th>
                                            <td> { item.specifications.measurements } </td>
                                        </tr>
                                        <tr className="tr">
                                            <th>Material</th>
                                            <td> { item.specifications.material } </td>
                                        </tr>
                                        <tr className="tr">
                                            <th>Condition</th>
                                            <td> { item.specifications.condition } </td>
                                        </tr>
                                        <tr className="tr">
                                            <th>SKU number</th>
                                            <td> { item.specifications.sku_number } </td>
                                        </tr>
                                        <tr className="tr">
                                            <th>Warranty</th>
                                            <td> { item.specifications.warranty } </td>
                                        </tr>
                                    </table>                                    
                                </div>
                            </div>
                        </div>
                        <div className="pDetailsc3 col-3">
                            <div className="pcontent">
                                <p className="prD">Price</p>
                                <h6> { item.price } <span className="itext">pr.piece</span> </h6>
                                <p className="otext">Option</p>
                                <input type="text" list="company"/>
                                <datalist id="company" className="newlist">
                                    <option> Flying Carpet Green rug </option>
                                    <option> Alaska </option>
                                    <option> Hawaii </option>
                                    <option> California </option>
                                    <option> Nevada </option>
                                </datalist>
                                 <button id="contact">Contact company</button>   
                                 <h6 className="hour"><i class="far fa-clock"></i>  16 hours <span className="itext">avg.responsive time</span></h6>   
                            </div>     
                            
                        </div>
                 </div>

                        </li> 
                       
                        );
                    })}
                 

                </div>
            </div> 
        )
    }
}
