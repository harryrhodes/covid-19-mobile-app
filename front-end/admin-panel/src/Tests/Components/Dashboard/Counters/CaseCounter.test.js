import React from 'react';
import { shallow } from 'enzyme';

import CaseCounter from '../../../../Components/Dashboard/Counters/CaseCounter';
import Typography from "@material-ui/core/Typography";
import Title from "../../../../Components/Title";
import Link from "@material-ui/core/Link";

describe('<CaseCounter />', () => {
    test('Renders a Title component', () => {
        const wrapper = shallow(<CaseCounter />);
        expect(wrapper.find(Title).length).toBe(1);
    });

    // test('Renders correct text in the Title component', () => {
    //     const wrapper = shallow(<CaseCounter />);
    //     expect(wrapper.find(Title).text()).toBe('Total Cases');
    // });

    test('Renders a Typography component', () => {
        const wrapper = shallow(<CaseCounter />);
        expect(wrapper.find(Typography).length).toBe(2);
    });

    test('Renders a Link component', () => {
        const wrapper = shallow(<CaseCounter />);
        expect(wrapper.find(Link).length).toBe(1);
    });

    test('Renders correct text in the Link component', () => {
        const wrapper = shallow(<CaseCounter />);
        expect(wrapper.find(Link).text()).toBe('View Cases');
    });
});