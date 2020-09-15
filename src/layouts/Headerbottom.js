import React, { Component } from 'react';
import Cart from './../components/Cart';
import axios from 'axios';
import { ApiUrl } from '../config/Config';

export default class Headerbottom extends Component {
    constructor(props){
        super(props)
        this.state={
            models : [],
            suggestions:[],
            text : '',
            totalarray : [],
            id : "",
            category : "",
            subcategory : "",
        }
    }

    onTextChange = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.state.models.sort().filter(v => regex.test(v))
        }
        this.setState(() => ({
            suggestions,
            text: value
        }))
    }

    selectedText=(value)=>{
        var datas = this.state.totalarray.filter(v=> v.modelname == value);
        this.setState(() => ({
            text: value,
            suggestions: [],
            id : datas[0]._id,
            category : datas[0].category_id,
            subcategory : datas[0].subcategory_id,
        }))
        
    }

    renderSuggestions = () => {
        let { suggestions } = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return (
            <div className="autocomplete-items">
                {
                    suggestions.map((item, index) => (<div key={index} onClick={() => this.selectedText(item)}>{item}</div>))
                }
            </div>
        );
    }

    handleSubmit = (e) =>{ 
    e.preventDefault();
        if(this.state._id == "" ){
            alert("Empty Search");
        } else {
            window.location.href="http://localhost:3000/viewproduct/"+this.state.id+"/"+this.state.subcategory+"/"+this.state.category;
        }
    }

    componentDidMount(){
        axios.get(ApiUrl+"/front/api/v1/autocomplete/").then((result)=>{
            let data=[];
            result.data.map((val, key)=>{
                data.push(val.modelname);
                // console.log(val.modelname);
            })
            this.setState({
                models : data,
                totalarray : result.data,
            });
        });
    }

    render() {

        return (
            <div>
            
            <div className="header-bot">
                <div className="container">
                <div className="row header-bot_inner_wthreeinfo_header_mid">
                    {/* logo */}
                    <div className="col-md-3 logo_agile">
                    <h1 className="text-center">
                        <a href="http://localhost:3000/" className="font-weight-bold font-italic">
                        <img src="http://localhost:3000/images/logo2.png" alt=" " className="img-fluid" />Electro Store
                        </a>
                    </h1>
                    </div>
                    {/* //logo */}
                    {/* header-bot */}
                    <div className="col-md-9 header mt-4 mb-md-0 mb-4">
                    <div className="row">
                        {/* search */}
                        <div className="col-10 agileits_search">
                        <form className="form-inline" onSubmit={e=>{this.handleSubmit(e)}}>
                        <div class="autocomplete" >
                            <input className="form-control custom" type="search" onChange={e=>this.onTextChange(e)} value={this.state.text} placeholder="Search" aria-label="Search" required />
                            {this.renderSuggestions()}
                            </div>
                            <button className="btn my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        </div>
                        {/* //search */}
                        {/* cart details */}
                        <div className="col-2 top_nav_right text-center mt-sm-0 mt-2">
                        <div className="wthreecartaits wthreecartaits2 cart cart box_1">
                            <button className="btn w3view-cart" data-toggle="modal" data-target="#exampleModal3" name="submit" value>
                                <i className="fas fa-cart-arrow-down" />
                            </button>
                        </div>
                        </div>
                        {/* //cart details */}
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

        )
    }
}
