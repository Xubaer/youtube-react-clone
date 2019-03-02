import React from 'react';
import {shallow} from 'enzyme';
import {Subscription} from '../Subscription';

describe('Subscription', () => {
    test('renders empty subscription', () => {
        const wrapper = shallow(
            <Subscription />
        );
        expect(wrapper).toMatchSnapshot();
    });
    
    test('renders broadcasting subscription', () => {
        const wrapper = shallow(
            <Subscription broadcasting label='ZubairNaseem' />
        );
        expect(wrapper).toMatchSnapshot();
    });
    
    test('renders non-broadcasting subscription with new videos', () => {
        const wrapper = shallow(
            <Subscription amountNewVideos={3} label='ZubairNaseem' />
        );
        expect(wrapper).toMatchSnapshot();
    });
});