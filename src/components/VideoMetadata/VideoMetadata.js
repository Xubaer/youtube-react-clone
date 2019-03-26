import React from 'react';
import { Divider, Button, Icon } from 'semantic-ui-react';
import { Rating } from '../Rating/Rating';
import './VideoMetadata.scss';

export function VideoMetadata(props) {
    const viewCount = Number(props.viewCount).toLocaleString() || '';    
    
    return (
        <div className="video-metadata">
            <h3>Video Title</h3>
            <div className="video-stats">
                <span>{viewCount} views</span>
                <div className="video-actions">
                    <Rating likeCount={10000} dislikeCount={1000} />
                    <Button basic icon labelPosition='left'>
                        <Icon name='share'/>
                        Share
                    </Button>
                    <Button basic icon>
                        <Icon name='add circle'/>
                    </Button>                    
                    <Button basic icon>
                        <Icon name='ellipsis horizontal'/>
                    </Button>
                </div>
            </div>
            <Divider />
        </div>
    );
}