import React from 'react';
import { shallow } from 'enzyme';

import Dashboard from '../../Pages/Dashboard';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chart from "../../Components/Chart";
import CaseCounter from "../../Components/Dashboard/Counters/CaseCounter";
import PaitentCounter from "../../Components/Dashboard/Counters/PatientCounter";
import SymptomCounter from "../../Components/Dashboard/Counters/SymptomCounter";
import UserCounter from "../../Components/Dashboard/Counters/UserCounter";
import Navigation from "../../Components/Common/Navigation";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Copyright from "../../Components/Copyright";

describe('<Dashboard />', () => {
    test('Renders a Navigation component', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find(Navigation).length).toBe(1);
    });

    test('Renders a Container component', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find(Container).length).toBe(1);
    });

    test('Renders a Grid component', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find(Grid).length).toBe(8);
    });

    test('Renders a Paper component', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find(Paper).length).toBe(7);
    });

    test('Renders a CaseCounter component', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find(CaseCounter).length).toBe(1);
    });

    test('Renders a PaitentCounter component', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find(PaitentCounter).length).toBe(1);
    });

    test('Renders a SymptomCounter component', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find(SymptomCounter).length).toBe(1);
    });

    test('Renders a UserCounter component', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find(UserCounter).length).toBe(1);
    });

    // test('Renders a Chart component', () => {
    //     const wrapper = shallow(<Dashboard />);
    //     expect(wrapper.find(Chart).length).toBe(3);
    // });

    test('Renders a Box component', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find(Box).length).toBe(1);
    });

    test('Renders a Copyright component', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper.find(Copyright).length).toBe(1);
    });
});