import React from 'react'
import './style.scss'

export default (props)=>{
    return (
        <div className="login-header">
            <span className="iconfont iconzuojiantou"></span>
            <p className="login-header-title">{props.title}</p>
        </div>
    )
}