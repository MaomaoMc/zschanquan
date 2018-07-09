import React, {Component} from 'react';

class Header extends Component{
    constructor (props){
        super(props);
        this.state = {
            queryDlgShow: false
        }
    }
    render (){
        return <div className = "header">
            <div className="head">
                <div className = "w_1200">
                    <i className = "icon logo f_lt"></i>
                    <div className = "f_rt">
                        <i className = "icon phone_icon f_lt"></i>
                        <div className = "f_lt">
                            <p style = {{fontSize: "14px"}}>24小时免费服务热线</p>
                            <p style = {{fontSize: "18px"}}>400-100-9050</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Header;