import React from 'react';
import { CommentsHeader } from './CommentsHeader/CommentsHeader';
import { AddComment } from './AddComment/AddComment';
import { Comment } from './Comment/Comment';
import './Comments.scss';


export class Comments extends React.Component {
    state = {  }
    render() {
        return (
            <div>
                <CommentsHeader amountComments={this.props.amountComments}/>
                <AddComment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        );
    }
}