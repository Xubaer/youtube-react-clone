import React from 'react';
import { shallow } from 'enzyme';
import { Rating } from '../Rating';

describe('Rating', () => {
    test('renders without props', () => {
        const wrapper = shallow(<Rating />);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('renders with like count and dislike count', () => {
        const wrapper = shallow(<Rating likeCount={1000} dislikeCount={50} />);
        expect(wrapper).toMatchSnapshot();
    });
});