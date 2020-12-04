import React from 'react';
import { shallow } from 'enzyme';

import CasesTable from '../../../Components/Cases/CasesTable';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    InputLabel,
} from "@material-ui/core";

describe('<CasesTable />', () => {
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
        expect(wrapper.find(TableRow).length).toBe(1);
    });

    test('Renders a TableBody component', () => {
        const wrapper = shallow(<CasesTable />);
        expect(wrapper.find(TableBody).length).toBe(1);
    });

    test('Renders a TableCell component', () => {
        const wrapper = shallow(<CasesTable />);
        expect(wrapper.find(TableCell).length).toBe(5);
    });
});