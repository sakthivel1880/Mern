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
import $ from "jquery";


import {toast} from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';

export default class Checkout extends Component {
    constructor(props){
        super(props);
        this.state = {
            cartlist : "",
        }
    }

    cartlist = () =>{
        var user = common.getToken();
        axios.post(ApiUrl+"/front/api/v1/cartlist/",{user}).then((result) =>{
           if(result.data.success == 0){
            this.setState({
                cartlist : ""
            })
           } else {
            this.setState({
                cartlist : result.data
            })
           } 
        })
    }

    plusvalue = (id) =>{
        var quantity = $("#"+id).text();
        var amount = $("#unit"+id).val();
        var totalamount = $("#totalamount").text();
        $("#totalamount").text(parseInt(totalamount)+parseInt(amount)); 
        $("#"+id).text(parseInt(quantity)+1); 
        $("#amount"+id).text(parseInt(amount)*(parseInt(quantity)+1));
        axios.post(ApiUrl+"/front/api/v1/quantitycartlist/",{id : id,quantity : parseInt(quantity)+1}).then((result)=>{

        })
    }

    minusvalue = (id) =>{
        var quantity = $("#"+id).text();
        if(quantity > 1){
            $("#"+id).text(parseInt(quantity)-1);
            var amount = $("#unit"+id).val();
            var totalamount = $("#totalamount").text();
            $("#totalamount").text(parseInt(totalamount)-parseInt(amount)); 
            $("#amount"+id).text(parseInt(amount)*(parseInt(quantity)-1));
            axios.post(ApiUrl+"/front/api/v1/quantitycartlist/",{id : id,quantity : parseInt(quantity)-1}).then((result)=>{
            
            })
        }
    }

    removecartlist = (user,id) =>{
        axios.post(ApiUrl+"/front/api/v1/removecartlist/",{user,id}).then((result) =>{
            if(result.data.success == 1){
            this.cartlist();
            }
        });
    }

    componentDidMount(){
        if(common.getToken()){
          this.cartlist();  
        }
    }

    render() {
        var totalamount =0 ;
        if(this.state.cartlist !=""){
            this.state.cartlist.map((val, index) =>{
                totalamount=totalamount+(val.quantity*val.product_id.finalprice);
            })
        }
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
                    <li>Checkout</li>
                    </ul>
                </div>
                </div>
            </div>
            {/* //page */}
            {/*-728x90-*/}
            {/* checkout page */}
            <div className="privacy py-sm-5 py-4">
                <div className="container py-xl-4 py-lg-2">
                {/* tittle heading */}
                <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                    <span>C</span>heckout
                </h3>
                {/* //tittle heading */}
                <div className="checkout-right">
                    <h4 className="mb-sm-4 mb-3">Your shopping cart contains:
                    <span>{(this.state.cartlist !="" ? this.state.cartlist.length : "0")} Products</span>
                    </h4>
                    <div className="table-responsive">
                    <table className="timetable_sub">
                        <thead>
                        <tr>
                            <th>SL No.</th>
                            <th>Product</th>
                            <th>Quality</th>
                            <th>Price</th>
                            <th>Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.cartlist !="" ?  
                            this.state.cartlist.map((val, index) =>
                        <tr className="rem1">
                            <input type="hidden" id={"unit"+val._id} value={val.product_id.finalprice} />
                            <td className="invert">{index+1}</td>
                            <td className="invert-image">
                            <a href={"http://localhost:3000/viewproduct/"+val.product_id._id+"/"+val.product_id.subcategory_id+"/"+val.product_id.category_id}>
                                <img src={ApiUrl+"/productimages/"+val.product_id.mainimage} alt=" " className="img-responsive" />
                            </a>
                            </td>
                            <td className="invert">
                            <div className="quantity">
                                <div className="quantity-select">
                                <div className="entry value-minus" onClick={e=>{this.minusvalue(val._id)}}>&nbsp;</div>
                                <div className="entry value">
                                    <span id={val._id}>{val.quantity}</span>
                                </div>
                                <div className="entry value-plus active" onClick={e=>{this.plusvalue(val._id)}}>&nbsp;</div>
                                </div>
                            </div>
                            </td>
                            <td className="invert">₹<span id={"amount"+val._id}>{val.quantity*val.product_id.finalprice}</span></td>
                            <td className="invert">
                            <div className="rem">
                                <div className="close1" onClick={e=>{this.removecartlist(common.getToken(),val._id)}}> </div>
                            </div>
                            </td>
                        </tr>
                         )  : <tr>Empty Cart.</tr>}
                        </tbody>
                    </table>
                    </div>
                    <span style={{float : "right"}}> <b>Total Amount :</b> ₹ <span id="totalamount">{totalamount}</span> rs</span>
                </div>
                <div className="checkout-left">
                    <div className="address_form_agile mt-sm-5 mt-4">
                    <h4 className="mb-sm-4 mb-3">Add a new Details</h4>
                    <form action="https://p.w3layouts.com/demos_new/template_demo/28-08-2018/electro_store-demo_Free/1204782700/web/payment.html" method="post" className="creditly-card-form agileinfo_form">
                        <div className="creditly-wrapper wthree, w3_agileits_wrapper">
                        <div className="information-wrapper">
                            <div className="first-row">
                            <div className="controls form-group">
                                <input className="billing-address-name form-control" type="text" name="name" placeholder="Full Name" required />
                            </div>
                            <div className="w3_agileits_card_number_grids">
                                <div className="w3_agileits_card_number_grid_left form-group">
                                <div className="controls">
                                    <input type="text" className="form-control" placeholder="Mobile Number" name="number" required />
                                </div>
                                </div>
                                <div className="w3_agileits_card_number_grid_right form-group">
                                <div className="controls">
                                    <input type="text" className="form-control" placeholder="Landmark" name="landmark" required />
                                </div>
                                </div>
                            </div>
                            <div className="controls form-group">
                                <input type="text" className="form-control" placeholder="Town/City" name="city" required />
                            </div>
                            <div className="controls form-group">
                                <select className="option-w3ls">
                                <option>Select Address type</option>
                                <option>Office</option>
                                <option>Home</option>
                                <option>Commercial</option>
                                </select>
                            </div>
                            </div>
                            <button className="submit check_out btn">Delivery to this Address</button>
                        </div>
                        </div>
                    </form>
                    <div className="checkout-right-basket">
                        <a href="http://localhost:3000/payment">Make a Payment
                        <span className="far fa-hand-point-right" />
                        </a>
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
