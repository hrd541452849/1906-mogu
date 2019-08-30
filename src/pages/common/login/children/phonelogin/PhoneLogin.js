import React, { Component } from 'react';
import {connect} from 'react-redux'
import LoginHeader from '../common/LoginHeader';
import {Toast} from 'antd-mobile';
import './style.scss'
import 'antd-mobile/lib/toast/style/css'
import {requestSendCodeAction, requestLoginByCodeAction, getChangeTipAction} from '../../../../../store/modules/mine'

class PhoneLogin extends Component {
    state = {
        delInput: false,
        phone: '',
        code: ''
    };
    render() {
        let {loginTip, sendCodeAction, loginByCodeAction} = this.props;
        let disable = loginTip.endsWith('s');
        let {delInput, phone, code} = this.state;
        return (
            <div id="phone-login" className="phone-login">
                {/* 手机登录界面头部 */}
                <LoginHeader title="免密登录" {...this.props}/>
                {/* 登录输入界面 */}
                <div className="login-wrap">
                    {/* 手机号输入框 */}
                    <div className="phone-input">
                        <input type="text" placeholder="手机号" value={phone} onChange={this.handleChangePhoneAction} />
                        <span className="tip" style={{display:delInput?'':'none'}}>
                            <i className="iconfont iconchacha" onClick={this.handleDelPhoneInfo}></i>
                        </span>
                    </div>
                    {/* 验证码输入框 */}
                    <div className="code-input">
                        <input type="text" placeholder="验证码" value={code} onChange={this.handleChangeCodeAction} />
                        <span className={`get-code ${disable ? 'disable' : ''}`} onClick={()=>{
                            return disable ? '' : sendCodeAction(phone)
                        }}>{loginTip}</span>
                    </div>
                    {/* 旋转图片验证 */}
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
                    {/* 登录按钮 */}
                    <div className="login-btn" onClick={()=>loginByCodeAction(phone, code, {...this.props})}>登录</div>
                </div>
            </div>
        );
    };
    handleChangePhoneAction = (ev)=>{
        this.setState({
            phone: ev.target.value,
            delInput: true
        })
    };
    handleDelPhoneInfo = ()=>{
        this.setState({
            phone: '',
            delInput: false
        })
    };
    handleChangeCodeAction = (ev)=>{
        this.setState({
            code: ev.target.value
        })
    };
    componentDidMount(){
        // console.log('挂载了')
        this.props.resetLoginTip();
    }
}
const mapStateToProps = (state)=>({
    loginTip: state.mine.loginTip
})
const mapDispatchToProps = (dispatch)=>({
    
    //发送验证码
    sendCodeAction(phone){

        // 得到验证码，验证数据格式，是不是电话号码
        if(!(/^1[3|4|5|7|8|9]\d{9}$/.test(phone))){
            Toast.info('格式不正确，请重新输入~',2);
        }else{
            // 正确就执行action事件请求code
            let action = requestSendCodeAction(phone);
            dispatch(action);
        }
    },
    //登录，验证验证码
    loginByCodeAction(phone, code, props){
        
        //验证电话格式
        if(!(/^1[3|4|5|7|8|9]\d{9}$/.test(phone))){
            Toast.info('格式不正确',2);
            return;
        }
        //验证验证码格式
        if(!(/^\d{6}$/.test(code))){
            Toast.info('格式不正确',2);
            return;
        }
        //发送请求给后台执行登录
        let action = requestLoginByCodeAction(phone, code);
        dispatch(action);
        props.history.push('/mine');
    },
    resetLoginTip(){
        // console.log('执行了')
        let action = getChangeTipAction('获取验证码');
        dispatch(action);
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PhoneLogin);