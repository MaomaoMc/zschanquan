import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import Header from '../Header';

class Main extends Component {
    render (){
       return <div>
           <Header />
           <div className = "inter_banner"></div>
           <div className = "w_1200"></div>
       </div>
    }
}
export default Main;