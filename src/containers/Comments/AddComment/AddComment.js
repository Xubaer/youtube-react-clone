import React from 'react';
import './AddComment.scss';
import { Form, TextArea, Image } from 'semantic-ui-react';

export function AddComment(props) {
    return (
        <div className='add-comment'>
            <Image className='user-image' src='http://via.placeholder.com/48x48' circular/>
            <Form>
                <Form.TextArea control={TextArea} autoHeight placeholder='Add a public comment' />
            </Form>
        </div>
    );
}