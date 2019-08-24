import React, { Component } from 'react';
import './style.scss'

class Login extends Component {

    loginWays = [
        {id: 'QQ', name: 'QQ登录', icon: 'iconicon', path: '/login/qq'},
        {id: 'phone', name: '免密登录', icon: 'iconshouji', path: '/login/phone'},
        {id: 'username', name: '账号登录', icon: 'iconsolid-person', path: '/login/name'}
    ]

    render() {
        return (
            <div id="login">
                <div className="login-title">登录</div>
                <div className="user-button">
                    <span className="iconfont iconweibo"></span>
                    <span className="name">微博登录</span>
                </div>
                <div className="other-ways">
                    <span>其他登录方式</span>
                </div>
                <div className="other-ways-port">
                    {
                        this.loginWays.map(item=>(
                            <div className="ways-item" key={item.id} onClick={()=>this.handleLoginPortAction(item)}>
                                <div className="ways-tag">
                                    <span className={`iconfont ${item.icon}`}></span>
                                </div>
                                <p className="ways-name">{item.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
    handleLoginPortAction = (item)=>{
        this.props.history.push(item.path);
    }
}

export default Login;