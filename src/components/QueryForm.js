//查询表单
// QueryForm.js
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

class QueryForm extends Component{
    constructor (props){
        super(props);
        this.state = {
            sub_select: false,  //select的下拉框默认不显示
            
            name: "",
            industry: "",
            phone: "",
            code: "",
            countDown: 60
        }
    }
    changeInpt (e){
        this.setState({
            [e.type]: e.value
        })
    }
    checkMobile (phone){ //手机号码验证
        if(!(/^1[3|4|5|8|9][0-9]\d{4,8}$/.test(phone))){ 
         return false; 
        } else{
          return true;
        }
      }
    resendCode (){  //60s倒计时 重新发送验证码
        let countDown = this.state.countDown;
        let timer;
        const self = this;
        if(countDown !== 0){  //倒计时没结束
                timer = setInterval(
                function () {
                    countDown--;
                    if(countDown === 0){
                        clearInterval(timer);
                    }
                    self.setState({
                        countDown: countDown
                    })
                }
            , 1000)
        }
    }
    handleSendCode (){ //发送验证码
        const phone = this.state.phone;
        if(!this.checkMobile(phone)){
            alert("请输入正确的手机号码");
        }
        const self = this;
        axios.post(window.baseUrl + '/api/Sms/send', qs.stringify({
            mobile: phone,
          })).then(res=>{
            const data = res.data;
            if(data.code === 1){  //发送成功 开始倒计时
                self.setState({
                    countDown: 60
                }, function(){
                    self.resendCode();
                })
                
            }
          })
    }
    submit (){ //点击查询
        const self = this, 
        name = self.state.name,
        industry = self.state.industry,
        phone = self.state.phone,
        code = self.state.code;
        if(name === ""){
            alert("请输入商标名称");
            return;
        }
        if(industry === ""){
            alert("请选择所属行业");
            return;
        }
        if(phone === ""){
            alert("请输入手机号码");
            return;
        }
        if(phone === ""){
            alert("请输入验证码");
            return;
        }
        axios.post(window.baseUrl + '/api/Center/form', qs.stringify({
            name: name,
            industry: industry,
            phone: phone,
            code: code
        })).then(res=>{
            const data = res.data,
            code = data.code;
            if(code !== 1){  //不成功的话就显示错误信息
                alert(data.msg)
            }
        })
    }
    render (){
        const self = this;
        const sub_select = this.state.sub_select;
        const industry = this.state.industry,
         countDown = this.state.countDown;
        return <div className = "from_wrap">
            <p><i className = "icon sbmc_icon"></i><span>商标名称</span></p>
            <input type="text" placeholder = "请输入商标名称" onChange = {e => {
                    this.changeInpt({type: "name", value: e.target.value})
                }}/>
            <p><i className = "icon sshy_icon"></i><span>所属行业</span></p>
            <div className = "mselect">
                <div className = "mselectVal">{industry == "" ? "请选择所属行业" : industry}</div>
                <span className = "btn btn_select" onClick = { e=>{
                    this.setState({
                        sub_select: !sub_select
                    })
                }}>></span>
                {sub_select ? <div className = "sub_select">
                {
                    this.props.industry_arr.map(function(item, i){
                        const title = item.title;
                        return <a key = {i} className = {title === industry ? "active" : ""} onClick = {e => {
                            self.setState({
                                industry: title,
                                sub_select: false
                            })
                        }}>{title}</a>
                    })
                }
                </div> : null}
            </div>
            <p><i className = "icon lxfs_icon"></i><span>联系方式</span><span style = {{color: "red"}}>*</span></p>
            <div className = "tip"><i className = "icon dp_icon" style = {{width: "14px", height: "16px"}}></i><span>信息保护中，请放心填写</span></div>
            <input type="text" placeholder = "请输入手机号码" onChange = {e => {
                    this.changeInpt({type: "phone", value: e.target.value})
                }}/>
            <div style = {{marginTop: "38px"}}>
                <input type = "text" placeholder = "请输入验证码" style = {{width: "215px"}} value = {this.state.code} 
                onChange = {e => {
                    this.changeInpt({type: "code", value: e.target.value})
                }}/>
                {/* <span className = "btn btn_primary getcord_btn f_rt" onClick = {e => {
                    this.sendCode()
                }}>点击获取验证码</span> */}
                <span className={countDown > 0 && countDown < 60 ? "btn btn_default getcord_btn f_rt" : "btn btn_primary getcord_btn f_rt"}
                 onClick = {e => {
                    this.handleSendCode()
                }}>{countDown > 0 && countDown < 60 ? countDown + "s后重新发送" : countDown === 0 ? "重新发送" : "点击获取验证码"}</span>
            </div>
            <span className = "btn btn_primary submit" onClick = {e => {
                this.submit()
            }}>立即查询</span>
        </div>
    }
}
export default QueryForm;