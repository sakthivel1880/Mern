import React, { Component } from 'react';
import { getToken, removeToken } from '../config/Common';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { ApiUrl } from '../config/Config';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            contact : [{}],
        }
    }

    logout = (e)=>{
        removeToken();
        if(!getToken()){ 
            window.location.href="http://localhost:3000/";
        }
    }

    
    componentDidMount(){

        axios.get(ApiUrl+"/front/api/v1/selectcontact/").then((result) =>{
            this.setState({
                contact : result.data
            })
        })
    }
    render() {
        let login = '';
        if(getToken()){
            login = <> <li className="text-center border-right text-white">
            <a href="http://localhost:3000/whishlist/" className="text-white">
                <i className="fas fa-heart mr-2" /> Wish List</a>
            </li>
            <li className="text-center border-right text-white">
            <a href="http://localhost:3000/checkout/" className="text-white">
                <i className="fas fa-share mr-2" /> Checkout</a>
            </li>
             <li className="text-center border-right text-white">
            <a href="http://localhost:3000/profile/"  className="text-white">
            <i className="fas fa-user mr-2" />Profile</a>
        </li>
        <li className="text-center text-white">
            <a href="javascript:void(0)" onClick={e=>{this.logout(e)}} className="text-white">
            <i className="fas fa-sign-out-alt mr-2" /> Log Out </a>
        </li></>;
            
        } else {
            login = <>
             <li className="text-center border-right text-white">
                <a href="#" data-toggle="modal" data-target="#exampleModal" className="text-white">
                    <i className="fas fa-heart mr-2" /> Wish List</a>
                </li>
                <li className="text-center border-right text-white">
                <a href="#" data-toggle="modal" data-target="#exampleModal" className="text-white">
                    <i className="fas fa-share mr-2" /> Checkout</a>
                </li>
                <li className="text-center border-right text-white">
                <a href="#" data-toggle="modal" data-target="#exampleModal" className="text-white">
                <i className="fas fa-sign-in-alt mr-2" /> Log In </a>
            </li>
            <li className="text-center text-white">
                <a href="#" data-toggle="modal" data-target="#exampleModal2" className="text-white">
                <i className="fas fa-sign-out-alt mr-2" />Register </a>
            </li></>;
        }
        return (
            <div>
                
             <div className="agile-main-top">
        <div className="container-fluid">
            <div className="row main-top-w3l py-2">
            <div className="col-lg-4 header-most-top">
                <p className="text-white text-lg-left text-center">Offer Zone Top Deals &amp; Discounts
                <i className="fas fa-shopping-cart ml-1" />
                </p>
            </div>
            <div className="col-lg-8 header-right mt-lg-0 mt-2">
                {/* header lists */}
                <ul>
                {/* <li className="text-center border-right text-white">
                    <a className="play-icon popup-with-zoom-anim text-white" href="#small-dialog1">
                    <i className="fas fa-map-marker mr-2" />Select Location</a>
                </li> */}
                <li className="text-center border-right text-white">
                    <i className="fas fa-phone mr-2" /> {this.state.contact[0].phone}
                </li>
               
                 {login}
                </ul>
                {/* //header lists */}
            </div>
            </div>
        </div>
        </div>


            </div>
        )
    }
}
