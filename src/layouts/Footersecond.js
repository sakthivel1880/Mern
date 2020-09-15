import React, { Component } from 'react'
import axios from 'axios';
import { ApiUrl } from '../config/Config';

export default class Footersecond extends Component {
    constructor(props){
        super(props);
        this.state={
            subcategory :[],
        }
    }
    subcategoryselect = () =>{
        axios.get(ApiUrl+"/front/api/v1/subcategories/").then((result)=>{
            this.setState({
                subcategory : result.data,
            });
        });
    }

    componentDidMount(){
        this.subcategoryselect();
     }

     
    render() {
        const electricalsleft= this.state.subcategory.map((val,index) =>
        (val.category_id === "5f3bf35517bba5eeca778a95" ?  <li className="m-sm-1">
        <a href={"http://localhost:3000/products/"+val._id+"/"+val.subcategory+"/Electronics"} className="border-right pr-2">{val.subcategory}</a>
    </li> :"")
           )

           const homeleft= this.state.subcategory.map((val,index) =>
           (val.category_id === "5ebf85fd5329d328ac47af21" ? <li className="m-sm-1">
           <a href={"http://localhost:3000/products/"+val._id+"/"+val.subcategory+"/Home Appliances"} className="border-right pr-2">{val.subcategory}</a>
       </li> :"")
              )

              
        return (
           <div>
            <div className="agile-sometext py-md-5 py-sm-4 py-3">
                <div className="container">
                {/* brands */}
                <div className="sub-some">
                    <h5 className="font-weight-bold mb-2">Electronics :</h5>
                    <ul>
                   {electricalsleft}
                    </ul>
                </div>
                <div className="sub-some mt-4">
                    <h5 className="font-weight-bold mb-2">Home Appliances :</h5>
                    <ul>
                   {homeleft}
                    </ul>
                </div>
                {/* //brands */}
                {/* payment */}
                <div className="sub-some child-momu mt-4">
                    <h5 className="font-weight-bold mb-3">Payment Method</h5>
                    <ul>
                    <li>
                        <img src="http://localhost:3000/images/pay2.png" alt />
                    </li>
                    <li>
                        <img src="http://localhost:3000/images/pay5.png" alt />
                    </li>
                    <li>
                        <img src="http://localhost:3000/images/pay1.png" alt />
                    </li>
                    <li>
                        <img src="http://localhost:3000/images/pay4.png" alt />
                    </li>
                    <li>
                        <img src="http://localhost:3000/images/pay6.png" alt />
                    </li>
                    <li>
                        <img src="http://localhost:3000/images/pay3.png" alt />
                    </li>
                    <li>
                        <img src="http://localhost:3000/images/pay7.png" alt />
                    </li>
                    <li>
                        <img src="http://localhost:3000/images/pay8.png" alt />
                    </li>
                    <li>
                        <img src="http://localhost:3000/images/pay9.png" alt />
                    </li>
                    </ul>
                </div>
                {/* //payment */}
                </div>
            </div>
            </div>

        )
    }
}
