import React, { Component } from 'react';
import AppScroll from '../../../components/app-scroll/AppScroll'
import './style.scss'

class Mine extends Component {
    state = {
        mineNavList : [
            {id: 1, icon: 'iconduihua', name: '消息', arrow: 'iconjiantou1', path: ''},
            {id: 2, icon: 'iconstar', name: '收藏', arrow: 'iconjiantou1', path: ''},
            {id: 3, icon: 'icongouwuche', name: '购物车', arrow: 'iconjiantou1', path: '/goods/cart'},
            {id: 4, icon: 'icondingdan', name: '我的订单', arrow: 'iconjiantou1', path: ''},
            {id: 5, icon: 'iconqiaquan', name: '卡券红包', arrow: 'iconjiantou1', path: ''},
            {id: 6, icon: 'iconqianbao', name: '蘑菇金融', arrow: 'iconjiantou1', path: ''},
            {id: 7, icon: 'icondizhi', name: '收货地址', arrow: 'iconjiantou1', path: ''},
            {id: 8, icon: 'iconkefu', name: '客服', arrow: 'iconjiantou1', path: ''}
        ]
    }
    
    render() {
        let {mineNavList} = this.state;
        //mine页面顶部个人信息展示
        let headboxDOM = (
            <div className="head-box border-bottom">
                <div className="user-info">
                    <div className="user-name">为了项目</div>
                    <div className="user-zone">
                        <span className="iconfont icongeren"></span>
                        <span className="txt">个人主页</span>
                    </div>
                    <div className="user-pic">
                        <img src="" />
                    </div>
                </div>
            </div>
        );
        //mine页面导航列表
        let navlistDOM = mineNavList.map(item=>(
            <div className="nav-wrap" key={item.id} onClick={()=>this.handleGoCartPageAction(item)}>
                <div className="nav-list">
                    <div className="nav-title">
                        <span className={`iconfont ${item.icon}`}></span>
                        <span className="nav-name">{item.name}</span>
                    </div>
                    <div className={`iconfont arrow ${item.arrow}`}></div>
                </div>
            </div>
        ));
        //mine页面退出登录按钮
        let loginoutDOM = (
            <div className="loginout-wrap">
                <div className="loginout-btn">退出登录</div>
            </div>
        );
        return (
            <div id="mine" className="mine">
                <AppScroll className="content">
                    {headboxDOM}
                    {navlistDOM}
                    {loginoutDOM}
                </AppScroll>
            </div>
        );
    }
    handleGoCartPageAction = (item)=>{
        // console.log(this.props)
        let path = item.path;
        this.props.history.push(path);
    }
}

export default Mine;