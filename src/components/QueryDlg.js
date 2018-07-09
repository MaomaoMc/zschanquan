//查询表单
// QueryForm.js
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import QueryForm from './QueryForm';

class QueryDlg extends Component{
    constructor (props){
        super(props);
        this.state = {
            queryDlgShow: this.props.queryDlgShow, 
            closed: false
        }
    }
    componentDidUpdate(nextProps, nextState){
        if(nextProps !== this.props){
            this.setState({
                queryDlgShow: this.props.queryDlgShow
            })
        }
    }
    render (){
        const self = this;
        return <div>
        {this.state.queryDlgShow ? <div><div className = "queryDlg">
            <div className = "f_lt">
                <p className = "fz_30 text_center" style = {{color: "black", fontWeight: 600, marginTop: "55px"}}>商标注册国家制定查询系统</p>
                <QueryForm closed = {this.state.closed} newone = {true}/>
            </div>
            <div className = "f_rt bg"></div>
            <span className = "btn btn_close" onClick = {e => {
                this.setState({
                    queryDlgShow: false,
                    closed: true
                })
            }}>X</span></div><div className = "shadow"></div>
        </div> : null}
        </div>
    }
}
export default QueryDlg;