import React, { Component } from 'react';
import Bestseller from './Bestseller';

export default class Otherfilter extends Component {
    constructor(props){
        super(props);
        this.state={
            price : "0-100000",
            offer : "0-100",
            star : '',
            array : [],
            five : 0,
            ten : 0,
            twenty : 0,
            thirty : 0,
            fifty :0 ,
            sixty :0,
        }
    }

    pricechange =(e,val) =>{
        this.setState({
            price : val
        });
       
        const data = {
             price : val,
             offer : this.state.offer,
        }
        this.props.filter(data);
    }

    offerchange = (e,val)=>{
        if(e.target.value == 0){
            const pusharray = this.state.array;
            pusharray.push(val);
            this.setState({
                [e.target.name] : 1,
                array : pusharray,
            });
            const filteroff = (pusharray.length !=0 && Math.min(...pusharray) !="" ? Math.min(...pusharray) : "0") +"-"+ (pusharray.length !=0 && Math.max(...pusharray) !="" ? Math.max(...pusharray) : "100");
            const data = {
                price : this.state.price,
                offer : filteroff,
           }
           this.props.filter(data);

        } else if(e.target.value == 1) {
            const pusharray = this.state.array;
            const toromove = val;
            const tasks = pusharray.filter(x => x !== val);
            const filteroff = (tasks.length !=0 && Math.min(...tasks) !="" ? Math.min(...tasks) : "0") +"-"+ (tasks.length !=0 && Math.max(...tasks) !="" ? Math.max(...tasks) : "100");
            this.setState({
                [e.target.name] : 0,
                array : tasks,
            });
            const data = {
                price : this.state.price,
                offer : filteroff,
           }
           this.props.filter(data);
        }

    }

    componentDidMount(){

    }
    render() {
        return (
          <>
            {/* product right */}
            <div className="col-lg-3 mt-lg-0 mt-4 p-lg-0">
                <div className="side-bar p-sm-4 p-3">
                <div className="search-hotel border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Search Here..</h3>
                    <form action="#" method="post">
                    <input type="search" placeholder="Product name..." name="search" required />
                    <input type="submit" value="" />
                    </form>
                </div>
                {/* price */}
                <div className="range border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Price</h3>
                    <div className="w3l-range">
                    <ul>
                        <li>
                        <a href="javascript:void(0)" onClick={e=>{this.pricechange(e,"0-1000")}} >Under ₹1,000</a>
                        </li>
                        <li className="my-1">
                        <a href="javascript:void(0)" onClick={e=>{this.pricechange(e,"1000-5000")}} >₹1,000 - ₹5,000</a>
                        </li>
                        <li>
                        <a href="javascript:void(0)" onClick={e=>{this.pricechange(e,"5000-10000")}} >₹5,000 - ₹10,000</a>
                        </li>
                        <li className="my-1">
                        <a href="javascript:void(0)" onClick={e=>{this.pricechange(e,"10000-20000")}} >₹10,000 - ₹20,000</a>
                        </li>
                        <li>
                        <a href="javascript:void(0)" onClick={e=>{this.pricechange(e,"20000-30000")}} >₹20,000 ₹30,000</a>
                        </li>
                        <li className="mt-1">
                        <a href="javascript:void(0)" onClick={e=>{this.pricechange(e,"30000-100000")}} >Over ₹30,000</a>
                        </li>
                    </ul>
                    </div>
                </div>
                {/* //price */}
                {/* discounts */}
                <div className="left-side border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Discount</h3>
                    <ul>
                    <li>
                        <input type="checkbox" className="checked" name="five" value={this.state.five} onClick={e=>{this.offerchange(e,5)}} />
                        <span className="span">5% or More</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked" name="ten" value={this.state.ten} onClick={e=>{this.offerchange(e,10)}} />
                        <span className="span">10% or More</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked" name="twenty" value={this.state.twenty} onClick={e=>{this.offerchange(e,20)}} />
                        <span className="span">20% or More</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked" name="thirty" value={this.state.thirty} onClick={e=>{this.offerchange(e,30)}} />
                        <span className="span">30% or More</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked" name="fifty" value={this.state.fifty} onClick={e=>{this.offerchange(e,50)}} />
                        <span className="span">50% or More</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked" name="sixty" value={this.state.sixty} onClick={e=>{this.offerchange(e,60)}} />
                        <span className="span">60% or More</span>
                    </li>
                    </ul>
                </div>
                {/* //discounts */}
                {/* reviews */}
                <div className="customer-rev border-bottom left-side py-2">
                    <h3 className="agileits-sear-head mb-3">Customer Review</h3>
                    <ul>
                    <li>
                        <a href="javascript:void(0)">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <span>5.0</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <span>4.0</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half" />
                        <span>3.5</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <span>3.0</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half" />
                        <span>2.5</span>
                        </a>
                    </li>
                    </ul>
                </div>

                {/* //reviews */}
                {/* electronics */}


                {/* <div className="left-side border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Electronics</h3>
                    <ul>
                    <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Accessories</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Cameras &amp; Photography</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Car &amp; Vehicle Electronics</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Computers &amp; Accessories</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">GPS &amp; Accessories</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Headphones</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Home Audio</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Home Theater, TV &amp; Video</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Mobiles &amp; Accessories</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Portable Media Players</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Tablets</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Telephones &amp; Accessories</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Wearable Technology</span>
                    </li>
                    </ul>
                </div> */}

                {/* //electronics */}
                {/* delivery */}


                {/* <div className="left-side border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">Cash On Delivery</h3>
                    <ul>
                    <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Eligible for Cash On Delivery</span>
                    </li>
                    </ul>
                </div> */}


                {/* //delivery */}
                {/* arrivals */}


                {/* <div className="left-side border-bottom py-2">
                    <h3 className="agileits-sear-head mb-3">New Arrivals</h3>
                    <ul>
                    <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Last 30 days</span>
                    </li>
                    <li>
                        <input type="checkbox" className="checked" />
                        <span className="span">Last 90 days</span>
                    </li>
                    </ul>
                </div> */}


                {/* //arrivals */}
                {/* best seller */}
                
                <Bestseller />
                
                {/* //best seller */}
                </div>
                {/* //product right */}
            </div>
            </>

        

        )
    }
}
