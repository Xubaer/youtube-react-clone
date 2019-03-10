import React from 'react';
import { shallow } from 'enzyme';
import { VideoGridHeader } from '../VideoGridHeader';

describe('VideoGridHeader', () => {
    test('renders without prop', () => {
        const wrapper = shallow(<VideoGridHeader />);
        expect(wrapper).toMatchSnapshot();
    });

    test('renders with empty prop', () => {
        const wrapper = shallow(<VideoGridHeader title=''/>);
        expect(wrapper).toMatchSnapshot();
    });
   
    test('renders with title', () => {
        const wrapper = shallow(<VideoGridHeader title='Autos & Vehicles'/>);
        expect(wrapper).toMatchSnapshot();
    });

});