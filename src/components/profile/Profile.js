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

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            fullname : "",
            mobile : "",
            landmark : "",
            city : "",
            addresstype : "",
            address : "",
            profileid : "",
            numrows : 0,
            styleprofile : "block",
            editbutton : "none",
            cardstyle : "none",
        }
    }

    onHandlechange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    insertData = () =>{
        const formdata = {
            registerid : common.getToken(),
            fullname : this.state.fullname,
            mobile : this.state.mobile,
            landmark : this.state.landmark,
            city : this.state.city,
            addresstype : this.state.addresstype,
            address : this.state.address,
        }
        axios.post(ApiUrl+"/front/api/v1/addprofile/",formdata).then((result) =>{
            if(result.data.success == 1) {
                this.getprofile();
                this.resetData();
            }
        })
    }

    updateData = () =>{
        const formdata = {
            registerid : common.getToken(),
            profileid : this.state.profileid,
            fullname : this.state.fullname,
            mobile : this.state.mobile,
            landmark : this.state.landmark,
            city : this.state.city,
            addresstype : this.state.addresstype,
            address : this.state.address,
        }
        axios.post(ApiUrl+"/front/api/v1/updateprofile/",{formdata}).then((result) =>{
            if(result.data.success == 1) {
                this.getprofile();
                this.resetData();
            }
        })
    }

    onHandlesubmit = (e) =>{
        e.preventDefault();
        if(this.state.profileid ==""){
            this.insertData();
        } else {
            this.updateData();
        }
        
    }

    getprofile = () =>{
        axios.post(ApiUrl+"/front/api/v1/getprofile/",{id:common.getToken()}).then((result) =>{
            if(result.data.length > 0){
            this.setState({
                numrows : 1,
                profileid : result.data[0]._id,
                fullname : result.data[0].fullname,
                mobile : result.data[0].mobile,
                landmark : result.data[0].landmark,
                city : result.data[0].city,
                addresstype : result.data[0].addresstype,
                address : result.data[0].address,
                styleprofile : "none",
                editbutton : "block",
                cardstyle : "block",
            })
        } 
        })
    }

    resetData = () =>{
        this.setState({
            fullname : "",
            mobile : "",
            landmark : "",
            city : "",
            addresstype : "",
            address : "",
        })
    }

    editprofile = () =>{
        this.setState({
            styleprofile : "block",
            editbutton : "none",
            cardstyle : "none",
        })
    }

    componentDidMount(){
        this.getprofile();
    }

  render() {
  
    return (
        <>
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
                    <li>Profile</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="privacy py-sm-5 py-4">
                <div className="container py-xl-4 py-lg-2">
                {/* tittle heading */}
                <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                    <span>P</span>rofile
                </h3>
                <div className="checkout-left">
                    <div className="address_form_agile mt-sm-5 mt-4">
                        {(this.state.numrows > 0 ? <button className="check_out btn" style={{float : "right",display : this.state.editbutton}} onClick={e=>{this.editprofile()}}>Edit</button> : "")}
                    <form onSubmit={e=>{this.onHandlesubmit(e)}} style={{display : this.state.styleprofile}}>
                        <input type="hidden" value={this.state.profileid} name="profileid" />
                        <div className="creditly-wrapper wthree, w3_agileits_wrapper">
                        <div className="information-wrapper">
                            <div className="first-row">
                            <div className="controls form-group">
                                <input className="billing-address-name form-control" type="text" onChange={e=>{this.onHandlechange(e)}} value={this.state.fullname} name="fullname" placeholder="Full Name" required />
                            </div>
                            <div className="w3_agileits_card_number_grids">
                                <div className="w3_agileits_card_number_grid_left form-group">
                                <div className="controls">
                                    <input type="text" className="form-control" placeholder="Mobile Number" onChange={e=>{this.onHandlechange(e)}} value={this.state.mobile} name="mobile" required />
                                </div>
                                </div>
                                <div className="w3_agileits_card_number_grid_right form-group">
                                <div className="controls">
                                    <input type="text" className="form-control" placeholder="Landmark" onChange={e=>{this.onHandlechange(e)}} value={this.state.landmark} name="landmark" required />
                                </div>
                                </div>
                            </div>
                            <div className="controls form-group">
                                <input type="text" className="form-control" placeholder="Town/City" onChange={e=>{this.onHandlechange(e)}} value={this.state.city} name="city" required />
                            </div>
                            <div className="controls form-group">
                                <select className="option-w3ls" value={this.state.addresstype} onChange={e=>{this.onHandlechange(e)}} name="addresstype">
                                <option>Select Address type</option>
                                <option>Office</option>
                                <option>Home</option>
                                <option>Commercial</option>
                                </select>
                            </div>
                            <div className="w3_agileits_card_number_grids">
                            <div className="w3_agileits_card_number_grid_right form-group">
                                <div className="controls">
                                <textarea className="form-control" placeholder="Address" value={this.state.address} onChange={e=>{this.onHandlechange(e)}} name="address" required ></textarea>
                            </div>
                            </div>
                            </div>
                            </div>
                            <button className="submit check_out btn">Save Profile</button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>

                <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4" style={{display : this.state.cardstyle}}>
                    <div className="row">
                 <div className="col-md-3"><b>Fullname</b>:</div> <div className="col-md-4"><span>{this.state.fullname}</span></div>
                    </div>
                    <div className="row">
                    <div className="col-md-3"><b>Moile Number</b>:</div> <div className="col-md-4"><span> {this.state.mobile}</span></div>
                    </div>
                    <div className="row">
                    <div className="col-md-3"><b>Landmark</b>:</div> <div className="col-md-4"><span> {this.state.landmark}</span></div>
                    </div>
                    <div className="row">
                    <div className="col-md-3"><b>City</b>:</div> <div className="col-md-4"><span> {this.state.city}</span></div>
                    </div>
                    <div className="row">
                    <div className="col-md-3"><b>Address Type</b>:</div> <div className="col-md-4"><span> {this.state.addresstype}</span></div>
                    </div>
                    <div className="row">
                    <div className="col-md-3"><b>Address</b>:</div> <div className="col-md-4"><span>  {this.state.address}</span></div>
                    </div>
                </div>
                </div>
                </div>
        <Special />
    <Mainfooter />
     </>
    );
  }
}
