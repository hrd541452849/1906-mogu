//引入工具
import React, {lazy, Suspense} from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import {requestCheckLoginAction} from './store/modules/mine'

//不能或者是不需要懒加载的组件
import Loding from './pages/common/loding/Loding';
import TabBar from './components/tab-bar/TabBar';

//懒加载引入根组件
const Home = lazy (() => import ('./pages/home/home/Home'));
const Mall = lazy (() => import ('./pages/mall/mall/Mall'));
const Live = lazy (() => import ('./pages/live/live/Live'));
const Mine = lazy (() => import ('./pages/mine/mine/Mine'));

// 子组件

// 首页/搜索
const Search = lazy (() => import ('./pages/home/search/Search'));
// 首页/搜索结果
const Result = lazy (() => import ('./pages/home/result/Result'));
// 商城/分类
const Category = lazy (() => import ('./pages/mall/category/Category'));
// 商城/分类详情
const CategoryDetail = lazy (() => import ('./pages/mall/category-detail/CategoryDetail'));
// 商品详情
const GoodsDetail = lazy (() => import ('./pages/cart/goods-detail/GoodsDetail'));
//购物车
const Cart = lazy (() => import ('./pages/cart/cart/Cart'));
// 登录
const Login = lazy (() => import('./pages/common/login/Login'));
const PhoneLogin = lazy (()=>import('./pages/common/login/children/phonelogin/PhoneLogin'));
const NameLogin = lazy (()=>import('./pages/common/login/children/namelogin/NameLogin'));
const QqLogin = lazy (()=>import('./pages/common/login/children/qqlogin/QqLogin'))



class App extends React.Component{
  render(){
    let {isLogin} = this.props;
    console.log(isLogin);
    return (
      <Suspense fallback={<Loding/>}>
        <div className="App">
         {/* 根页面，Switch提高性能，Redirect重定向路由 */}
         <Switch>
            <Route path = '/home' component = {Home} />
            <Route path = '/mall' component = {Mall} />
            <Route path = '/live' component = {Live} />
            {/* 我的(根据登录状态决定是否重定向到登录页面) */}
            <Route path = '/mine' render = {(props) => ( isLogin ? <Mine {...props}/> : <Login {...props}/>)} />
            <Route path = '/' exact render = {() => (<Redirect to = '/mall' />)} />
          </Switch>
  
          {/* 底部导航栏 */}
          <TabBar />
  
          {/* 子页面 */}
          {/* 搜索 */}
          <Route path = '/home/search' component = {Search} />
          {/* 搜索结果 */}
          <Route path = '/home/search/result' component = {Result} />
          {/* 分类 */}
          <Route path = '/mall/category' component = {Category} />
          {/* 分类详情 */}
          <Route path = '/mall/category/detail' component = {CategoryDetail} />
          {/* 商品详情 */}
          <Route path = '/goods/detail' component = {GoodsDetail} />
          {/* 购物车(根据登录状态决定是否重定向到登录页面) */}
          <Route path = '/goods/cart' render = {() => ( false ? <Redirect to = '/login' /> : <Cart/>)} />
          {/* 登录方式 */}
          {/* <Route path = '/login' component = {Login} /> */}
          <Route path = '/mine/login/phone' component = {PhoneLogin} />
          <Route path = '/mine/login/name' component = {NameLogin} />
          <Route path = '/mine/login/qq' component = {QqLogin} />
          
      </div>
      </Suspense>
    );
  }
  componentDidMount(){
    //检查登录是否过期
    this.props.checkLoginAction();
  } 
}
const mapStateToProps = (state)=>({
  isLogin: state.mine.isLogin
})
const mapDispatchToProps = (dispatch)=>({
  //检查登录是否过期
  checkLoginAction(){
    let action = requestCheckLoginAction();
    dispatch(action);
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
