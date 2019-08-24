import React, { Component } from 'react';
import LoginHeader from '../common/LoginHeader';
import './style.scss'

class PhoneLogin extends Component {
    render() {
        return (
            <div id="phone-login" className="phone-login">
                <LoginHeader title="免密登录"/>
                <div className="login-wrap">
                    <div className="phone-input">
                        <input type="text" placeholder="手机号" />
                        <span className="tip">
                            <i className="iconfont iconchacha"></i>
                        </span>
                    </div>
                    <div className="code-input">
                        <input type="text" placeholder="验证码" />
                        <span className="get-code">获取验证码</span>
                    </div>
                    <div className="pass-pic">
                        <p className="tip-txt">
                            <span className="txt-left">请点击图片旋转至正向朝上</span>
                            <span className="txt-right">换一组</span>
                        </p>
                        <div className="show-pic">
                            <div className="pic-content">
                                <img src="" alt="" />
                            </div>
                            <div className="pic-content">
                                <img src="" alt="" />
                            </div>
                            <div className="pic-content">
                                <img src="" alt="" />
                            </div>
                            <div className="pic-content">
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="login-btn">登录</div>
                </div>
            </div>
        );
    }
}

export default PhoneLogin;