import React from 'react';
import AppScroll from '../../../components/home/app-scroll'
import AppHeader from '../../../components/app-header/AppHeader'
import Banner from '../home/home/banner'
class Home extends React.Component{
    render(){
    return(
       <div className="pege" id="home">
            <AppHeader></AppHeader>
            <AppScroll className="content">
            <Banner></Banner> 
           </AppScroll>
           
       </div> 
    )
}
}

export default Home;