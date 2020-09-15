import React, { Component } from 'react';
import Bestseller from './filter/Bestseller';
import Common from './advertisment/Common';
import Special from './advertisment/Special';
import Banner from './advertisment/Banner';
import Cart from './Cart'
import Otherfilter from './filter/Otherfilter';

//layouts
import Header from '../layouts/Header';
import Menu from '../layouts/Menu';
import Model from '../layouts/Model';
import Headerbottom from '../layouts/Headerbottom';
import Mainfooter from '../layouts/Mainfooter';
import axios from 'axios';
import { ApiUrl } from '../config/Config';
import * as common from '../config/Common';


import {toast} from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  

export default class Index extends Component {
    constructor(props){
        super(props);
        this.state={
            products : [],
            staticarray : [],
            electronics : '',
            homeappliances : '',
            menswear : '',
            category : [],
        };

        this.filter = this.filter.bind(this)
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
        const newbrandmoiles = data.map((val, index) =>
        (val.category_id == "5ebf85fd5329d328ac47af21" ?<div className="col-md-4 product-men mt-5">
        <div className="men-pro-item simpleCart_shelfItem">
            <div className="men-thumb-item text-center">
            <img className="imgagestyle" src={ApiUrl+"/productimages/"+val.mainimage} alt />
            <div className="men-cart-pro">
                <div className="inner-men-cart-pro">
                <a href={"http://localhost:3000/viewproduct/"+val._id+"/"+val.subcategory[0].subcategory+"/"+val.category[0].category} className="link-product-add-cart">Quick View</a>
                </div>
            </div>
            </div>
            <span className="product-new-top">New</span>
            <div className="item-info-product text-center border-top mt-4">
            <h4 className="pt-1">
    <a href={"http://localhost:3000/viewproduct/"+val._id+"/"+val.subcategory[0].subcategory+"/"+val.category[0].category}>{val.modelname}</a>
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

        const homeaplliances = data.map((val, index) =>
        (val.category_id == "5f3bf35517bba5eeca778a95" ? <div className="col-md-4 product-men mt-5">
        <div className="men-pro-item simpleCart_shelfItem">
            <div className="men-thumb-item text-center">
            <img className="imgagestyle" src={ApiUrl+"/productimages/"+val.mainimage} alt />
            <div className="men-cart-pro">
                <div className="inner-men-cart-pro">
                <a href={"http://localhost:3000/viewproduct/"+val._id+"/"+val.subcategory[0].subcategory+"/"+val.category[0].category} className="link-product-add-cart">Quick View</a>
                </div>
            </div>
            </div>
            <span className="product-new-top">New</span>
            <div className="item-info-product text-center border-top mt-4">
            <h4 className="pt-1">
    <a href={"http://localhost:3000/viewproduct/"+val._id+"/"+val.subcategory[0].subcategory+"/"+val.category[0].category}>{val.modelname}</a>
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

        
        const menswear = data.map((val, index) =>
        (val.category_id == "5ebf85ec5329d328ac47af1f" ?<div className="col-md-4 product-men mt-5">
        <div className="men-pro-item simpleCart_shelfItem">
            <div className="men-thumb-item text-center">
            <img  className="imgagestyle" src={ApiUrl+"/productimages/"+val.mainimage} alt />
            <div className="men-cart-pro">
                <div className="inner-men-cart-pro">
                <a href={"http://localhost:3000/viewproduct/"+val._id+"/"+val.subcategory[0].subcategory+"/"+val.category[0].category} className="link-product-add-cart">Quick View</a>
                </div>
            </div>
            </div>
            <span className="product-new-top">New</span>
            <div className="item-info-product text-center border-top mt-4">
            <h4 className="pt-1">
    <a href={"http://localhost:3000/viewproduct/"+val._id+"/"+val.subcategory[0].subcategory+"/"+val.category[0].category}>{val.modelname}</a>
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
        )

        this.setState({
            electronics : newbrandmoiles,
            homeappliances : homeaplliances,
            menswear : menswear,
        })
    }

    product = () =>{
        axios.get(ApiUrl+"/front/api/v1/productdetails/").then((result) =>{
            this.mappedproduct(result.data)
        this.setState({
            products : result.data,
            staticarray : result.data,
        })
    });

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

            const newbrandmoiles = this.state.staticarray.map((val, index) =>
            (val.category_id == "5ebf85fd5329d328ac47af21" && val.finalprice <  price.price2 && val.finalprice > price.price1 && val.offer <  offer.offer2 && val.offer > offer.offer1  ?<div className="col-md-4 product-men mt-5">
            <div className="men-pro-item simpleCart_shelfItem">
                <div className="men-thumb-item text-center">
                <img className="imgagestyle" src={ApiUrl+"/productimages/"+val.mainimage} alt />
                <div className="men-cart-pro">
                    <div className="inner-men-cart-pro">
                    <a href={"http://localhost:3000/viewproduct/"+val._id+"/"+val.subcategory[0].subcategory+"/"+val.category[0].category} className="link-product-add-cart">Quick View</a>
                    </div>
                </div>
                </div>
                <span className="product-new-top">New</span>
                <div className="item-info-product text-center border-top mt-4">
                <h4 className="pt-1">
        <a href={"http://localhost:3000/viewproduct/"+val._id+"/"+val.subcategory[0].subcategory+"/"+val.category[0].category}>{val.modelname}</a>
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

              const homeaplliances = this.state.staticarray.map((val, index) =>
            (val.category_id == "5f3bf35517bba5eeca778a95" && val.finalprice <  price.price2 && val.finalprice > price.price1 && val.offer <  offer.offer2 && val.offer > offer.offer1  ?<div className="col-md-4 product-men mt-5">
            <div className="men-pro-item simpleCart_shelfItem">
                <div className="men-thumb-item text-center">
                <img className="imgagestyle" src={ApiUrl+"/productimages/"+val.mainimage} alt />
                <div className="men-cart-pro">
                    <div className="inner-men-cart-pro">
                    <a href={"http://localhost:3000/viewproduct/"+val._id+"/"+val.subcategory[0].subcategory+"/"+val.category[0].category} className="link-product-add-cart">Quick View</a>
                    </div>
                </div>
                </div>
                <span className="product-new-top">New</span>
                <div className="item-info-product text-center border-top mt-4">
                <h4 className="pt-1">
        <a href={"http://localhost:3000/viewproduct/"+val._id+"/"+val.subcategory[0].subcategory+"/"+val.category[0].category}>{val.modelname}</a>
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

            const menswear = this.state.staticarray.map((val, index) =>
            (val.category_id == "5ebf85ec5329d328ac47af1f" && val.finalprice <  price.price2 && val.finalprice > price.price1 && val.offer <  offer.offer2 && val.offer > offer.offer1  ?<div className="col-md-4 product-men mt-5">
            <div className="men-pro-item simpleCart_shelfItem">
                <div className="men-thumb-item text-center">
                <img className="imgagestyle" src={ApiUrl+"/productimages/"+val.mainimage} alt />
                <div className="men-cart-pro">
                    <div className="inner-men-cart-pro">
                    <a href={"http://localhost:3000/viewproduct/"+val._id+"/"+val.subcategory[0].subcategory+"/"+val.category[0].category} className="link-product-add-cart">Quick View</a>
                    </div>
                </div>
                </div>
                <span className="product-new-top">New</span>
                <div className="item-info-product text-center border-top mt-4">
                <h4 className="pt-1">
        <a href={"http://localhost:3000/viewproduct/"+val._id+"/"+val.subcategory[0].subcategory+"/"+val.category[0].category}>{val.modelname}</a>
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
                electronics : newbrandmoiles,
                homeappliances : homeaplliances,
                menswear : menswear,
            })
        } else {
            this.mappedproduct(this.state.staticarray);
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
                <Banner />
        <div className="ads-grid py-sm-5 py-4">
            <div className="container py-xl-4 py-lg-2">
            {/* tittle heading */}
            <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                <span>O</span>ur
                <span>N</span>ew
                <span>P</span>roducts</h3>
            {/* //tittle heading */}
            <div className="row">
                {/* product left */}
                <div className="agileinfo-ads-display col-lg-9">
                <div className="wrapper">
                    {/* first section */}
                    <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                    <h3 className="heading-tittle text-center font-italic">Electronics</h3>
                    <div className="row">
                     {this.state.electronics}
                    </div>
                    </div>
                    {/* //first section */}
                    {/* second section */}
                    <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                    <h3 className="heading-tittle text-center font-italic">Home Appliances</h3>
                    <div className="row">
                       {this.state.homeappliances}
                    </div>
                    </div>

                    <Common />

                    <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mt-4">
                    <h3 className="heading-tittle text-center font-italic">Mens Wear</h3>
                    <div className="row">
                    {this.state.menswear}
                </div>
                </div>
                </div>
                </div>
               
               
                {/* product right */}
        
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
