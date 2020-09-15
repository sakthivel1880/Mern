import React, { Component } from 'react'

export default class Bestseller extends Component {
    render() {
        return (
           <div>
        <div className="f-grid py-2">
            <h3 className="agileits-sear-head mb-3">Best Seller</h3>
            <div className="box-scroll">
            <div className="scroll">
                <div className="row">
                <div className="col-lg-3 col-sm-2 col-3 left-mar">
                    <img src="images/k1.jpg" alt className="img-fluid" />
                </div>
                <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                    <a href="#">Samsung Galaxy On7 Prime (Gold, 4GB RAM + 64GB Memory)</a>
                    <a href="#" className="price-mar mt-2">$12,990.00</a>
                </div>
                </div>
                <div className="row my-4">
                <div className="col-lg-3 col-sm-2 col-3 left-mar">
                    <img src="images/k2.jpg" alt className="img-fluid" />
                </div>
                <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                    <a href="#">Haier 195 L 4 Star Direct-Cool Single Door Refrigerator</a>
                    <a href="#" className="price-mar mt-2">$12,499.00</a>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-3 col-sm-2 col-3 left-mar">
                    <img src="images/k3.jpg" alt className="img-fluid" />
                </div>
                <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                    <a href="#">Ambrane 13000 mAh Power Bank (P-1310 Premium)</a>
                    <a href="#" className="price-mar mt-2">$1,199.00 </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        )
    }
}
