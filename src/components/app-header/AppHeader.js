import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './style.scss'
 
class AppHeader extends Component {
    render() {
        return (
            <div className='head border-bottom' id='header'>
                <NavLink className='header-left' to='/mall/category'>
                    <span className='iconfont iconiconset0194'></span>
                </NavLink>
                <NavLink className='header-ipt' to='/home/search/result'>
                    <div className='header-search'>
                        <span className=' iconfont icon41'></span>
                    </div>
                    <div className='header-data'>先假装有字站位</div>
                </NavLink>
                <NavLink className='header-right' to='/home/search/result'>
                    <span className='iconfont icontalk'></span>
                </NavLink>
            </div>
        );
    }
}

export default AppHeader;