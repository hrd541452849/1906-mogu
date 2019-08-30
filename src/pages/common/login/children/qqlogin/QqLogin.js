import React from 'react'
import './style.scss'


class QqLogin extends React.Component{
    render(){
        return (
            <div className="qq-login" id="qq-login">
                <div className="show-info">
                    <img src="/static/images/timg.jpg" alt="" /> 
                    <p className="txt">正在完善中，敬请期待~</p>
                    <button className="back-btn" onClick={this.handleBackAction}>返回</button>
                </div>
            </div>
        )
    }
    handleBackAction = ()=>{
        // console.log(this.props);
        this.props.history.goBack();
    }
}

export default QqLogin;
    




