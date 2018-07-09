import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import QueryDlg from './QueryDlg';

const yphone_icon = require('../img/yphone_icon.png');
const phone_icon = require('../img/phone.png');
const down_icon = require('../img/down_icon.png');
class Footer extends Component{
    constructor (props){
        super(props);
        this.state = {
            queryDlgShow: false
        }
    }
    render (){
        return <div className = "footer">
            <div className = "w_1200">
                <img className = "f_lt" src={yphone_icon} alt="" style = {{verticalAlign: "middle"}}/>
                <div className = "f_lt">
                    <p style = {{fontSize: "14px"}}>全国统一免费服务热线</p>
                    <p style = {{fontSize: "18px"}}>400-110-9095</p>
                </div>
                <div style = {{display: "inline-block", width: "315px", marginLeft: "160px"}}>
                    <img src={down_icon} alt="" style = {{verticalAlign: "bottom"}}/>
                    <span className = "fc_blue" style = {{fontSize: "20px"}}>《商标注册全流程及所需资料》</span>
                </div>
                <div className = "f_rt" style = {{width: "428px", height: "48px"}}>
                    <span className = "input_wrap">
                        <i className = "icon"></i>
                        <input className = "f_lt" type="text" placeholder = "请输入手机号码"/>
                    </span>
                    <span className = "f_lt" className = "btn" onClick = { e=> {
                        this.setState({
                            queryDlgShow: true
                        })
                    }}>点击免费通话</span>
                </div>
            </div>
            <QueryDlg queryDlgShow = {this.state.queryDlgShow} newone = {this.state.newone}/>
        </div>
    }
}

export default Footer;