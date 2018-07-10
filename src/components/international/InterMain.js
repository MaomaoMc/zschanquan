import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import Header from '../Header';

const countries = [
    {
        'text': "热门国家/地区",
        'countries': [
            {
                'text': '欧盟',
                'msg': '<p>回执时间：1周</p><p>下证时间：6-8个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry03.png')
            },
            {
                'text': '美国',
                'msg': '<p>回执时间：1周</p><p>下证时间：12-18个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry01.png')
            },
            {
                'text': '日本',
                'msg': '<p>回执时间：1周</p><p>下证时间：6个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry05.png')
            },
            {
                'text': '韩国',
                'msg': '<p>回执时间：2-3周</p><p>下证时间：10-12个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry06.png')
            },
            {
                'text': '澳大利亚',
                'msg': '<p>回执时间：2-3周</p><p>下证时间：8-13个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry20.png')
            },
            {
                'text': '德国',
                'msg': '<p>回执时间：2-3周</p><p>下证时间：8-13个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry10.png')
            },
            {
                'text': '法国',
                'msg': '<p>回执时间：2-3周</p><p>下证时间：4-6个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry08.png')
            },
            {
                'text': '英国',
                'msg': '<p>回执时间：1-2周</p><p>下证时间：4-6个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry07.png')
            },
            {
                'text': '加拿大',
                'msg': '<p>回执时间：1-2周</p><p>下证时间：12个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry21.png')
            },
            {
                'text': '马德里',
                'msg': '<p>回执时间：1-2周</p><p>下证时间：6-12个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry49.png')
            },
        ]
    },
    {
        'text': '亚洲',
        'countries': [
            {
                'text': '日本',
                'msg': '<p>回执时间：1周</p><p>下证时间：6个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry05.png')
            },
            {
                'text': '韩国',
                'msg': '<p>回执时间：2-3周</p><p>下证时间：10-12个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry09.png')
            },
            {
                'text': '印度',
                'msg': '<p>回执时间：4-5周</p><p>下证时间：24个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry11.png')
            },
            {
                'text': '澳门',
                'msg': '<p>回执时间：4周</p><p>下证时间：10个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry49.png')
            },
            {
                'text': '香港',
                'msg': '<p>回执时间：1-2周</p><p>下证时间：6-8个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry04.png')
            },
            {
                'text': '台湾',
                'msg': '<p>回执时间：1-2周</p><p>下证时间：7-10个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry12.png')
            },
            {
                'text': '新加坡',
                'msg': '<p>回执时间：2-3周</p><p>下证时间：5-8个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry13.png')
            },
            {
                'text': '马来西亚',
                'msg': '<p>回执时间：3周</p><p>下证时间：18个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry14.png')
            },
            {
                'text': '泰国',
                'msg': '<p>回执时间：3-4周</p><p>下证时间：12-15个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry16.png')
            },
            {
                'text': '阿联酋',
                'msg': '<p>回执时间：3-4周</p><p>下证时间：10-12个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry17.png')
            }
        ]
    },
    {
        'text': '欧洲',
        'countries': [
            {
                'text': '欧盟',
                'msg': '<p>回执时间：1周</p><p>下证时间：6-8个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry03.png')
            },
            {
                'text': '英国',
                'msg': '<p>回执时间：1-2周</p><p>下证时间：4-6个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry07.png')
            },
            {
                'text': '法国',
                'msg': '<p>回执时间：2-3周</p><p>下证时间：4-6个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry08.png')
            },
            {
                'text': '德国',
                'msg': '<p>回执时间：2-3周</p><p>下证时间：8-13个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry10.png')
            },
            {
                'text': '意大利',
                'msg': '<p>回执时间：3-4周</p><p>下证时间：12-24个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry17.png')
            },
            {
                'text': '俄罗斯',
                'msg': '<p>回执时间：4周</p><p>下证时间：12-15个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry18.png')
            },
            {
                'text': '比荷卢',
                'msg': '<p>回执时间：4-6周</p><p>下证时间：6-12个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry19.png')
            },
            {
                'text': '希腊',
                'msg': '<p>回执时间：3-4周</p><p>下证时间：6-9个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry49.png')
            },
            {
                'text': '荷兰',
                'msg': '<p>回执时间：4-6周</p><p>下证时间：6-12个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry52.png')
            },
            {
                'text': '瑞士',
                'msg': '<p>回执时间：4-6周</p><p>下证时间：8-10个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry51.png')
            }
        ]
    },
    {
        'text': '美洲',
        'countries': [
            {
                'text': '美国',
                'msg': '<p>回执时间：1周</p><p>下证时间：12-18个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry01.png')
            },
            {
                'text': '加拿大',
                'msg': '<p>回执时间：1-2周</p><p>下证时间：12个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry21.png')
            },
            {
                'text': '巴西',
                'msg': '<p>回执时间：3周</p><p>下证时间：36-48个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry22.png')
            },
            {
                'text': '墨西哥',
                'msg': '<p>回执时间：3-4周</p><p>下证时间：10-12个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry23.png')
            },
            {
                'text': '乌拉圭',
                'msg': '<p>回执时间：3-4周</p><p>下证时间：18-24个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry24.png')
            },
            {
                'text': '巴拉圭',
                'msg': '<p>回执时间：2-3周</p><p>下证时间：8-12个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry25.png')
            },
            {
                'text': '委内瑞拉',
                'msg': '<p>回执时间：1周</p><p>下证时间：12-24个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry26.png')
            },
            {
                'text': '秘鲁',
                'msg': '<p>回执时间：3-4周</p><p>下证时间：8-12个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry27.png')
            },
            {
                'text': '古巴',
                'msg': '<p>回执时间：1-2周</p><p>下证时间：18-24个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry28.png')
            },
            {
                'text': '阿根廷',
                'msg': '<p>回执时间：3-4周</p><p>下证时间：10-18个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry29.png')
            }
        ]
    },
    {
        'text': '非洲',
        'countries': [
            {
                'text': '南非',
                'msg': '<p>回执时间：4周</p><p>下证时间：15-30个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry30.png')
            },
            {
                'text': '埃及',
                'msg': '<p>回执时间：1-2周</p><p>下证时间：24-36个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry31.png')
            },
            {
                'text': '尼日利亚',
                'msg': '<p>回执时间：4周</p><p>下证时间：24个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry32.png')
            },
            {
                'text': '利比亚',
                'msg': '<p>回执时间：4-8周</p><p>下证时间：5-8个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry33.png')
            },
            {
                'text': '安哥拉',
                'msg': '<p>回执时间：4-8周</p><p>下证时间：12-14个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry34.png')
            },
            {
                'text': '加纳',
                'msg': '<p>回执时间：4-8周</p><p>下证时间：18-24个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry35.png')
            },
            {
                'text': '埃塞俄比亚',
                'msg': '<p>回执时间：4-12周</p><p>下证时间：8-12个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry36.png')
            },
            {
                'text': '津巴布韦',
                'msg': '<p>回执时间：4周</p><p>下证时间：6-12个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry37.png')
            },
            {
                'text': '马达加斯加',
                'msg': '<p>回执时间：4-8周</p><p>下证时间：18-24个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry38.png')
            },
            {
                'text': '卢旺达',
                'msg': '<p>回执时间：4-8周</p><p>下证时间：10-18个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry39.png')
            }
        ]
    },
    {
        'text': '大洋洲',
        'countries': [
            {
                'text': '澳大利亚',
                'msg': '<p>回执时间：2-3周</p><p>下证时间：8-13个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry20.png')
            },
            {
                'text': '新西兰',
                'msg': '<p>回执时间：2-3周</p><p>下证时间：5-8个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry40.png')
            },
            {
                'text': '斐济',
                'msg': '<p>回执时间：2-4周</p><p>下证时间：8-10个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry41.png')
            },
            {
                'text': '基里巴斯',
                'msg': '<p>回执时间：2-4周</p><p>下证时间：8-10个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry42.png')
            },
            {
                'text': '萨摩亚',
                'msg': '<p>回执时间：2-4周</p><p>下证时间：8-10个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry43.png')
            },
            {
                'text': '所罗门群岛',
                'msg': '<p>回执时间：2-4周</p><p>下证时间：8-10个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry44.png')
            },
            {
                'text': '图瓦卢',
                'msg': '<p>回执时间：2-4周</p><p>下证时间：8-10个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry45.png')
            },
            {
                'text': '瑙鲁',
                'msg': '<p>回执时间：2-4周</p><p>下证时间：8-10个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry46.png')
            },
            {
                'text': '汤加',
                'msg': '<p>回执时间：2-4周</p><p>下证时间：8-10个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry47.png')
            },
            {
                'text': '巴布亚新几内亚',
                'msg': '<p>回执时间：2-4周</p><p>下证时间：8-10个月</p><p>有效期：10年</p>',
                'img': require('../../img/img_contry48.png')
            }
        ]
    }
]
class InterMain extends Component {
    constructor (props){
        super(props);
        this.state = {
            tabIndex: 0,
            country_index: ""
        }
    }
    render (){
        const self = this, 
            tabIndex = self.state.tabIndex,
            country_index = this.state.country_index;
       return <div>
           <Header />
           <div className = "inter_banner">
             <div className = "w_1200">
                <div className = "register_form f_lt"></div>
                <div className = "f_rt"></div>
             </div>
           </div>
           <div className = "coor_contouries">
                <div className = "w_1200">
                    <p className = "title text_center">200+国家/地区拥有长期、稳定、专业的合作律师</p>
                    <ul className = "tabs">
                        {
                            countries.map(function(item, i){
                                return <li key = {i} className = {tabIndex === i ? "active" : ""} style = {{width: (1/countries.length * 100) + "%"}}>
                                    <a className = "text_center" onClick = {e => {
                                        self.setState({
                                            tabIndex: i,
                                            country_index: ""
                                        })
                                    }}>{item.text}</a></li>
                            })
                        }
                    </ul>
                    <ul className = "countryItems">
                        {
                            countries[tabIndex].countries.map(function(item, i){
                                return <li key = {i} className = {tabIndex === i ? "active" : ""}
                                 style = {{backgroundImage: "url(" + item.img + ")"}} onMouseEnter = {e => {
                                     self.setState({
                                        country_index: i
                                     })
                                 }}>
                                        <i className = "icon"></i>
                                        {country_index === i ? <div className = "info">
                                            <div dangerouslySetInnerHTML = {{__html: item.msg}}></div>
                                            <a>点击询价</a>
                                        </div> : null}
                                    </li>
                            })
                        }
                    </ul>
                </div>
           </div>
       </div>
    }
}
export default InterMain;