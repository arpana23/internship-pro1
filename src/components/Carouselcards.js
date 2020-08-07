import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Carouselcards.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default class Carouselcards extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          carousel: [{
              "id": "1",
              "name": "Wood Sofaplatform",
              "preview_image": "https://i.ibb.co/FxT2W3B/tr1.png",
              "price": "120",
              "posted_by": "Beko",
              "category": "Lights"
            },
            {
                "id": "2",
                "name": "Treehouse Bed",
                "preview_image": "https://i.ibb.co/Jnhcpf4/tr2.png",
                "price": "540",
                "posted_by": "Beko",
                "category": "Lights"
            },
            {
                "id": "3",
                "name": "Table with Lights",
                "preview_image": "https://i.ibb.co/r35FfR2/tr3.png",
                "price": "1200",
                "posted_by": "Beko",
                "category": "Lights"
            },
            {
                "id": "4",
                "name": "Wall Sticker",
                "preview_image": "https://i.ibb.co/LrMDTMt/tr4.png",
                "price": "780",
                "posted_by": "Beko",
                "category": "Lights"
            },
            {
                "id": "5",
                "name": "Wood SofaPlatform",
                "preview_image": "https://i.ibb.co/FxT2W3B/tr1.png",
                "price": "1500",
                "posted_by": "Beko",
                "category": "Lights"
            }
        ]
         };
    }
    render() {
        var settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
          };
       
        return (
            <div className="post-wrapper">
                <div className="post-slider">
                    <h2 className="carousel-title">TRENDING PRODUCTS ON CHAMB</h2>
                    <div className="post-wrapper">
                    <Slider {...settings}>
                    {

                        this.state.carousel.map(x => {
                            return(
                                <div key={x.id}>
                                <div className="carousel-item">
                                    <div className="box-c">
                                        <img src= {x.preview_image } className="myimage" />
                                            <div className="sub-c">
                                                <div className="name-c">
                                                    <h4> { x.name } </h4>
                                                    <p>By <span className="mycolor">{ x.posted_by }</span> under <span className="mycolor">{ x.category } </span></p>
                                                </div>
                                                <button className="btnc-a">
                                                    <Link to="/home" id="bt-card"><i class="fa fa-usd" aria-hidden="true"></i> { x.price } </Link>
                                                </button>
                                            </div>
                                            <div className="watch-like">
                                                <button className="btnc-b" >
                                                    <Link to="/home" className="common-bt"><i class="fa fa-star" aria-hidden="true"></i> Save to wishlist </Link>
                                                </button>
                                                <button className="btnc-c">
                                                    <Link to="/home" className="common-bt"><i class="fa fa-thumbs-up" aria-hidden="true"></i> Like this </Link>
                                                </button>
                                            </div>
                                    </div>
                                </div>
                            </div> 
                            );
                        })}
                </Slider>

                    </div> 
                </div>
            </div>
        )
    }
}
