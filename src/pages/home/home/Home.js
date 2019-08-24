import React, { Component } from 'react';
import AppHeader from '../../../components/app-header/AppHeader'
import AppScroll from '../../../components/home/app-scroll'
import Banner from '../../home/home/home/banner'

class Home extends Component {
    render() {
        return (
            <div className="page" id="home">
                <AppHeader/>
               <AppScroll className="content">
                   <Banner></Banner>
                  
              </AppScroll>      
            </div>
        );
    }
}

export default Home;