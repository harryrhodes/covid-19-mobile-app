import React from 'react';
import { shallow } from 'enzyme';

import Patients from '../../Pages/Patients';
import { Grid, Paper, Container, Box } from "@material-ui/core";
import Navigation from "../../Components/Common/Navigation";
import Copyright from "../../Components/Copyright";
import Title from "../../Components/Title";
import PatientsTable from "../../Components/Patients/PatientsTable";

describe('<Patients />', () => {
    test('Renders a Navigation component', () => {
        const wrapper = shallow(<Patients />);
        expect(wrapper.find(Navigation).length).toBe(1);
    });

    test('Renders a Container component', () => {
        const wrapper = shallow(<Patients />);
        expect(wrapper.find(Container).length).toBe(1);
    });

    test('Renders a Grid component', () => {
        const wrapper = shallow(<Patients />);
        expect(wrapper.find(Grid).length).toBe(2);
    });

    test('Renders a Title component', () => {
        const wrapper = shallow(<Patients />);
        expect(wrapper.find(Title).length).toBe(1);
    });

    test('Renders a PatientsTable component', () => {
        const wrapper = shallow(<Patients />);
        expect(wrapper.find(PatientsTable).length).toBe(1);
    });

    test('Renders a Box component', () => {
        const wrapper = shallow(<Patients />);
        expect(wrapper.find(Box).length).toBe(1);
    });

    test('Renders a Copyright component', () => {
        const wrapper = shallow(<Patients />);
        expect(wrapper.find(Copyright).length).toBe(1);
    });
});