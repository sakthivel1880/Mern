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

export default class Newarrival extends Component {
    constructor(props){
        super(props);
        this.state={
            products : [],
            mappeddate : '',
        }
        this.filter = this.filter.bind(this);
    }
    
    addtocart = (user,product)=>{  
        axios.post(ApiUrl+"/front/api/v1/addtocart/",{user,product}).then((result) =>{
        if(result.data.success == 1)
         toast.success('successful added to cart') 
         else 
         toast.warning('already sdded to cart')
        })
           
    } 

    mappedproduct = (data) =>{
        const newmappeddata = data.map((val, index) =><div className="col-md-4 product-men mt-5">
        <div className="men-pro-item simpleCart_shelfItem">
            <div className="men-thumb-item text-center">
            <img className="imgagestyle" src={ApiUrl+"/productimages/"+val.mainimage} alt />
            <div className="men-cart-pro">
                <div className="inner-men-cart-pro">
                <a href={"http://localhost:3000/viewproduct/"+val._id+"/"+this.state.subcategory+"/"+this.state.category} className="link-product-add-cart">Quick View</a>
                </div>
            </div>
            </div>
            <span className="product-new-top">New</span>
            <div className="item-info-product text-center border-top mt-4">
            <h4 className="pt-1">
    <a href={"http://localhost:3000/viewproduct/"+val._id+"/"+this.state.subcategory+"/"+this.state.category}>{val.modelname}</a>
            </h4>
            <div className="info-product-price my-2">
                <span className="item_price">₹{val.finalprice}</span>
                <del>₹{val.finalprice + val.offeramount}</del>
            </div>
            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
            {common.Userlogin() ? <input type="submit" onClick={e=>{this.addtocart(common.getToken(),val._id)}}  value="Add to cart" className="button btn" /> : <input type="submit"  data-toggle="modal" data-target="#exampleModal" value="Add to cart" className="button btn" /> }

              
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

        axios.get(ApiUrl+"/front/api/v1/newarrivals/").then((result) =>{
            this.mappedproduct(result.data);
            this.setState({
                products : result.data,
            })
        })
    }

    filter(data){
        const price={price1:0,price2:100000};
        if(data.price != ""){
            const splitedata=data.price.split('-');
            price.price1=splitedata[0];
            price.price2=splitedata[1];
        }
        const offer={offer1:0,offer2:100};
        if(data.offer != ""){
            const spliteoffer=data.offer.split('-');
            offer.offer1=spliteoffer[0];
            offer.offer2=spliteoffer[1];
    } 
        if(offer.offer1 != "" || offer.offer2 != "" || price.price1 !="" ||  price.price2 !=""){

            const newmappeddata = this.state.products.map((val, index) =>
            (val.finalprice <  price.price2 && val.finalprice > price.price1 && val.offer <  offer.offer2 && val.offer > offer.offer1  ?<div className="col-md-4 product-men mt-5">
            <div className="men-pro-item simpleCart_shelfItem">
                <div className="men-thumb-item text-center">
                <img className="imgagestyle" src={ApiUrl+"/productimages/"+val.mainimage} alt />
                <div className="men-cart-pro">
                    <div className="inner-men-cart-pro">
                    <a href="viewproduct/" className="link-product-add-cart">Quick View</a>
                    </div>
                </div>
                </div>
                <span className="product-new-top">New</span>
                <div className="item-info-product text-center border-top mt-4">
                <h4 className="pt-1">
        <a href="viewproduct">{val.modelname}</a>
                </h4>
                <div className="info-product-price my-2">
                    <span className="item_price">₹{val.finalprice}</span>
                    <del>₹{val.finalprice + val.offeramount}</del>
                </div>
                <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                {common.Userlogin() ? <input type="submit" onClick={e=>{this.addtocart(common.getToken(),val._id)}}  value="Add to cart" className="button btn" /> : <input type="submit"  data-toggle="modal" data-target="#exampleModal" value="Add to cart" className="button btn" /> }

                </div>
                </div>
            </div>
            </div> : "")
            );

            this.setState({
                mappeddate : newmappeddata,
            })
        }
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
        <li>New Arrival</li>
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
                New Arrival</h3>
                {/* //tittle heading */}
                <div className="row">
                    {/* product left */}
                    <div className="agileinfo-ads-display col-lg-9">
                    <div className="wrapper">
                        {/* first section */}
                        <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                        <div className="row">
                            {this.state.mappeddate}
                          
                        </div>
                        </div>
                        </div>
                    </div>
                    {/* //product left */}
                    <Otherfilter ref="child" filter={this.filter} />
                </div>
                </div>
            </div>
            <Special />
    <Mainfooter />
            </div>


        )
    }
}
