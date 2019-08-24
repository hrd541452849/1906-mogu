import React from 'react';
import { NavLink} from 'react-router-dom'
import './style.scss'

export default (props)=> {
    const barList =[
        {id:1,name:'首页',path:'/home'},
        {id:2,name:'商城',path:'/mall'},
        {id:3,name:'直播',path:'/live'},
        {id:4,name:'我',path:'/mine'},
    ]
    return (
        <nav className='tab-bar border-top'>
           {
               barList.map(item=>(
                   <NavLink className='tab-item' key={item.id} to={item.path}>
                       {item.name}
                   </NavLink>
               ))
           }
        </nav>
    );

}
