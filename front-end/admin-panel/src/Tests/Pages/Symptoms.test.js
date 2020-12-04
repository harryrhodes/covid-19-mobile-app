import React from 'react';
import { shallow } from 'enzyme';

import Symptoms from '../../Pages/Symptoms';
import { Grid, Paper, Container, Box } from "@material-ui/core";
import Navigation from "../../Components/Common/Navigation";
import Copyright from "../../Components/Copyright";
import Title from "../../Components/Title";
import SymptomsTable from "../../Components/Symptoms/SymptomsTable";
import AddSymptom from "../../Components/Symptoms/AddSymptom";

describe('<Symptoms />', () => {
    test('Renders a Navigation component', () => {
        const wrapper = shallow(<Symptoms />);
        expect(wrapper.find(Navigation).length).toBe(1);
    });

    test('Renders a Container component', () => {
        const wrapper = shallow(<Symptoms />);
        expect(wrapper.find(Container).length).toBe(1);
    });

    test('Renders a Grid component', () => {
        const wrapper = shallow(<Symptoms />);
        expect(wrapper.find(Grid).length).toBe(2);
    });

    test('Renders a Paper component', () => {
        const wrapper = shallow(<Symptoms />);
        expect(wrapper.find(Paper).length).toBe(1);
    });

    test('Renders a Title component', () => {
        const wrapper = shallow(<Symptoms />);
        expect(wrapper.find(Title).length).toBe(1);
    });

    test('Renders a SymptomsTable component', () => {
        const wrapper = shallow(<Symptoms />);
        expect(wrapper.find(SymptomsTable).length).toBe(1);
    });

    test('Renders a AddSymptom component', () => {
        const wrapper = shallow(<Symptoms />);
        expect(wrapper.find(AddSymptom).length).toBe(1);
    });

    test('Renders a Box component', () => {
        const wrapper = shallow(<Symptoms />);
        expect(wrapper.find(Box).length).toBe(1);
    });

    test('Renders a Copyright component', () => {
        const wrapper = shallow(<Symptoms />);
        expect(wrapper.find(Copyright).length).toBe(1);
    });
});