import React, { Component } from 'react';

import {connect} from 'react-redux';
import { requestCategoryLeftData } from '../../../store/modules/mall';

import Left from './children/Left'

import './category.scss'

class Category extends Component {
    state = {
        pid: 0,
        fcid: 0,
    }
    render() {
        let {leftData} = this.props;
        return (
            <div id = "category">
                <Left data = {leftData} pid = {this.state.pid} />
            </div>
        );
    }
    componentDidMount() {
        // 挂载完请求左侧数据
        this.props.requestLeftAction();
    }
}

const mapStateToProps = (state) => ({
    // 左侧数据
    leftData: state.mall.categoryLeft
});

const mapDispatchToProps = (dispatch)=>({
    requestLeftAction() {
        let action = requestCategoryLeftData();
        dispatch(action);
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Category);
