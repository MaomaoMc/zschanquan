import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import QueryForm from './QueryForm';
import QueryDlg from './QueryDlg';
import Footer from './Footer';

const tabs = [
    {"text": "商标注册多少钱？"},
    {"text": "商标注册需要多长时间？"},
    {"text": "我的商标与人相同怎么办？"},
    {"text": "注册商标在哪儿申请？当地可以申请吗？"},
    {"text": "注册商标需要哪些资料？"},
    {"text": "很着急，能直接买一个商标吗？"},
    {"text": "商标可以自己注册吗？"},
    {"text": "中文、英文、图形商标有什么区别？"},
    {"text": "商标起名有什么要求吗？"},
    {"text": "注册商标是100%成功吗？"}
]
const benfitItems = [
    {
        img: require("../img/ys_icon.png"),
        title: "品牌树立",
        cont: "区别商品或服务出处，引导消费者认品牌消费的习惯，对于扩大自身产品的商业影响力有至关重要的作用。"
    },
    {
        img: require("../img/ys_icon.png"),
        title: "商品保护",
        cont: "有利于保护公司的无形资产，避免行业内恶性竞争、侵权等对公司形象以及市场有巨大影响的事件发生。"
    },
    {
        img: require("../img/jq_icon.png"),
        title: "商标投资",
        cont: "选择一个具有新颖创意的商标并加以注册，就相当于买下了一份永远升值的股票，具有非常高的经济利益。"
    },
    {
        img: require("../img/jz_icon.png"),
        title: "防止侵权",
        cont: "商标所有权能够保护企业权益不受侵犯。当出现恶意山寨本公司的产品，拥有商标所有权方可以拿起法律武器保护自己权益"
    },
    {
        img: require("../img/gwc_icon.png"),
        title: "入驻电商及网络平台",
        cont: "企业拓展网络营销宣传以及消费市场入驻电商平台的资质要求。"
    },
    {
        img: require("../img/assert_icon.png"),
        title: "无形资产",
        cont: "商标使用时间长后可申请成为驰名商标，形成了无形资产，具有了价值，可作为商品出售或转让"
    },
]
class Main extends Component{
    constructor (props){
        super(props);
        this.state = {
            sub_select: false,
            industry_arr: [],
            name: "",
            industry: "",
            tabIndex: 0,
            benfitIndex: "",
            result_top: 0,  //查询结果的style top
            result_liLen: 9,  //暂时设置为9个 到时候要从接口里获取的
            queryDlgShow: false, //弹窗默认不显示
        }
    }
    queryDlgShow (){
        this.setState({
            queryDlgShow: true
        })
    }
    fetchIndustrys (){
        const self = this;
        axios.post(window.baseUrl + "/api/Center/hangye", qs.stringify({})).then(res=>{
            const data = res.data;
            if(data.code === 1){
                self.setState({
                    industry_arr: data.data
                })
            }
        })
    }
    scrollFun (){
        let index = 0;
        const self = this;
        const height = 30, len = 9,
         result_top = this.state.result_top;
        setInterval(function(){
            if(index === 8){ 
                index = 0;
            }
            let top = 0;
            setInterval(function(){
                if(top == 30){
                    return;
                }else{
                    top = top + 30/30;
                }
                self.setState({
                    result_top: -(index * height + top)
                })
            }, 30);
            self.state.result_top < 0 ? index ++ : index = 0;
        }, 2000)
    }
    componentDidMount (){
        this.fetchIndustrys();
        this.scrollFun();
    }
    render (){
        const self = this,
        sub_select = this.state.sub_select,
        name = this.state.name,
        industry = this.state.industry;
        return <div>
            <div className= "banner">
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
                <div className = "banner_items">
                    <p className = "text_center fz_30">明世-中国专业<span className = "fc_yellow">商标注册</span>服务平台</p>
                    <div className = "notice">
                        <div className = "w_1200">
                            <span className = "f_lt">
                                <i className = "icon notice_icon"></i>
                                <span>领证通知：</span>
                            </span>
                            <marquee direction="left">
                                <span>上海玄远广告有限公司</span>
                                <span>广州佳妍化妆品有限公司</span>
                                <span>山海艺帆企业管理咨询有限公司</span>
                                <span>上海市青浦区迅驰电动车经营部</span>
                                <span>安吉雅松竹木家居商行</span>
                                <span>富威泉时装（深圳）有限公司</span>
                            </marquee>
                        </div>
                    </div>
                    <div className = "cont w_1200">
                        <div className = "querySys f_lt">
                            <div className = "form">
                                <input type="text" placeholder = "请输入商标名称"/>
                                <div className = "mselect">
                                    <div className = "mselectVal">{industry == "" ? "请选择所属行业" : industry}</div>
                                    <span className = "btn_select" onClick = { e=>{
                                        this.setState({
                                            sub_select: !sub_select
                                        })
                                    }}></span>
                                    {sub_select ? <div className = "sub_select">
                                    {
                                        this.state.industry_arr.map(function(item, i){
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
                                <span className = "btn"></span>
                                <p className = "text_center" style = {{fontSize: "16px", lineHeight: "50px"}}>已有<span className = "fc_yellow">32660520</span>人进行查询</p>
                            </div>
                        </div>
                        <div className = "queryResult f_rt">
                            <div className = "wrap" style = {{height: "236px", marginBottom: "24px"}}>
                                <div className = "wrap_bg">
                                    <p className = "tit">最新查询结果</p>
                                    <p style = {{width: "350px", lineHeight: "30px", margin: "0 auto"}}>目前已有<span style = {{color: "#ff6000"}}>6232323</span>次查询</p>
                                    <div>
                                        <ul className = "result" style = {{top: this.state.result_top}}>
                                            <li>1500**7866 氧*派 28类 的通过率为**% </li>
                                            <li>1881**8338 麦*园 32类 的通过率为**% </li>
                                            <li>1381**9654 查询 林*轩 的通过率为**%</li>
                                            <li>1312**3226 良*铺 12类 的通过率为**% </li>
                                            <li>1350**2788 龙*镇 8类 的通过率为**% </li>
                                            <li>1581**3376 玉*川 23类 的通过率为**% </li>
                                            <li>1391**9596 牛*山 36类 的通过率为**% </li>
                                            <li>1343**2744 趣*鼠 18类 的通过率为**% </li>
                                            <li>1851**5186 果*约 42类 的通过率为**% </li>
                                            <li>1500**7866 氧*派 28类 的通过率为**% </li>
                                            <li>1881**8338 麦*园 32类 的通过率为**% </li>
                                            <li>1381**9654 查询 林*轩 的通过率为**%</li>
                                            <li>1312**3226 良*铺 12类 的通过率为**% </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className = "wrap" style = {{height: "266px"}}>
                                <div className = "wrap_bg">
                                    <p className = "tit">常用工具：</p>
                                    <ul className = "items">
                                        <li>
                                            <a onClick = {e => {this.queryDlgShow()}}><i className = "icon sbflb_icon"></i>
                                            <p>商标分类表</p></a>
                                        </li>
                                        <li>
                                            <a onClick = {e => {this.queryDlgShow()}}><i className = "icon zcwts_icon"></i>
                                            <p>注册委托书</p></a>
                                        </li>
                                        <li>
                                            <a onClick = {e => {this.queryDlgShow()}}><i className = "icon sbsqs_icon"></i>
                                            <p>商标申请书</p></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "centerCont">
                <div className = "items_wrap">
                    <div className = "w_1200">
                        <ul className = "items">
                            <li><a onClick = {e => {this.queryDlgShow()}}><i className = "icon gtzc_icon"></i><p>个人/个体注册</p></a></li>
                            <li><a onClick = {e => {this.queryDlgShow()}}><i className = "icon gszc_icon"></i><p>公司/企业注册</p></a></li>
                            <li><a onClick = {e => {this.queryDlgShow()}}><i className = "icon gjzc_icon"></i><p>国际注册</p></a></li>
                            <li><a onClick = {e => {this.queryDlgShow()}}><i className = "icon sbsj_icon"></i><p>商标设计</p></a></li>
                        </ul>
                    </div>
                </div>
                <div className = "trends w_1200">
                    <div className = "f_lt" style = {{width: "20%"}}>
                        <i className = "icon redNotice_icon"></i>
                        <span>名师商标注册成交动态：</span>
                    </div>
                    <ul className = "f_lt">
                        <li>累计成交：772352</li>
                        <li>件上月成交：15187</li>
                        <li>件昨日成交：506</li>
                        <li>件商标注册通过率成交：96.81%</li>
                    </ul>
                </div>
            </div>
            <div className = "registerCal_sys w_1200">
                <div className = "title">
                    <p className = "tit">商标注册<span className = "fc_blue">成功率</span>计算系统</p>
                    <p className = "tip">明世无偿为您提供商标注册流程帮助手册祝您在鱼目混珠的互联网中顺利注册。</p>
                </div>
                <QueryForm />
            </div>
            <div className = "pro_advisor">
                <div className = "w_1200">
                    <p className = "title fz_30 text_center"><span className = "fc_blue">专业顾问</span>为您解答</p>
                    <p className = "tip text_center"><span>商标注册</span><span style = {{marginLeft: "20px"}}>十大问题</span></p>
                    <div className = "cont">
                        <ul className = "tabs f_lt">
                        
                            {
                                tabs.map(function(item, i){
                                    return <li key = {i} className = {i == self.state.tabIndex ? "active" : ""}>
                                        <a onClick = {e => {
                                            self.setState({
                                                tabIndex: i
                                            })
                                        }}>{item.text}</a>
                                    </li>
                                })
                            }
                        </ul>
                        <div className = "items text_center f_rt">
                            <p className = "item_tit">{tabs[this.state.tabIndex].text}</p>
                            <p className = "data_tit">商标注册详细资料百科全书</p>
                            <p className = "fz_30 fc_yellow">《2018商标详细流程及所需资料》</p>
                            <span className = "btn btn_primary down_btn" onClick = {e => {this.queryDlgShow()}}>立即下载</span>
                        </div>
                    </div>
                </div>
            </div>
            <p className = "fz_30 text_center" style = {{color: "black", fontWeight: "800", letterSpacing: "8px", 
              lineHeight: "80px",marginTop: "30px"}}>申请商标的<span className = "fc_blue">好处</span></p>
            <p className = "text_center" style = {{color: "black", fontWeight: 400}}><span>开启企业品牌之路</span><span style = {{marginLeft: "50px"}}>明世助您一臂之力</span></p>
            <div className = "apply_benifit">
                <div className = "w_1200">
                    <div className = "f_lt img_bg"></div>
                    <div className = "items f_rt">
                        <ul>
                            {
                                benfitItems.map(function(item, i){
                                    return <li key = {i}>
                                        <img src = {item.img} alt=""/>
                                        <h2>{item.title}</h2>
                                        <p>{item.cont}</p>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
              
                </div>
            </div>
            <QueryDlg queryDlgShow = {this.state.queryDlgShow} newone = {this.state.newone}/>
            <Footer />
        </div>
    }
}

export default Main;