import {YOUTUBE_LIBRARY_LOADED} from '../actions/api';

const initialState = {
    youtubeLoaded: false
};
export default function (state = initialState, action) {
    switch (action.type) {
        case YOUTUBE_LIBRARY_LOADED:
            return {
                youtubeLoaded: true
            };
        default:
            return state;
    }
}

export const getYoutubeLibraryLoaded = (state) => state.api.youtubeLoaded;