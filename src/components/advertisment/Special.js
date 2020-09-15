import React, { Component } from 'react'
import axios from 'axios';
import { ApiUrl } from '../../config/Config';

export default class Special extends Component {
    constructor(props){
        super(props);
        this.state={
            special :[{},{}],
        }
    }
    

    componentDidMount(){
            axios.get(ApiUrl+"/front/api/v1/special/").then((result)=>{
                this.setState({
                    special : result.data,
                });
            });
        
     }
    render() {
        return (
            <div>
            <div className="join-w3l1 py-sm-5 py-4">
                <div className="container py-xl-4 py-lg-2">
                <div className="row">
                    <div className="col-lg-6">
                    <div className="join-agile text-left p-4">
                        <div className="row">
                        <div className="col-sm-7 offer-name">
                            <h6>Smooth, Rich &amp; Loud Audio</h6>
                            <h4 className="mt-2 mb-3">Branded Headphones</h4>
                            <p>Sale up to 25% off all in store</p>
                        </div>
                        <div className="col-sm-5 offerimg-w3l">
                            <img src={ApiUrl+"/advertisment/"+this.state.special[0].image} alt className="img-fluid" />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 mt-lg-0 mt-5">
                    <div className="join-agile text-left p-4">
                        <div className="row ">
                        <div className="col-sm-7 offer-name">
                            <h6>A Bigger Phone</h6>
                            <h4 className="mt-2 mb-3">Smart Phones 5</h4>
                            <p>Free shipping order over $100</p>
                        </div>
                        <div className="col-sm-5 offerimg-w3l">
                            <img src={ApiUrl+"/advertisment/"+this.state.special[1].image} alt className="img-fluid" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

        )
    }
}
