import React from 'react';
import { shallow } from 'enzyme';

import SymptomTrends from '../../../Pages/Trends/SymptomTrends';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Navigation from "../../../Components/Common/Navigation";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Copyright from "../../../Components/Copyright";
import SymptomGraph from "../../../Components/Charts/SymptomGraph"
import SymptomCounter from "../../../Components/Dashboard/Counters/SymptomCounter";

describe('<SymptomTrends />', () => {
    test('Renders a Navigation component', () => {
        const wrapper = shallow(<SymptomTrends />);
        expect(wrapper.find(Navigation).length).toBe(1);
    });

    test('Renders a Container component', () => {
        const wrapper = shallow(<SymptomTrends />);
        expect(wrapper.find(Container).length).toBe(1);
    });

    test('Renders a Grid component', () => {
        const wrapper = shallow(<SymptomTrends />);
        expect(wrapper.find(Grid).length).toBe(3);
    });

    test('Renders a Paper component', () => {
        const wrapper = shallow(<SymptomTrends />);
        expect(wrapper.find(Paper).length).toBe(2);
    });

    test('Renders a SymptomGraph component', () => {
        const wrapper = shallow(<SymptomTrends />);
        expect(wrapper.find(SymptomGraph).length).toBe(1);
    });

    test('Renders a SymptomCounter component', () => {
        const wrapper = shallow(<SymptomTrends />);
        expect(wrapper.find(SymptomCounter).length).toBe(1);
    });

    test('Renders a Box component', () => {
        const wrapper = shallow(<SymptomTrends />);
        expect(wrapper.find(Box).length).toBe(1);
    });

    test('Renders a Copyright component', () => {
        const wrapper = shallow(<SymptomTrends />);
        expect(wrapper.find(Copyright).length).toBe(1);
    });
});