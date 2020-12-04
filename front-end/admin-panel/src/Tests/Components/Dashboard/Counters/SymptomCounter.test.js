import React from 'react';
import { shallow } from 'enzyme';

import SymptomCounter from '../../../../Components/Dashboard/Counters/SymptomCounter';
import Typography from "@material-ui/core/Typography";
import Title from "../../../../Components/Title";
import Link from "@material-ui/core/Link";

describe('<SymptomCounter />', () => {
    test('Renders a Title component', () => {
        const wrapper = shallow(<SymptomCounter />);
        expect(wrapper.find(Title).length).toBe(1);
    });

    // test('Renders correct text in the Title component', () => {
    //     const wrapper = shallow(<SymptomCounter />);
    //     expect(wrapper.find(Title).text()).toBe('Total Symptoms');
    // });

    test('Renders a Typography component', () => {
        const wrapper = shallow(<SymptomCounter />);
        expect(wrapper.find(Typography).length).toBe(2);
    });

    test('Renders a Link component', () => {
        const wrapper = shallow(<SymptomCounter />);
        expect(wrapper.find(Link).length).toBe(1);
    });

    test('Renders correct text in the Link component', () => {
        const wrapper = shallow(<SymptomCounter />);
        expect(wrapper.find(Link).text()).toBe('View Symptoms');
    });
});