import React, { Component } from 'react';
import AppHeader from '../../../components/app-header/AppHeader';
import MallTop from './children/MallTop';


import './mall.scss';

class Mall extends Component {
    render() {
        return (
            <div id = "mall">
                <AppHeader/>
                <MallTop/>
            </div>
        );
    }
}

export default Mall;