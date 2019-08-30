
import api from '../../utils/api'
import {post, get} from '../../utils/request'

const CHANGE_LOGIN_TIP = 'mine/change_login_tip'
const SET_LOGIN_STATUS = 'mine/set_login_status'
const SET_USER_INFO = 'mine/set_user_info'
const RESET_LOGINTIP = 'mine/reset_logintip'

// state
const initialState = {
    isLogin: false,
    loginTip: '获取验证码',
    userInfo: {}
};

// reducer
export default (state = initialState, action)=>{
    switch (action.type) {
        case CHANGE_LOGIN_TIP:
            return {
                ...state,
                loginTip: action.value
            }
        case SET_LOGIN_STATUS:
            return {
                ...state,
                isLogin: action.value
            }
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: action.value
            }
        case RESET_LOGINTIP:
            return {
                ...state,
                loginTip: action.value
            }
        default:
            return state;
    }
};

// 同步actions
//设置登录提示框的文字
export const getChangeTipAction = (value)=>({
    type: CHANGE_LOGIN_TIP,
    value
})
//设置登录状态
const setLoginStatusAction = (value)=>({
    type: SET_LOGIN_STATUS,
    value
})
//设置用户信息
const setUserInfo = (value)=>({
    type: SET_USER_INFO,
    value
})


//异步actions
//发送验证码
export const requestSendCodeAction = (phone)=> async (dispatch)=>{
    try {
        //异步操作，发送请求
        let result = await post(api.SEND_CODE_API,{phone});
        console.log(result);
        //设置显示的信息
        let time = 60;
        //倒计时
        dispatch(getChangeTipAction('已发送'+(time--)+'s'));
        let timer = setInterval(()=>{
            dispatch(getChangeTipAction('已发送'+(time--)+'s'));
            if(time < 0){
                //倒计时完成，重新发送
                clearInterval(timer);
                dispatch(getChangeTipAction('重新发送'));
            }
        }, 1000);
        
    } catch (error) {
        dispatch(getChangeTipAction('重新发送'));
    }
}
//电话号码和验证码登录
export const requestLoginByCodeAction = (phone, code)=> async (dispatch)=>{
    try {
        let result = await post(api.LOGIN_BY_CODE_API,{phone, code});
        console.log(result);
        let action = setLoginStatusAction(true);
        dispatch(action);
        dispatch(setUserInfo(result.data));
    } catch (error) {
        console.log('登录失败')
    }
}
//检查登录是否过期
export const requestCheckLoginAction = ()=> async (dispatch)=>{
    try{

        let result = await get(api.CHECK_LOGIN_API);
        if(result.code === 0){
            //登录没有过期，设置登录状态
            let action = setLoginStatusAction(true);
            dispatch(action);
            //设置用户信息
            let userinfo = result.data;
            dispatch(setUserInfo(userinfo))
        }else{
            // 登录过期了，设置登录状态为false
            let action = setLoginStatusAction(false);
            dispatch(action);
        }   
    }catch{
        // 登录过期了，设置登录状态为false
        let action = setLoginStatusAction(false);
        dispatch(action);
    }
}
//退出登录
export const requestLoginOut = ()=> async (dispatch)=>{
    //移除session
    let result = await get(api.LOGOUT_API);
    console.log(result)
    //设置登录状态
    dispatch(setLoginStatusAction(false));
    //清空用户数据
    dispatch(setUserInfo({}));
}