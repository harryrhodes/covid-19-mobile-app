import React from 'react';
import { shallow } from 'enzyme';

import CasesTable from '../../Components/CasesTable';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    InputLabel,
    FormControl,
    Select,
    TextField,
    Button,
} from "@material-ui/core";

describe('<CasesTable />', () => {
    test('Renders a FormControl component', () => {
        const wrapper = shallow(<CasesTable />);
        expect(wrapper.find(FormControl).length).toBe(3);
    });

    test('Renders a TextField component', () => {
        const wrapper = shallow(<CasesTable />);
        expect(wrapper.find(TextField).length).toBe(1);
    });

    test('Renders a Button component', () => {
        const wrapper = shallow(<CasesTable />);
        expect(wrapper.find(Button).length).toBe(1);
    });

    test('Renders correct text in the Button component', () => {
        const wrapper = shallow(<CasesTable />);
        expect(wrapper.find(Button).text()).toBe('Search Symptoms');
    });

    test('Renders a InputLabel component', () => {
        const wrapper = shallow(<CasesTable />);
        expect(wrapper.find(InputLabel).length).toBe(1);
    });

    test('Renders correct text in the InputLabel component', () => {
        const wrapper = shallow(<CasesTable />);
        expect(wrapper.find(InputLabel).text()).toBe('Date Confirmed');
    });

    test('Renders a Select component', () => {
        const wrapper = shallow(<CasesTable />);
        expect(wrapper.find(Select).length).toBe(1);
    });

    test('Renders a Table component', () => {
        const wrapper = shallow(<CasesTable />);
        expect(wrapper.find(Table).length).toBe(1);
    });

    test('Renders a TableHead component', () => {
        const wrapper = shallow(<CasesTable />);
        expect(wrapper.find(TableHead).length).toBe(1);
    });

    test('Renders a TableRow component', () => {
        const wrapper = shallow(<CasesTable />);
        expect(wrapper.find(TableRow).length).toBe(3);
    });

    test('Renders a TableBody component', () => {
        const wrapper = shallow(<CasesTable />);
        expect(wrapper.find(TableBody).length).toBe(1);
    });
});