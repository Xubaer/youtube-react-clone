import React from 'react';
import {shallow} from 'enzyme';
import { SideBar } from "../SideBar";

test('render SideBar', () => {
    const wrapper = shallow(
        <SideBar />
    )

    expect(wrapper).toMatchSnapshot();
});