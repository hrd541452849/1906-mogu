import React, { Component } from 'react';

class MallTop extends Component {
    state = {
        topData: [
            {title: '限时快抢', picUrl: '/static/images/mall-1.png'},
            {title: '热销榜单', picUrl: '/static/images/mall-2.png'},
            {title: '好货精选', picUrl: '/static/images/mall-3.jpg'},
            {title: '快时尚', picUrl: '/static/images/mall-4.png'}
        ]
    }
    render() {
        return (
            <ul className = "mall-top">
                {this.state.topData.map(item => (
                    <li key = {item.title}>
                        <img src = {item.picUrl} alt = {item.title} />
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>
        );
    }
}

export default MallTop;