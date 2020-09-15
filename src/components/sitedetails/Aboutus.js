import React, { Component } from 'react'
import Special from '../advertisment/Special'
import { ApiUrl } from '../../config/Config';
import axios from 'axios';

//layouts
import Header from '../../layouts/Header';
import Menu from '../../layouts/Menu';
import Model from '../../layouts/Model';
import Headerbottom from '../../layouts/Headerbottom';
import Mainfooter from '../../layouts/Mainfooter';


export default class Aboutus extends Component {
    constructor(props){
        super(props);
        this.state={
            aboutus : [{}],
        }
    }

    componentDidMount(){
        axios.get(ApiUrl+"/front/api/v1/aboutus/").then((result) =>{
            this.setState({
                aboutus : result.data,
            });
        });
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
                <li>About Us</li>
                </ul>
            </div>
            </div>
        </div>
        {/* //page */}
        {/*-728x90-*/}
        {/* about */}
        <div className="welcome py-sm-5 py-4">
            <div className="container py-xl-4 py-lg-2">
            {/* tittle heading */}
            <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                <span>A</span>bout
                <span>U</span>s</h3>
            {/* //tittle heading */}
            <div className="row">
               <div
        dangerouslySetInnerHTML={{
          __html: this.state.aboutus[0].aboutus
        }}></div>
            </div>
            </div>
        </div>
        <Special />
    <Mainfooter />
        </div>

        )
    }
}
