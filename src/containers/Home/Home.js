import React from 'react';
import { HomeContent } from './HomeContent/HomeContent';
import {SideBar} from '../SideBar/SideBar';
import './Home.scss';

export class Home extends React.Component {
    state = {  }
    render() {
        return (
            <React.Fragment>
                <SideBar />
                <HomeContent />
            </React.Fragment>
        );
    }
}