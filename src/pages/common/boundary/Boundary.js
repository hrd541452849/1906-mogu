import React, { Component } from 'react';

class Boundary extends Component {
    constructor (props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        // 更新 state 使下一次渲染能够显示降级后的 UI
        return { hasError: true };
      }
    render() {
        return this.state.hasError ? <div>出错啦！</div> : this.props.children;
    }
}

export default Boundary;