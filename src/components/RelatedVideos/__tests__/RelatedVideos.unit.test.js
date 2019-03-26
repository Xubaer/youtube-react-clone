import React from 'react';
import { shallow } from 'enzyme';
import { RelatedVideos } from '../RelatedVideos';

describe('RelatedVideos', () => {
    test('renders related videos', () => {
        const wrapper = shallow(
            <RelatedVideos />
        );
        expect(wrapper).toMatchSnapshot();
    });
})
