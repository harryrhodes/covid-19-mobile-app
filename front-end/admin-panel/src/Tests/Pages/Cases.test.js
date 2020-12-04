import React from 'react';
import { shallow } from 'enzyme';

import Cases from '../../Pages/Cases';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CasesTable from "../../Components/Cases/CasesTable"
import Title from "../../Components/Title";

describe('<Cases />', () => {
    test('Renders a Grid component', () => {
        const wrapper = shallow(<Cases />);
        expect(wrapper.find(Grid).length).toBe(2);
    });

    test('Renders a Paper component', () => {
        const wrapper = shallow(<Cases />);
        expect(wrapper.find(Paper).length).toBe(1);
    });

    test('Renders a Title component', () => {
        const wrapper = shallow(<Cases />);
        expect(wrapper.find(Title).length).toBe(1);
    });

    test('Renders a CasesTable component', () => {
        const wrapper = shallow(<Cases />);
        expect(wrapper.find(CasesTable).length).toBe(1);
    });
});