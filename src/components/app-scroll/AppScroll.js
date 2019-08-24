import React, { Component } from 'react';
import BScroll from 'better-scroll'
import './style.scss'

export default class AppScroll extends Component {
    scrollDOM = React.createRef()
    render() {
        let {className,children} = this.props
        return (
            <div className={`scroll-wrap ${className}`} ref={this.scrollDOM}>
                <div className='scroll-content'>
                    {children}
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.scroll = new BScroll(this.scrollDOM.current,{
            tap:true,
            click:true,
            scrollX:false,
            scrollY:true
        });
        this.scroll.on('beforeScrollStart',()=>{
            this.scroll.refresh()
        })
    }
    scrollTo = (y)=>{
        let maxY = this.scroll.maxScrollY;
        y >= maxY ? this.scroll.scrollTo(0, y, 200): this.scroll.scrollTo(0, maxY, 200);
    }
}

