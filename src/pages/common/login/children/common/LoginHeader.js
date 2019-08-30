import React from 'react'
import './style.scss'

export default (props)=>{
    // console.log(props)
    return (
        <div className="login-header">
            <span className="iconfont iconzuojiantou" onClick={()=>props.history.goBack()}></span>
            <p className="login-header-title">{props.title}</p>
        </div>
    )
}