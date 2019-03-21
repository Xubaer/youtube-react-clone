import React from 'react';
import './Video.scss';

const BASED_EMBED_URL = 'https://www.youtube.com/embed/';

export function Video(props) {
    if(!props.id){
        return null;
    }
    const embedUrl = `${BASED_EMBED_URL}${props.id}`;
    return (
        <div className='video-container'>
            <div className="video">
                <iframe className='video-player' src={embedUrl} frameBorder='0' title={'Video'} allow='autoplay; encrypted-media' allowFullScreen />
            </div>
        </div>
    );
}