import React from 'react';
import { shallow } from 'enzyme';

import UsersTable from '../../../Components/Users/UsersTable';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    FormControl,
    TextField,
    Button,
} from "@material-ui/core";

describe('<UsersTable />', () => {
    test('Renders a FormControl component', () => {
        const wrapper = shallow(<UsersTable />);
        expect(wrapper.find(FormControl).length).toBe(2);
    });

    test('Renders a TextField component', () => {
        const wrapper = shallow(<UsersTable />);
        expect(wrapper.find(TextField).length).toBe(1);
    });

    test('Renders a Button component', () => {
        const wrapper = shallow(<UsersTable />);
        expect(wrapper.find(Button).length).toBe(1);
    });

    test('Renders a Table component', () => {
        const wrapper = shallow(<UsersTable />);
        expect(wrapper.find(Table).length).toBe(1);
    });

    test('Renders a TableHead component', () => {
        const wrapper = shallow(<UsersTable />);
        expect(wrapper.find(TableHead).length).toBe(1);
    });

    test('Renders a TableRow component', () => {
        const wrapper = shallow(<UsersTable />);
        expect(wrapper.find(TableRow).length).toBe(1);
    });

    test('Renders a TableCell component', () => {
        const wrapper = shallow(<UsersTable />);
        expect(wrapper.find(TableCell).length).toBe(5);
    });

    test('Renders a TableCell component', () => {
        const wrapper = shallow(<UsersTable />);
        expect(wrapper.find(TableCell).first().text()).toBe('Username');
    });

    test('Renders a TableBody component', () => {
        const wrapper = shallow(<UsersTable />);
        expect(wrapper.find(TableBody).length).toBe(1);
    });
});