import React from 'react';
import { Button, Image } from 'semantic-ui-react';
import { Rating } from '../../../components/Rating/Rating';
import './Comment.scss';

export function Comment(props) {
    return(
        <div className='comment'>
            <Image className='user-image' src='http://via.placeholder.com/48x48' circular />
            <div>
                <div className='user-name'>User Name</div>
                <span>Comment Text</span>
                <div className='comment-actions'>
                    <Rating likeCount={1}/> <Button size='tiny' compact>Reply</Button>
                </div>
            </div>
        </div>
    );
}