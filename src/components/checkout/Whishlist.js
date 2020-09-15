import React, { Component } from 'react'
import Otherfilter from '../filter/Otherfilter'
import Special from '../advertisment/Special'

//layouts
import Header from '../../layouts/Header';
import Menu from '../../layouts/Menu';
import Model from '../../layouts/Model';
import Headerbottom from '../../layouts/Headerbottom';
import Mainfooter from '../../layouts/Mainfooter';
import axios from 'axios';
import { ApiUrl } from '../../config/Config';
import * as common from '../../config/Common';


import {toast} from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';

export default class Whishlist extends Component {
    constructor(props){
        super(props);
        this.state={
            products : [],
            mappeddate : '',
        }
    }

    addtocart = (user,product)=>{  
        axios.post(ApiUrl+"/front/api/v1/addtocart/",{user,product}).then((result) =>{
        if(result.data.success == 1)
         toast.success('successful added to cart') 
         else 
         toast.warning('already sdded to cart')
        })
           
    }

    remove = (val) =>{
        axios.post(ApiUrl+"/front/api/v1/removewhishlist/",{val}).then((result) =>{
            if(result.data.success == 1){
            this.product();
            }
        });
    }
    
    
    mappedproduct = (data) =>{
        const newmappeddata = data.map((val, index) => 
        <div className="col-md-3 product-men mt-5">
        <div className="men-pro-item simpleCart_shelfItem">
            <div className="men-thumb-item text-center">
            <img className="imgagestyle" src={ApiUrl+"/productimages/"+val.product_id.mainimage} alt />
            {/* <div className="men-cart-pro">
                <div className="inner-men-cart-pro">
                <a href={"http://localhost:3000/viewproduct/"+val._id+"/"+this.state.subcategory+"/"+this.state.category} className="link-product-add-cart">Quick View</a>
                </div>
            </div> */}
            </div>
            <a href="javascript:void(0)" onClick={e=>{this.remove(val._id)}}><span className="product-new-top">Remove</span></a>
            <div className="item-info-product text-center border-top mt-4">
            <h4 className="pt-1">
    {/* <a href={"http://localhost:3000/viewproduct/"+val.product_id[0]._id+"/"+this.state.subcategory+"/"+this.state.category}>{val.product_id[0].modelname}</a> */}
            </h4>
            <div className="info-product-price my-2">
                <span className="item_price">₹{val.product_id.finalprice}</span>
                <del>₹{val.product_id.finalprice + val.product_id.offeramount}</del>
            </div>
            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
            
                <input type="submit" onClick={e=>{this.addtocart(common.getToken(),val.product_id._id)}}  value="Add to cart" className="button btn" />  
            </div>
            </div>
        </div>
        </div>
        );

        this.setState({
            mappeddate : newmappeddata,
        })
    }

    product = () =>{
        var user = common.getToken();
        axios.post(ApiUrl+"/front/api/v1/whishlist/",{user}).then((result) =>{
            if(result.data.success != 0){
            this.mappedproduct(result.data);
            this.setState({
                products : result.data,
            })
        } else {
            this.setState({
                mappeddate : "There is no whishlist",
            }) 
        }
        })
    }

    componentDidMount(){
        this.product();
    }


    render() {
        return (
            <div>
                <Header />
        <Model />
        <Headerbottom />
        <Menu />
            <div className="page-head_agile_info_w3l">
            </div>
            {/* //banner-2 */}
            {/* page */}
            <div className="services-breadcrumb">
                <div className="agile_inner_breadcrumb">
                <div className="container">
                    <ul className="w3_short">
                    <li>
                        <a href="http://localhost:3000/">Home</a>
                        <i>|</i>
                    </li>
        <li>Whishlist</li>
                    </ul>
                </div>
                </div>
            </div>
            {/* //page */}
            {/*-728x90-*/}
            {/* top Products */}
            <div className="ads-grid py-sm-5 py-4">
                <div className="container py-xl-4 py-lg-2">
                {/* tittle heading */}
                <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                Whishlist</h3>
                {/* //tittle heading */}
                <div className="row">
                    {/* product left */}
                    <div className="agileinfo-ads-display col-lg-12">
                    <div className="wrapper">
                        {/* first section */}
                        <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                        <div className="row">
                            {this.state.mappeddate}
                          
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <Special />
    <Mainfooter />
            </div>
        )
    }
}
