import React, { Component } from 'react';
import axios from 'axios';
import { ApiUrl } from '../config/Config';
import * as common from '../config/Common';
import $ from "jquery";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default class Model extends Component {
    constructor(props){
        super(props);
        this.state = {
            reg_name : '',
            reg_email: '',
            reg_password : '',
            reg_repassword : '',
            reg_mobile : '',
            log_password : '',
            log_email : '',
            repass_error : '',
            cartlist : "",
        }
    }

    onHandlechange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onHandlechangepass =(e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });

        if(this.state.reg_repassword !=='' && e.target.name === "reg_password" && (this.state.reg_repassword !== e.target.value)){ 
            this.setState({
                pass_error : 'Password does not match with confirm password',
                repass_error : '',
            });
        } else if(this.state.reg_password !=='' && e.target.name === "reg_repassword" && (this.state.reg_password !== e.target.value)){
            this.setState({
                repass_error : 'Confirm password does not match with password',
                pass_error : '',
            });
        } else {
            this.setState({
            repass_error : '',
            pass_error : '',
        });
        }
    }

    submitRegister = (e)=>{

        const formdata = {
            name:this.state.reg_name,
            email:this.state.reg_email,
            mobile:this.state.reg_mobile,
            password:this.state.reg_password,
        }
        
        axios.post(ApiUrl+'/front/api/v1/register/',formdata).then((result) =>{ 
           if(result.data.success ===1) common.setToken("token",result.data.data._id);
            MySwal.fire({
                title: <p>Register</p>,
                footer: 'Welcome!!!!!',
                onOpen: () => {
                  // `MySwal` is a subclass of `Swal`
                  //   with all the same instance & static methods
                  MySwal.clickConfirm();
                  if(result.data.success !==0) window.location.reload(false);
                }
              }).then(() => {
                if(result.data.success ===1) return MySwal.fire(<p>Register Successfully.</p>);
                else if(result.data.success ===0) return MySwal.fire(<p>Email Already Exist.</p>)
                else return MySwal.fire(<p>Registeration Failure.</p>);
              })
        })
    } 

    
    submitLogin = (e) =>{

        const formdata = {
            email:this.state.log_email,
            password:this.state.log_password,
        }

        axios.post(ApiUrl+'/front/api/v1/login/', formdata).then((result) =>{
            if(result.data.success ===1) common.setToken("token",result.data.data);
            MySwal.fire({
                title: <p>Login</p>,
                footer: 'Welcome!!!!!',
                onOpen: () => {
                  // `MySwal` is a subclass of `Swal`
                  //   with all the same instance & static methods
                  MySwal.clickConfirm();
                  if(result.data.success ===1) window.location.reload(false);
                }
              }).then(() => {
                if(result.data.success ===1) return MySwal.fire(<p>Login Successfully.</p>);
                else if(result.data.success ===2) return MySwal.fire(<p>Wrong Password.</p>);
                else if(result.data.success ===0) return MySwal.fire(<p>User Not Found.</p>);
              })
        });
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
                <div>
                {/* Button trigger modal(select-location) */}
                <div id="small-dialog1" className="mfp-hide">
                    <div className="select-city">
                    <h3>
                        <i className="fas fa-map-marker" /> Please Select Your Location</h3>
                    <select className="list_of_cities">
                        <optgroup label="Popular Cities">
                        <option selected style={{display: 'none', color: '#eee'}}>Select City</option>
                        <option>Birmingham</option>
                        <option>Anchorage</option>
                        <option>Phoenix</option>
                        <option>Little Rock</option>
                        </optgroup>
                    </select>
                    <div className="clearfix" />
                    </div>
                </div>
                {/* //shop locator (popup) */}
                {/* modals */}
                {/* log in */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title text-center">Log In</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                            <label className="col-form-label">Email</label>
                            <input type="email" className="form-control" onChange={e=>{this.onHandlechange(e)}} name="log_email" required />
                            </div>
                            <div className="form-group">
                            <label className="col-form-label">Password</label>
                            <input type="password" className="form-control"onChange={e=>{this.onHandlechange(e)}} name="log_password" required />
                            </div>
                            <div className="right-w3l">
                            <input type="submit" className="form-control" onClick={e=>this.submitLogin(e)}  value="Log in" />
                            </div>
                            <div className="sub-w3l">
                            <div className="custom-control custom-checkbox mr-sm-2">
                                <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                                <label className="custom-control-label" htmlFor="customControlAutosizing">Remember me?</label>
                            </div>
                            </div>
                            <p className="text-center dont-do mt-3">Don't have an account?
                            <a href="#" data-toggle="modal" data-target="#exampleModal2">
                                Register Now</a>
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
                {/* register */}
                <div className="modal fade" id="exampleModal2" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title">Register</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                            <label className="col-form-label">Your Name</label>
                            <input type="text" className="form-control" onChange={e=>{this.onHandlechange(e)}} name="reg_name" required />
                            </div>
                            <div className="form-group">
                            <label className="col-form-label">Email</label>
                            <input type="email" className="form-control" onChange={e=>{this.onHandlechange(e)}} name="reg_email" required />
                            </div>
                            <div className="form-group">
                            <label className="col-form-label">Mobile Number</label>
                            <input type="text" className="form-control" onChange={e=>{this.onHandlechange(e)}} name="reg_mobile" required />
                            </div>
                            <div className="form-group">
                            <label className="col-form-label">Password</label>
                            <input type="password" className="form-control" onChange={e=>{this.onHandlechangepass(e)}} name="reg_password" id="password1" required />
                            <span style={{color:"red"}} >{this.state.pass_error}</span>
                            </div>
                            <div className="form-group">
                            <label className="col-form-label">Confirm Password</label>
                            <input type="password" className="form-control" onChange={e=>{this.onHandlechangepass(e)}} name="reg_repassword" id="password2" required />
                            <span style={{color:"red"}} >{this.state.repass_error}</span>
                            </div>
                            <div className="right-w3l">
                            <input type="submit" className="form-control"  onClick={e=>this.submitRegister(e)} value="Register" />
                            </div>
                            <div className="sub-w3l">
                            <div className="custom-control custom-checkbox mr-sm-2">
                                <input type="checkbox" className="custom-control-input" id="customControlAutosizing2" />
                                <label className="custom-control-label" htmlFor="customControlAutosizing2">I Accept to the Terms &amp; Conditions</label>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/* checkout */}
                <div className="modal" id="exampleModal3" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{border: "1px solid rgb(8, 121, 201)"}}>
                        <div className="modal-header">
                        <h5 className="modal-title text-center">Cart</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        </div>
                        <div className="modal-body">
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
                    <span style={{float : "right"}}> <b>Total Amount :</b> ₹ <span id="totalamount">{totalamount}</span> rs</span><br/>
                        <a href="http://localhost:3000/checkout"><span style={{float : "right"}}> <input type="submit"value="Checkout" style={{backgroundColor : "#cecef7"}} className="button btn" /> 
                    </span></a>
                        </div>
                    </div>
                    </div>
                </div>
                {/* //modal */}
                {/* //top-header */}
                </div>
      </div>
        )
    }
}
