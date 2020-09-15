import React, { Component } from 'react'
import Special from '../advertisment/Special'
import axios from 'axios';
import { ApiUrl } from '../../config/Config';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

//layouts
import Header from '../../layouts/Header';
import Menu from '../../layouts/Menu';
import Model from '../../layouts/Model';
import Headerbottom from '../../layouts/Headerbottom';
import Mainfooter from '../../layouts/Mainfooter';



const MySwal = withReactContent(Swal)

export default class Contactus extends Component {
    constructor(props){
        super(props);
        this.state={
            name : '',
            email : '',
            message : '',
            contact : [{}],
        }
    }

    onHandlechange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onSubmit = (e) =>{
        const formdata = {
            name : this.state.name,
            email : this.state.email,
            message : this.state.message,
        }

        axios.post(ApiUrl+'/front/api/v1/message/', formdata).then((result) =>{
            MySwal.fire({
                title: <p>Contact Us</p>,
                footer: 'Welcome!!!!!',
                onOpen: () => {
                  MySwal.clickConfirm();
                }
              }).then(() => {
                MySwal.fire(<p>Message successfully send.</p>);
              });
        });
        this.ResetForm();
    }

    ResetForm = () =>{
        this.setState({
            name : '',
            email : '',
            message : '',
        })
    }

    componentDidMount(){

        axios.get(ApiUrl+"/front/api/v1/selectcontact/").then((result) =>{
            this.setState({
                contact : result.data
            })
        })
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
                <li>Contact Us</li>
                </ul>
            </div>
            </div>
        </div>
        {/* //page */}
        {/*-728x90-*/}
        {/* contact */}
        <div className="contact py-sm-5 py-4">
            <div className="container py-xl-4 py-lg-2">
            {/* tittle heading */}
            <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                <span>C</span>ontact
                <span>U</span>s
            </h3>
            {/* //tittle heading */}
            <div className="row contact-grids agile-1 mb-5">
                <div className="col-sm-4 contact-grid agileinfo-6 mt-sm-0 mt-2">
                <div className="contact-grid1 text-center">
                    <div className="con-ic">
                    <i className="fas fa-map-marker-alt rounded-circle" />
                    </div>
                    <h4 className="font-weight-bold mt-sm-4 mt-3 mb-3">Address</h4>
                    {/* <p>1PO Box 8568954 Melbourne
                    <label>Australia.</label> */}
                    <p>{this.state.contact[0].address}
                    </p>
                </div>
                </div>
                <div className="col-sm-4 contact-grid agileinfo-6 my-sm-0 my-4">
                <div className="contact-grid1 text-center">
                    <div className="con-ic">
                    <i className="fas fa-phone rounded-circle" />
                    </div>
                    <h4 className="font-weight-bold mt-sm-4 mt-3 mb-3">Call Us</h4>
                    <p>{this.state.contact[0].phone}
                    </p>
                </div>
                </div>
                <div className="col-sm-4 contact-grid agileinfo-6">
                <div className="contact-grid1 text-center">
                    <div className="con-ic">
                    <i className="fas fa-envelope-open rounded-circle" />
                    </div>
                    <h4 className="font-weight-bold mt-sm-4 mt-3 mb-3">Email</h4>
                    <p>
                    <a href={"mailto:"+this.state.contact[0].email}>{this.state.contact[0].email}</a>
                   
                    </p>
                </div>
                </div>
            </div>
            {/* form */}
                <div className="contact-grids1 w3agile-6">
                <div className="row">
                    <div className="col-md-6 col-sm-6 contact-form1 form-group">
                    <label className="col-form-label">Name</label>
                    <input type="text" className="form-control" onChange={e=>this.onHandlechange(e)} value={this.state.name} name="name" placeholder required />
                    </div>
                    <div className="col-md-6 col-sm-6 contact-form1 form-group">
                    <label className="col-form-label">E-mail</label>
                    <input type="email" className="form-control" onChange={e=>this.onHandlechange(e)} value={this.state.email} name="email" placeholder required />
                    </div>
                </div>
                <div className="contact-me animated wow slideInUp form-group">
                    <label className="col-form-label">Message</label>
                    <textarea name="Message" className="form-control" onChange={e=>this.onHandlechange(e)} value={this.state.message} name="message" placeholder required  />
                </div>
                <div className="contact-form">
                    <input type="submit" value="Submit" onClick={e=>this.onSubmit(e)} />
                </div>
                </div>
            {/* //form */}
            </div>
        </div>
        {/* //contact */}
        {/*-728x90-*/}
        {/* map */}
        <div className="map mt-sm-0 mt-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805196.5077734194!2d144.49270863101745!3d-37.97015423820711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne+VIC%2C+Australia!5e0!3m2!1sen!2sin!4v1474020956974" allowFullScreen />
        </div>
         <Special />
    <Mainfooter />
        </div>

        )
    }
}
