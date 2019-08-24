import React, { Component } from 'react';




class Left extends Component {

    render() {
        let {data, pid} = this.props
        console.log(pid)
        return (
            <ul className = "left">
                {
                    data.map(item => (
                        <li key = {item.maitKey}>{item.title}</li>
                    ))
                }
            </ul>
        );
    }
}

export default Left;


