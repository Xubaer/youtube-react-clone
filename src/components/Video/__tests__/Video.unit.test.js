import React from 'react';
import { shallow } from 'enzyme';
import { Video } from '../Video';

describe('testing Video', () => {
    test('render without id', () => {
        const wrapper = shallow(
            <Video />
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('renders video with id', () => {
        const wrapper = shallow(
            <Video id='123456' />
        );
        expect(wrapper).toMatchSnapshot();
    });
});