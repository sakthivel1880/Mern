import React, { Component } from 'react'
import axios from 'axios';
import { ApiUrl } from '../../config/Config';

export default class Banner extends Component {
    constructor(props){
        super(props);
        this.state={
            banner :[{},{},{},{},{}],
        }
    }
    

    componentDidMount(){
            axios.get(ApiUrl+"/front/api/v1/banner/").then((result)=>{
                this.setState({
                    banner : result.data,
                });
            });
        
     }

    render() {
       
        return (
            <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                {/* Indicators*/}
                <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                <li data-target="#carouselExampleIndicators" data-slide-to={3} />
                </ol>
                <div className="carousel-inner">
                <div className="carousel-item item1 active" style={{ background: "url("+ApiUrl+"/advertisment/"+this.state.banner[0].image+") no-repeat center"}}>
                    <div className="container">
                    <div className="w3l-space-banner">
                        <div className="carousel-caption p-lg-5 p-sm-4 p-3">
                        <p>Get flat
                            <span>10%</span> Cashback</p>
                        <h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">The
                            <span>Big</span> Sale
                        </h3>
                        <a className="button2" href="http://localhost:3000/">Shop Now </a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="carousel-item item2" style={{ background: "url("+ApiUrl+"/advertisment/"+this.state.banner[1].image+") no-repeat center"}}>
                    <div className="container">
                    <div className="w3l-space-banner">
                        <div className="carousel-caption p-lg-5 p-sm-4 p-3">
                        <p>advanced
                            <span>Wireless</span> earbuds</p>
                        <h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">Best
                            <span>Headphone</span>
                        </h3>
                        <a className="button2" href="http://localhost:3000/">Shop Now </a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="carousel-item item3" style={{ background: "url("+ApiUrl+"/advertisment/"+this.state.banner[2].image+") no-repeat center"}}>
                    <div className="container">
                    <div className="w3l-space-banner">
                        <div className="carousel-caption p-lg-5 p-sm-4 p-3">
                        <p>Get flat
                            <span>10%</span> Cashback</p>
                        <h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">New
                            <span>Standard</span>
                        </h3>
                        <a className="button2" href="http://localhost:3000/">Shop Now </a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="carousel-item item4" style={{ background: "url("+ApiUrl+"/advertisment/"+this.state.banner[3].image+") no-repeat center"}}>
                    <div className="container">
                    <div className="w3l-space-banner">
                        <div className="carousel-caption p-lg-5 p-sm-4 p-3">
                        <p>Get Now
                            <span>40%</span> Discount</p>
                        <h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">Today
                            <span>Discount</span>
                        </h3>
                        <a className="button2" href="http://localhost:3000/">Shop Now </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
                </a>
            </div>
            </div>

        )
    }
}
