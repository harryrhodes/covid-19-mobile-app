import React from 'react';
import { shallow } from 'enzyme';

import SymptomGraph from '../../../Components/Charts/SymptomGraph';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';
import Title from '../../../Components/Title';

describe('<SymptomGraph />', () => {
    test('Renders a Title component', () => {
        const wrapper = shallow(<SymptomGraph />);
        expect(wrapper.find(Title).length).toBe(1);
    });

    test('Renders a ResponsiveContainer component', () => {
        const wrapper = shallow(<SymptomGraph />);
        expect(wrapper.find(ResponsiveContainer).length).toBe(1);
    });

    test('Renders a BarChart component', () => {
        const wrapper = shallow(<SymptomGraph />);
        expect(wrapper.find(BarChart).length).toBe(1);
    });

    test('Renders a CartesianGrid component', () => {
        const wrapper = shallow(<SymptomGraph />);
        expect(wrapper.find(CartesianGrid).length).toBe(1);
    });

    test('Renders a XAxis component', () => {
        const wrapper = shallow(<SymptomGraph />);
        expect(wrapper.find(XAxis).length).toBe(1);
    });

    test('Renders a YAxis component', () => {
        const wrapper = shallow(<SymptomGraph />);
        expect(wrapper.find(YAxis).length).toBe(1);
    });

    test('Renders a Tooltip component', () => {
        const wrapper = shallow(<SymptomGraph />);
        expect(wrapper.find(Tooltip).length).toBe(1);
    });

    test('Renders a Legend component', () => {
        const wrapper = shallow(<SymptomGraph />);
        expect(wrapper.find(Legend).length).toBe(1);
    });

    test('Renders a Bar component', () => {
        const wrapper = shallow(<SymptomGraph />);
        expect(wrapper.find(Bar).length).toBe(1);
    });
});