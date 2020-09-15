import React, { Component } from 'react'
import Special from '../advertisment/Special'


//layouts
import Header from '../../layouts/Header';
import Menu from '../../layouts/Menu';
import Model from '../../layouts/Model';
import Headerbottom from '../../layouts/Headerbottom';
import Mainfooter from '../../layouts/Mainfooter';



export default class Help extends Component {
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
                    <a href="index.html">Home</a>
                    <i>|</i>
                </li>
                <li>Help</li>
                </ul>
            </div>
            </div>
        </div>
        {/* //page */}
        {/*-728x90-*/}
        {/* help */}
        <div className="faqs-w3l py-sm-5 py-4">
            <div className="container py-xl-4 py-lg-2">
            {/* tittle heading */}
            <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                <span>H</span>elp
                <span>P</span>age
            </h3>
            {/* //tittle heading */}
            {/* help content */}
            <div className="wthree-help mb-sm-5 mb-4">
                <div className="agile-left-help">
                <h3 className="w3-head">How Can We help you</h3>
                <form action="#" method="get">
                    <textarea placeholder="Your Query" name="Message" required value={""} />
                    <input type="submit" value="Submit" />
                </form>
                <h5 className="my-sm-4 my-3">OR</h5>
                <a href="http://localhost:3000/contact">Contact Us</a>
                </div>
            </div>
            {/* //help content */}
            {/* Faqs */}
            <h3 className="w3-head mb-2">Top 10 Frequently asked questions</h3>
            <div className="faq-w3agile">
                <ul className="faq pl-4">
                <li className="item1 mt-3 pl-2">
                    <a href="#" title="click here">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor vehicula ipsum nec ?</a>
                    <ul>
                    <li className="subitem1">
                        <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                        corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    </li>
                    </ul>
                </li>
                <li className="item2 mt-3 pl-2">
                    <a href="#" title="click here">The standard Lorem Ipsum passage Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices ?
                    </a>
                    <ul>
                    <li className="subitem1">
                        <p> Tincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus
                        qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident.</p>
                    </li>
                    </ul>
                </li>
                <li className="item3 mt-3 pl-2">
                    <a href="#" title="click here">Consectetuer adipiscing elit Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices?</a>
                    <ul>
                    <li className="subitem1">
                        <p>Dincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus
                        qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident.</p>
                    </li>
                    </ul>
                </li>
                <li className="item4 mt-3 pl-2">
                    <a href="#" title="click here">Sed diam nonummy nibh euismod Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices?</a>
                    <ul>
                    <li className="subitem1">
                        <p>At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    </li>
                    </ul>
                </li>
                <li className="item5 mt-3 pl-2">
                    <a href="#" title="click here">Euismod tincidunt laoreet Etiam faucibus viverra libero vel efficitur ?</a>
                    <ul>
                    <li className="subitem1">
                        <p>At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    </li>
                    </ul>
                </li>
                <li className="item6 mt-3 pl-2">
                    <a href="#" title="click here">Voluptas sit aspernatur aut Ut semper nisl ut laoreet ultrices ?</a>
                    <ul>
                    <li className="subitem1">
                        <p>At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    </li>
                    </ul>
                </li>
                <li className="item7 mt-3 pl-2">
                    <a href="#" title="click here">Donec ut quam ligula feugiat Ut semper nisl ut laoreet ultrices ?</a>
                    <ul>
                    <li className="subitem1">
                        <p>At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    </li>
                    </ul>
                </li>
                <li className="item8 mt-3 pl-2">
                    <a href="#" title="click here">The standard Lorem Ipsum Ut semper nisl ut laoreet ultrices passage ?</a>
                    <ul>
                    <li className="subitem1">
                        <p>Lorem ipsum dolor sit amet At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus
                        qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident.</p>
                    </li>
                    </ul>
                </li>
                <li className="item9 mt-3 pl-2">
                    <a href="#" title="click here">Consectetuer adipiscing Ut semper nisl ut laoreet ultrices elit ?</a>
                    <ul>
                    <li className="subitem1">
                        <p>Lorem ipsum dolor sit amet At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus
                        qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident.</p>
                    </li>
                    </ul>
                </li>
                <li className="item10 mt-3 pl-2">
                    <a href="#" title="click here">Sed diam nonummy Ut semper nisl ut laoreet ultrices nibh euismod ?</a>
                    <ul>
                    <li className="subitem1">
                        <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                        et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    </li>
                    </ul>
                </li>
                </ul>
            </div>
            {/* //Faqs */}
            </div>
        </div>
        <Special />
    <Mainfooter />
        </div>

        )
    }
}
