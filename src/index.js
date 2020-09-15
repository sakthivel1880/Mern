import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//component
import Index from './components/Index';
import Single from './components/singlepage/Single';
import Product from './components/productpage/Product';
import Newarrival from './components/productpage/Newarrival';
import Category from './components/productpage/Category';
import Help from './components/sitedetails/Help';
import Privacy from './components/sitedetails/Privacy';
import Terms from './components/sitedetails/Terms';
import Aboutus from './components/sitedetails/Aboutus';
import Contactus from './components/sitedetails/Contactus';
import Checkout from './components/checkout/Checkout';
import Payment from './components/checkout/Payment';
import Whishlist from './components/checkout/Whishlist';
import Profile from './components/profile/Profile'



ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    
    <Router>
      <Switch>
            <Route exact path='/' component={Index}></Route>
            <Route exact path='/viewproduct/:id/:subcategory/:category' component={Single}></Route>
            <Route exact path='/products/:id/:subcategory/:category' component={Product}></Route>
            <Route exact path='/category/:id/:category' component={Category}></Route>
            <Route exact path='/newarrival' component={Newarrival}></Route>
            <Route exact path='/about' component={Aboutus}></Route>
            <Route exact path='/contact' component={Contactus}></Route>
            <Route exact path='/terms' component={Terms}></Route>
            <Route exact path='/privacy' component={Privacy}></Route>
            <Route exact path='/help' component={Help}></Route>
            <Route exact path='/payment' component={Payment}></Route>
            <Route exact path='/checkout' component={Checkout}></Route>
            <Route exact path='/whishlist' component={Whishlist}></Route>
            <Route exact path='/profile' component={Profile}></Route>
      </Switch>
    </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
