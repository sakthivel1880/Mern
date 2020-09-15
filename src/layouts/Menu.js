import React, { Component } from 'react';
import axios from 'axios';
import { ApiUrl } from '../config/Config';

export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
            category :[],
            subcategory :[],
        }
    }


    categoryselect = () =>{
        axios.get(ApiUrl+"/front/api/v1/categories/").then((result)=>{
            this.setState({
                category : result.data,
            });
        });
    }

    subcategoryselect = () =>{
        axios.get(ApiUrl+"/front/api/v1/subcategories/").then((result)=>{
            this.setState({
                subcategory : result.data,
            });
        });
    }

    componentDidMount(){
        this.categoryselect();
       this.subcategoryselect();
       
    }

    render() {
        const parsedData = window.location.pathname.split("/"); 
        let active ="";
        if(parsedData.length == 5)
         active = parsedData[4];
        else
         active = parsedData[1];
         


        const cate = this.state.category.map((val,index) =>
            <option key={index} value={val._id}>{val.category}</option>
        )

        const electricalsleft= this.state.subcategory.map((val,index) =>
        (val.category_id === "5ebf85fd5329d328ac47af21" && index  <=26 ? <li>
            <a href={"http://localhost:3000/products/"+val._id+"/"+val.subcategory+"/Electricals"}>{val.subcategory}</a>
            </li> :"")
           )

        const electricalsright= this.state.subcategory.map((val,index) =>
        (val.category_id === "5ebf85fd5329d328ac47af21" && index  >26 ? <li>
            <a href={"http://localhost:3000/products/"+val._id+"/"+val.subcategory+"/Electricals"}>{val.subcategory}</a>
            </li> :"")
           )

           
        const homeleft= this.state.subcategory.map((val,index) =>
        (val.category_id === "5f3bf35517bba5eeca778a95" && index  <=8 ? <li>
            <a href={"http://localhost:3000/products/"+val._id+"/"+val.subcategory+"/Home Appliances"}>{val.subcategory}</a>
            </li> :"")
           )

        const homeright= this.state.subcategory.map((val,index) =>
        (val.category_id === "5f3bf35517bba5eeca778a95" && index  >8 ? <li>
            <a href={"http://localhost:3000/products/"+val._id+"/"+val.subcategory+"/Home Appliances"}>{val.subcategory}</a>
            </li> :"")
           )
        return (
           <div>
            <div className="navbar-inner">
                <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="agileits-navi_search">
                    <form action="#" method="post">
                        <select id="agileinfo-nav_search" name="agileinfo_search" className="border" required>
                        <option value>All Categories</option>
                            {cate}
                        </select>
                    </form>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto text-center mr-xl-5">
                        <li className={"nav-item"+(active=="" ? "active" : "")+" mr-lg-2 mb-lg-0 mb-2"}>
                        <a className="nav-link" href="http://localhost:3000/">Home
                            {/* <span className="sr-only">(current)</span> */}
                        </a>
                        </li>
                        <li className={"nav-item dropdown"+(active=="Electricals" ? " active" : "")+" mr-lg-2 mb-lg-0 mb-2"}>
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Electronics
                        </a>
                        <div className="dropdown-menu">
                            <div className="agile_inner_drop_nav_info p-4">
                            <h5 className="mb-3">Mobiles, Computers</h5>
                            <div className="row">
                                <div className="col-sm-6 multi-gd-img">
                                <ul className="multi-column-dropdown">
                                   {electricalsleft}
                                </ul>
                                </div>
                                <div className="col-sm-6 multi-gd-img">
                                <ul className="multi-column-dropdown">
                                  {electricalsright}
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </li>
                        <li className={"nav-item dropdown"+(active=="Home%20Appliances" ? " active" : "")+" mr-lg-2 mb-lg-0 mb-2"}>
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Appliances
                        </a>
                        <div className="dropdown-menu">
                            <div className="agile_inner_drop_nav_info p-4">
                            <h5 className="mb-3">TV, Appliances, Electronics</h5>
                            <div className="row">
                                <div className="col-sm-6 multi-gd-img">
                                <ul className="multi-column-dropdown">
                                  {homeleft}
                                </ul>
                                </div>
                                <div className="col-sm-6 multi-gd-img">
                                <ul className="multi-column-dropdown">
                                    {homeright}
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </li>
                        <li className={"nav-item"+(active=="about" ? " active" : "")+" mr-lg-2 mb-lg-0 mb-2"}>
                        <a className="nav-link" href="http://localhost:3000/about">About Us</a>
                        </li>
                        <li className={"nav-item"+(active=="newarrival" ? " active" : "")+" mr-lg-2 mb-lg-0 mb-2"}>
                        <a className="nav-link" href="http://localhost:3000/newarrival">New Arrivals</a>
                        </li>
                        <li className={"nav-item dropdown"+(active=="terms" || active=="privacy" || active=="help" || active=="faqs"  ? " active" : "")+" mr-lg-2 mb-lg-0 mb-2"}>
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            More
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="http://localhost:3000/terms">Terms of Use</a>
                            <a className="dropdown-item" href="http://localhost:3000/privacy">Privacy Policiy</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="http://localhost:3000/help">Helps</a>
                            <a className="dropdown-item" href="http://localhost:3000/help">FAQs</a>
                            </div>
                            {/* <div className="dropdown-divider" />
                            <a className="dropdown-item" href="http://localhost:3000/checkout">Checkout Page</a>
                            <a className="dropdown-item" href="http://localhost:3000/payment">Payment Page</a>
                        </div> */}
                        </li>
                        <li className={"nav-item"+(active=="contact" ? " active" : "")}>
                        <a className="nav-link" href="http://localhost:3000/contact">Contact Us</a>
                        </li>
                    </ul>
                    </div>
                </nav>
                </div>
            </div>
            </div>

        )
    }
}
