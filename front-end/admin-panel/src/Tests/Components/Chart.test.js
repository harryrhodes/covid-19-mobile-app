import React from 'react';
import { shallow } from 'enzyme';

import Chart from '../../Components/Chart';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from '../../Components/Title';

describe('<Chart />', () => {
    test('Renders a Title component', () => {
        const wrapper = shallow(<Chart />);
        expect(wrapper.find(Title).length).toBe(1);
    });

    test('Renders a ResponsiveContainer component', () => {
        const wrapper = shallow(<Chart />);
        expect(wrapper.find(ResponsiveContainer).length).toBe(1);
    });

    test('Renders a LineChart component', () => {
        const wrapper = shallow(<Chart />);
        expect(wrapper.find(LineChart).length).toBe(1);
    });

    test('Renders a XAxis component', () => {
        const wrapper = shallow(<Chart />);
        expect(wrapper.find(XAxis).length).toBe(1);
    });

    test('Renders a YAxis component', () => {
        const wrapper = shallow(<Chart />);
        expect(wrapper.find(YAxis).length).toBe(1);
    });

    test('Renders a Label component', () => {
        const wrapper = shallow(<Chart />);
        expect(wrapper.find(Label).length).toBe(1);
    });

    test('Renders a Label component', () => {
        const wrapper = shallow(<Chart />);
        expect(wrapper.find(Label).text()).toBe('<Label />');
    });
});