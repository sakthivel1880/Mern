import React, { Component } from 'react'
import axios from 'axios';
import { ApiUrl } from '../../config/Config';

export default class Common extends Component {
    constructor(props){
        super(props);
        this.state={
            common :[{}],
        }
    }
    

    componentDidMount(){
            axios.get(ApiUrl+"/front/api/v1/common/").then((result)=>{
                this.setState({
                    common : result.data,
                });
            });
        
     }
    render() {
        return (
            <div>
            <div className="product-sec1 product-sec2 px-sm-5 px-3">
                <div className="row">
                <h3 className="col-md-4 effect-bg">Summer Carnival</h3>
                <p className="w3l-nut-middle">Get Extra 10% Off</p>
                <div className="col-md-8 bg-right-nut">
                    <img src={ApiUrl+"/advertisment/"+this.state.common[0].image} alt />
                </div>
                </div>
            </div>
            </div>

        )
    }
}
