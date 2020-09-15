import React, { Component } from 'react';
import Footerfirst from './Footerfirst';
import Footersecond from './Footersecond';
import Footerthird from './Footerthird';

export default class Mainfooter extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }

    render() {
        return (
          <div>
            <footer>
                <div className="footer-top-first">
                <div className="container py-md-5 py-sm-4 py-3">
                    {/* footer first section */}
                    <h2 className="footer-top-head-w3l font-weight-bold mb-2">Electronics :</h2>
                    <p className="footer-main mb-4">
                    If you're considering a new laptop, looking for a powerful new car stereo or shopping for a new HDTV, we make it easy to find exactly what you need at a price you can afford. We offer Every Day Low Prices on TVs, laptops, cell phones, tablets and iPads,
                    video games, desktop computers, cameras and camcorders, audio, video and more.</p>
                    {/* //footer first section */}
                    {/* footer second section */}
                    <div className="row w3l-grids-footer border-top border-bottom py-sm-4 py-3">
                    <div className="col-md-4 offer-footer">
                        <div className="row">
                        <div className="col-4 icon-fot">
                            <i className="fas fa-dolly" />
                        </div>
                        <div className="col-8 text-form-footer">
                            <h3>Free Shipping</h3>
                            <p>on orders over $100</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 offer-footer my-md-0 my-4">
                        <div className="row">
                        <div className="col-4 icon-fot">
                            <i className="fas fa-shipping-fast" />
                        </div>
                        <div className="col-8 text-form-footer">
                            <h3>Fast Delivery</h3>
                            <p>World Wide</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 offer-footer">
                        <div className="row">
                        <div className="col-4 icon-fot">
                            <i className="far fa-thumbs-up" />
                        </div>
                        <div className="col-8 text-form-footer">
                            <h3>Big Choice</h3>
                            <p>of Products</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* //footer second section */}
                </div>
                </div>
                <Footerfirst  />
                <Footersecond />
                <Footerthird />
            </footer>
            <a href="https://api.whatsapp.com/send?phone=+919843884697" class="whats-app" target="_blank">
            <i className="fab fa-whatsapp my-float fa-2x" />
            </a>
            </div>

        )
    }
}
