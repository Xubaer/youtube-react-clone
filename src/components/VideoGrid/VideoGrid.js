import React, { Component } from 'react';
import './VideoGrid.scss';
import { Divider } from 'semantic-ui-react';
import { VideoPreview } from '../VideoPreview/VideoPreview';
import { VideoGridHeader } from './VideoGridHeader/VideoGridHeader';
export function VideoGrid(props) {
    const divider = props.hideDivider ? null : <Divider/>;
    
    return (
        <React.Fragment>
            <VideoGridHeader title='trending'/>
            <div className="video-grid">                
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />                
            </div>
            {divider}
        </React.Fragment>
    )
}