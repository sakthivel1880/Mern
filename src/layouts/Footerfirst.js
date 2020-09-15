import React, { Component } from 'react'
import axios from 'axios';
import { ApiUrl } from '../config/Config';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default class Footerfirst extends Component {
    constructor(props){
        super(props);
        this.state={
            category :[],
            contact : [{}],
            social : [{}],
            subemail : '',
        }
    }
    
    categoryselect = () =>{
        axios.get(ApiUrl+"/front/api/v1/categories/").then((result)=>{
            this.setState({
                category : result.data,
            });
        });
    }

    onchangedata =(e) =>{
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    selectcontact = () =>{
        axios.get(ApiUrl+"/front/api/v1/selectcontact/").then((result) =>{
            this.setState({
                contact : result.data
            })
        })
    }

    selectsocail = () =>{
        axios.get(ApiUrl+"/front/api/v1/selectsocail/").then((result) =>{
            this.setState({
                social : result.data
            })
        })
    }

    subscribe =(e) =>{
        const formdata ={
            email : this.state.subemail,
        }
        axios.post(ApiUrl+"/front/api/v1/subscribe/",formdata).then(result =>{
            MySwal.fire({
                title: <p>Register</p>,
                footer: 'Welcome!!!!!',
                onOpen: () => {
                  MySwal.clickConfirm();
                }
              }).then(() => {
                if(result.data.success ===1) return MySwal.fire(<p>Successfully Subscribed.</p>);
                else if(result.data.success ===0) return MySwal.fire(<p>Email Already Exist.</p>)
                else return MySwal.fire(<p>Subscribe Failure.</p>);
              })
              this.setState({subemail : ""})
        });

    }

    componentDidMount(){
        this.categoryselect();
        this.selectcontact();
        this.selectsocail();
    }

    render() {
        return (
        <div>
        <div className="w3l-middlefooter-sec">
            <div className="container py-md-5 py-sm-4 py-3">
            <div className="row footer-info w3-agileits-info">
                {/* footer categories */}
                <div className="col-md-3 col-sm-6 footer-grids">
                <h3 className="text-white font-weight-bold mb-3">Categories</h3>
                <ul>
                    {
                        this.state.category.map((val,index) =>
                            (index < 6 ?  <li className="mb-3">
                            <a href={"http://localhost:3000/category/"+val._id+"/"+val.category}>{val.category} </a>
                            </li> : "")
                        )
                    }
                    
                </ul>
                </div>
                {/* //footer categories */}
                {/* quick links */}
                <div className="col-md-3 col-sm-6 footer-grids mt-sm-0 mt-4">
                <h3 className="text-white font-weight-bold mb-3">Quick Links</h3>
                <ul>
                    <li className="mb-3">
                    <a href="http://localhost:3000/about">About Us</a>
                    </li>
                    <li className="mb-3">
                    <a href="http://localhost:3000/contact">Contact Us</a>
                    </li>
                    <li className="mb-3">
                    <a href="http://localhost:3000/help">Help</a>
                    </li>
                    <li className="mb-3">
                    <a href="http://localhost:3000/help">Faqs</a>
                    </li>
                    <li className="mb-3">
                    <a href="http://localhost:3000/terms">Terms of use</a>
                    </li>
                    <li>
                    <a href="http://localhost:3000/privacy">Privacy Policy</a>
                    </li>
                </ul>
                </div>
                <div className="col-md-3 col-sm-6 footer-grids mt-md-0 mt-4">
                <h3 className="text-white font-weight-bold mb-3">Get in Touch</h3>
                <ul>
                    <li className="mb-3">
                    <i className="fas fa-map-marker" /> {this.state.contact[0].address}</li>
                    <li className="mb-3">
                    <i className="fas fa-mobile" /> {this.state.contact[0].phone} </li>
                    {/* <li className="mb-3">
                    <i className="fas fa-phone" /> +222 11 4444 </li> */}
                    <li className="mb-3">
                    <i className="fas fa-envelope-open" />
                    <a href={"mailto:"+this.state.contact[0].email}> {this.state.contact[0].email}</a>
                    </li>
                    {/* <li>
                    <i className="fas fa-envelope-open" />
                    <a href="mailto:example@mail.com"> mail 2@example.com</a>
                    </li> */}
                </ul>
                </div>
                <div className="col-md-3 col-sm-6 footer-grids w3l-agileits mt-md-0 mt-4">
                {/* newsletter */}
                <h3 className="text-white font-weight-bold mb-3">Newsletter</h3>
                <p className="mb-3">Free Delivery on your first order!</p>
                    <div className="form-group">
                    <input type="email" className="form-control" value={this.state.subemail} onChange={e=>{this.onchangedata(e)}} placeholder="Email" name="subemail" required />
                    <input type="submit" onClick={e=>{this.subscribe(e)}} value="Go" />
                    </div>
                {/* //newsletter */}
                {/* social icons */}
                <div className="footer-grids  w3l-socialmk mt-3">
                    <h3 className="text-white font-weight-bold mb-3">Follow Us on</h3>
                    <div className="social">
                    <ul>
                        <li>
                        <a className="icon fb" target="_blank" href={this.state.social[0].facebook}>
                            <i className="fab fa-facebook-f" />
                        </a>
                        </li>
                        <li>
                        <a className="icon tw" target="_blank" href={this.state.social[0].twitter}>
                            <i className="fab fa-twitter" />
                        </a>
                        </li>
                        <li>
                        <a className="icon gp" target="_blank" href={this.state.social[0].linkedin}>
                            <i className="fab fa-linkedin" />
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                {/* //social icons */}
                </div>
            </div>
            {/* //quick links */}
            </div>
        </div>
        </div>

        )
    }
}
