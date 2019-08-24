import React, { Component } from 'react';

class banner extends Component {
    swiperDOM = React.createRef();
    render() {
        const listData = [
            {id: 1, url: '/static/images/home/banner1.jpg'},
            {id: 2, url: '/static/images/home/banner2.jpg'},
            {id: 3, url: '/static/images/home/banner3.jpg'},
            {id: 4, url: '/static/images/home/banner4.jpg'},
            
        ]
        return (
            <div className="swiper-container" ref={this.swiperDOM}>
            <div className="swiper-wrapper">
            {
          listData.map((item)=>(
            <div className="swiper-slide" key={item.id}>
              <img src={item.url} alt=""/>
              <h1>{item.id}</h1>
              
            </div>
          ))
        }      
            </div>
           
            <div className="swiper-pagination"></div>
        </div>
        
        )
    }
    // componentDidMount(){
    //     // 初始化轮播图
    //     this.swiper = new window.Swiper(this.swiperDOM.current, {
    //       pagination: '.swiper-pagination',
    //        loop: true
    //     });
    //   }
    //   componentDidUpdate(){
    //      // 数据发生变化，先销毁，再重新创建轮播图
    //      this.swiper.destroy();
    //      this.swiper = new window.Swiper(this.swiperDOM.current, {
    //        pagination: '.swiper-pagination',
    //       loop: true
    //      });
    //    }
}

export default banner;