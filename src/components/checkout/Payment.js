import React, { Component } from 'react'
import Special from '../advertisment/Special'

//layouts
import Header from '../../layouts/Header';
import Menu from '../../layouts/Menu';
import Model from '../../layouts/Model';
import Headerbottom from '../../layouts/Headerbottom';
import Mainfooter from '../../layouts/Mainfooter';

export default class Payment extends Component {
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
                    <li>Payment Page</li>
                    </ul>
                </div>
                </div>
            </div>
            {/* //page */}
            {/*-728x90-*/}
            {/* payment page*/}
            <div className="privacy py-sm-5 py-4">
                <div className="container py-xl-4 py-lg-2">
                {/* tittle heading */}
                <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                    <span>P</span>ayment</h3>
                {/* //tittle heading */}
                <div className="checkout-right">
                    {/*Horizontal Tab*/}
                    <div id="parentHorizontalTab">
                    <ul className="resp-tabs-list hor_1">
                        <li>Cash on delivery (COD)</li>
                        <li>Credit/Debit</li>
                        <li>Net Banking</li>
                        <li>Paypal Account</li>
                    </ul>
                    <div className="resp-tabs-container hor_1">
                        <div>
                        <div className="vertical_post check_box_agile">
                            <h5>COD</h5>
                            <div className="checkbox">
                            <div className="check_box_one cashon_delivery">
                                <label className="anim">
                                <input type="checkbox" className="checkbox" />
                                <span> We also accept Credit/Debit card on delivery. Please Check with the agent.</span>
                                </label>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div>
                        <form action="#" method="post" className="creditly-card-form agileinfo_form">
                            <div className="creditly-wrapper wthree, w3_agileits_wrapper">
                            <div className="credit-card-wrapper">
                                <div className="first-row form-group">
                                <div className="controls">
                                    <label className="control-label">Name on Card</label>
                                    <input className="billing-address-name form-control" type="text" name="name" placeholder="John Smith" />
                                </div>
                                <div className="w3_agileits_card_number_grids my-3">
                                    <div className="w3_agileits_card_number_grid_left">
                                    <div className="controls">
                                        <label className="control-label">Card Number</label>
                                        <input className="number credit-card-number form-control" type="text" name="number" inputMode="numeric" autoComplete="cc-number" autocompletetype="cc-number" x-autocompletetype="cc-number" placeholder="•••• •••• •••• ••••" />
                                    </div>
                                    </div>
                                    <div className="w3_agileits_card_number_grid_right mt-2">
                                    <div className="controls">
                                        <label className="control-label">CVV</label>
                                        <input className="security-code form-control" Â· inputMode="numeric" type="text" name="security-code" placeholder="•••" />
                                    </div>
                                    </div>
                                    <div className="clear"> </div>
                                </div>
                                <div className="controls">
                                    <label className="control-label">Expiration Date</label>
                                    <input className="expiration-month-and-year form-control" type="text" name="expiration-month-and-year" placeholder="MM / YY" />
                                </div>
                                </div>
                                <button className="submit mt-3">
                                <span>Make a payment </span>
                                </button>
                            </div>
                            </div>
                        </form>
                        </div>
                        <div>
                        <div className="vertical_post">
                            <form action="#" method="post">
                            <h5>Select From Popular Banks</h5>
                            <div className="swit-radio">
                                <div className="check_box_one">
                                <div className="radio_one">
                                    <label>
                                    <input type="radio" name="radio" defaultChecked />
                                    <i />Syndicate Bank</label>
                                </div>
                                </div>
                                <div className="check_box_one">
                                <div className="radio_one">
                                    <label>
                                    <input type="radio" name="radio" />
                                    <i />Bank of Baroda</label>
                                </div>
                                </div>
                                <div className="check_box_one">
                                <div className="radio_one">
                                    <label>
                                    <input type="radio" name="radio" />
                                    <i />Canara Bank</label>
                                </div>
                                </div>
                                <div className="check_box_one">
                                <div className="radio_one">
                                    <label>
                                    <input type="radio" name="radio" />
                                    <i />ICICI Bank</label>
                                </div>
                                </div>
                                <div className="check_box_one">
                                <div className="radio_one">
                                    <label>
                                    <input type="radio" name="radio" />
                                    <i />State Bank Of India</label>
                                </div>
                                </div>
                                <div className="clearfix" />
                            </div>
                            <h5>Or Select Other Bank</h5>
                            <div className="section_room_pay">
                                <select className="year">
                                <option value>=== Other Banks ===</option>
                                <option value="ALB-NA">Allahabad Bank NetBanking</option>
                                <option value="ADB-NA">Andhra Bank</option>
                                <option value="BBK-NA">Bank of Bahrain and Kuwait NetBanking</option>
                                <option value="BBC-NA">Bank of Baroda Corporate NetBanking</option>
                                <option value="BBR-NA">Bank of Baroda Retail NetBanking</option>
                                <option value="BOI-NA">Bank of India NetBanking</option>
                                <option value="BOM-NA">Bank of Maharashtra NetBanking</option>
                                <option value="CSB-NA">Catholic Syrian Bank NetBanking</option>
                                <option value="CBI-NA">Central Bank of India</option>
                                <option value="CUB-NA">City Union Bank NetBanking</option>
                                <option value="CRP-NA">Corporation Bank</option>
                                <option value="DBK-NA">Deutsche Bank NetBanking</option>
                                <option value="DCB-NA">Development Credit Bank</option>
                                <option value="DC2-NA">Development Credit Bank - Corporate</option>
                                <option value="DLB-NA">Dhanlaxmi Bank NetBanking</option>
                                <option value="FBK-NA">Federal Bank NetBanking</option>
                                <option value="IDS-NA">Indusind Bank NetBanking</option>
                                <option value="IOB-NA">Indian Overseas Bank</option>
                                <option value="ING-NA">ING Vysya Bank (now Kotak)</option>
                                <option value="JKB-NA">Jammu and Kashmir NetBanking</option>
                                <option value="JSB-NA">Janata Sahakari Bank Limited</option>
                                <option value="KBL-NA">Karnataka Bank NetBanking</option>
                                <option value="KVB-NA">Karur Vysya Bank NetBanking</option>
                                <option value="LVR-NA">Lakshmi Vilas Bank NetBanking</option>
                                <option value="OBC-NA">Oriental Bank of Commerce NetBanking</option>
                                <option value="CPN-NA">PNB Corporate NetBanking</option>
                                <option value="PNB-NA">PNB NetBanking</option>
                                <option value="RSD-DIRECT">Rajasthan State Co-operative Bank-Debit Card</option>
                                <option value="RBS-NA">RBS (The Royal Bank of Scotland)</option>
                                <option value="SWB-NA">Saraswat Bank NetBanking</option>
                                <option value="SBJ-NA">SB Bikaner and Jaipur NetBanking</option>
                                <option value="SBH-NA">SB Hyderabad NetBanking</option>
                                <option value="SBM-NA">SB Mysore NetBanking</option>
                                <option value="SBT-NA">SB Travancore NetBanking</option>
                                <option value="SVC-NA">Shamrao Vitthal Co-operative Bank</option>
                                <option value="SIB-NA">South Indian Bank NetBanking</option>
                                <option value="SBP-NA">State Bank of Patiala NetBanking</option>
                                <option value="SYD-NA">Syndicate Bank NetBanking</option>
                                <option value="TNC-NA">Tamil Nadu State Co-operative Bank NetBanking</option>
                                <option value="UCO-NA">UCO Bank NetBanking</option>
                                <option value="UBI-NA">Union Bank NetBanking</option>
                                <option value="UNI-NA">United Bank of India NetBanking</option>
                                <option value="VJB-NA">Vijaya Bank NetBanking</option>
                                </select>
                            </div>
                            <input type="submit" value="PAY NOW" />
                            </form>
                        </div>
                        </div>
                        <div>
                        <div id="tab4" className="tab-grid" style={{display: 'block'}}>
                            <div className="row">
                            <div className="col-md-6 pay-forms">
                                <img className="pp-img" src="images/paypal.png" alt="Image Alternative text" title="Image Title" />
                                <p>Important: You will be redirected to PayPal's website to securely complete your payment.</p>
                                <a className="btn btn-primary">Checkout via Paypal</a>
                            </div>
                            <div className="col-md-6 number-paymk">
                                <form action="#" method="post" className="creditly-card-form-2 shopf-sear-headinfo_form">
                                <section className="creditly-wrapper payf_wrapper">
                                    <div className="credit-card-wrapper">
                                    <div className="first-row form-group">
                                        <div className="controls">
                                        <label className="control-label">Card Holder </label>
                                        <input className="billing-address-name form-control" type="text" name="name" placeholder="John Smith" />
                                        </div>
                                        <div className="paymntf_card_number_grids my-2">
                                        <div className="fpay_card_number_grid_left">
                                            <div className="controls">
                                            <label className="control-label">Card Number</label>
                                            <input className="number credit-card-number-2 form-control" type="text" name="number" inputMode="numeric" autoComplete="cc-number" autocompletetype="cc-number" x-autocompletetype="cc-number" placeholder="•••• •••• •••• ••••" />
                                            </div>
                                        </div>
                                        <div className="fpay_card_number_grid_right mt-2">
                                            <div className="controls">
                                            <label className="control-label">CVV</label>
                                            <input className="security-code-2 form-control" Â· inputMode="numeric" type="text" name="security-code" placeholder="•••" />
                                            </div>
                                        </div>
                                        <div className="clear"> </div>
                                        </div>
                                        <div className="controls">
                                        <label className="control-label">Valid Thru</label>
                                        <input className="expiration-month-and-year-2 form-control" type="text" name="expiration-month-and-year" placeholder="MM / YY" />
                                        </div>
                                    </div>
                                    <input className="submit" type="submit" value="Proceed Payment" />
                                    </div>
                                </section>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/*Plug-in Initialisation*/}
                </div>
                </div>
            </div>
            <Special />
            <Mainfooter />
            </div>

        )
    }
}
