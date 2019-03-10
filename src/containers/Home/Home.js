import React from 'react';
import { VideoGrid } from '../../components/VideoGrid/VideoGrid';
import './Home.scss';

export class Home extends React.Component {
    state = {  }
    render() {
        return (
            <div className='home'>
                <VideoGrid title='Trending'/>
                <VideoGrid title='Autos & Vehicles' hideDivider={true}/>
            </div>
        );
    }
}