import React, { Component } from 'react';
import Special from '../advertisment/Special';

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
    
toast.configure()

export default class Single extends Component {
    constructor(props){
        super(props);
        this.state={
            products : [{}],
            id :  this.props.match.params.id,
            subcategory :  this.props.match.params.subcategory,
            category :  this.props.match.params.category,
            selectsubcategory : "",
            selectcategory : "",
        }
    }

    product = () =>{

        axios.post(ApiUrl+"/front/api/v1/singleproduct/",{id :this.state.id}).then((result) =>{
            this.setState({
                products : result.data,
            })
        })
    }

    whatsapporder = (e,val) =>{
        window.open('https://api.whatsapp.com/send?text='+val+'&phone=+918124283474', '_blank');
    }

    whishlist = (user,product) =>{
        axios.post(ApiUrl+"/front/api/v1/addtowhishlist/",{user,product}).then((result) =>{
        if(result.data.success == 1)
            toast.success('successful added to whishlist') 
            else 
            toast.warning('already added to whishlist')
        })
    }

    addtocart = (user,product)=>{  
        // toast.warning('Danger') 

        axios.post(ApiUrl+"/front/api/v1/addtocart/",{user,product}).then((result) =>{
        if(result.data.success == 1)
         toast.success('successful added to cart') 
         else 
         toast.warning('already sdded to cart')
        })

        // toast.info('GeeksForGeeks') 

        // toast.error('Runtime error') 

        // toast('Hello Geeks') 
           
    } 

    categoryselect = () =>{
        axios.get(ApiUrl+"/front/api/v1/categories/").then((result)=>{
        var varcat = result.data.filter(v=> v._id == this.state.category);
        if(varcat.length > 0){
            this.setState({
                selectcategory : varcat[0].category,
            });
        } else {
            this.setState({
                selectcategory : this.state.category,
            });
        }
        });
    }

    subcategoryselect = () =>{
        axios.get(ApiUrl+"/front/api/v1/subcategories/").then((result)=>{
            var varsub = result.data.filter(v=> v._id == this.state.subcategory);
            if(varsub.length > 0){
                this.setState({
                    selectsubcategory : varsub[0].subcategory,
                });
            } else {
                this.setState({
                    selectsubcategory : this.state.subcategory,
                });
            }
        });
    }

    componentDidMount(){
        this.categoryselect();
        this.subcategoryselect();
        this.product();
    }
    render() {
        const data = this.state.products[0];
        return (
           <>
           <Header />
       <Model />
       <Headerbottom />
       <Menu />
           <div className="page-head_agile_info_w3l">

            </div>
        <div className="services-breadcrumb">
            <div className="agile_inner_breadcrumb">
            <div className="container">
                <ul className="w3_short">
                <li>
                    <a href="http://localhost:3000/">Home</a>
                    <i>|</i>
                </li>
                <li>{this.state.selectcategory}  <i>|</i></li>
                <li>{this.state.selectsubcategory}</li>
                </ul>
            </div>
            </div>
        </div>
        {/* //page */}
        {/*-728x90-*/}
        {/* Single Page */}
        <div className="banner-bootom-w3-agileits py-5">
            <div className="container py-xl-4 py-lg-2">
            {/* tittle heading */}
            <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
        {data.modelname}</h3>
            {/* //tittle heading */}
            <div className="row">
                <div className="col-lg-5 col-md-8 single-right-left ">
                <div className="grid images_3_of_2">
                    <div className="flexslider">
                    <ul className="slides">
                        <li data-thumb={ApiUrl+"/productimages/"+data.mainimage}>
                        <div className="thumb-image">
                            <img src={ApiUrl+"/productimages/"+data.mainimage} data-imagezoom="true" className="img-fluid" alt /> </div>
                        </li>
                        <li data-thumb={ApiUrl+"/productimages/"+data.secondimage}>
                        <div className="thumb-image">
                            <img src={ApiUrl+"/productimages/"+data.secondimage} data-imagezoom="true" className="img-fluid" alt /> </div>
                        </li>
                        <li data-thumb={ApiUrl+"/productimages/"+data.thirdimage}>
                        <div className="thumb-image">
                            <img src={ApiUrl+"/productimages/"+data.thirdimage} data-imagezoom="true" className="img-fluid" alt /> </div>
                        </li>
                    </ul>
                    <div className="clearfix" />
                    </div>
                </div>
                </div>
                <div className="col-lg-7 single-right-left simpleCart_shelfItem">
        <h3 className="mb-3">{data.modelname}</h3>
                <p className="mb-3">
        <span className="item_price">₹{data.finalprice}</span>
                    <del className="mx-2 font-weight-light">₹{data.finalprice + data.offeramount}</del>
                    <label>Free delivery</label>
                </p>
                <div className="single-infoagile">
                    <div
        dangerouslySetInnerHTML={{
            __html: data.specification
          }}>
              </div>

                </div>
                <div className="product-single-w3l">
                   <div
        dangerouslySetInnerHTML={{
            __html: data.features
          }}>
              </div>

                </div>
                <div className="occasion-cart">
                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                    <span style={{display:"flex"}}>
                        {common.Userlogin() ? <span style={{display:"flex"}}><input type="submit" name="submit" value="Add to cart"  onClick={e=>{this.addtocart(common.getToken(),data._id)}} style={{margin: '5px',}} className="button" />
                        <input type="submit" name="submit" value="Add to Whishlist" onClick={e=>{this.whishlist(common.getToken(),data._id)}} style={{margin: '5px', backgroundColor:"#e16076"}} className="button" /></span>
                     : 
                     <span style={{display:"flex"}}><input type="submit" data-toggle="modal" data-target="#exampleModal" value="Add to cart" style={{margin: '5px',}} className="button" />
                     <input type="submit" data-toggle="modal" data-target="#exampleModal" value="Add to Whishlist"  style={{margin: '5px', backgroundColor:"#e16076"}} className="button" /></span>}

                     <span><input type="submit" name="submit" value="Whatsapp Order" onClick={e=>{this.whatsapporder(e,data.modelname)}} style={{margin: '5px', backgroundColor:"green"}} className="button" /></span>
                          </span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <Special />
    <Mainfooter />
        </>

        )
    }
}
