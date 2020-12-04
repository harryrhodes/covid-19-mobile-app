import React from 'react';
import { shallow } from 'enzyme';

import PatientsTable from '../../../Components/Patients/PatientsTable';
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

describe('<PatientsTable />', () => {
    test('Renders a Table component', () => {
        const wrapper = shallow(<PatientsTable />);
        expect(wrapper.find(Table).length).toBe(1);
    });

    test('Renders a TableHead component', () => {
        const wrapper = shallow(<PatientsTable />);
        expect(wrapper.find(TableHead).length).toBe(1);
    });

    test('Renders a TableRow component', () => {
        const wrapper = shallow(<PatientsTable />);
        expect(wrapper.find(TableRow).length).toBe(1);
    });

    test('Renders a TableCell component', () => {
        const wrapper = shallow(<PatientsTable />);
        expect(wrapper.find(TableCell).length).toBe(5);
    });

    test('Renders correct text in the TableCell component', () => {
        const wrapper = shallow(<PatientsTable />);
        expect(wrapper.find(TableCell).first().text()).toBe('Username');
    });
});