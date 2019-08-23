import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
//redux的中间件，中间件就是增强dispatch功能的。
// 使用该中间件，可以dispath一个异步函数
// dispath接收一个函数，该函数执行，并且函数中重新接收到dispath方法
import thunk from 'redux-thunk';
// 引入各个reducer模块

// 首页搜索（余陈）
import home from './modules/home';
// 商城分类（黄汝冬）
import mall from './modules/mall';
// 购物车详情（吴崇刚）
import cart from './modules/cart';
// 我的登录（黄磊）
import mine from './modules/mine';

// 合并多个reducer
const reducer = combineReducers({
    home,
    mall,
    cart,
    mine
});

// 使用redux开发者工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 输出store
export default createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

