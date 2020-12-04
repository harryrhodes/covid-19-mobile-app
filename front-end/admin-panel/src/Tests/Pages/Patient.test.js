import React from 'react';
import { shallow } from 'enzyme';

import Patient from '../../Pages/Patient';
import Router from 'react-router';
import {
    Grid,
    Box,
} from "@material-ui/core";
import Copyright from "../../Components/Copyright";
import Navigation from "../../Components/Common/Navigation";

beforeAll(() => {
    jest
        .spyOn(Router, 'useParams')
        .mockImplementation(() => { });
});

describe('<Patient />', () => {
    test('Renders a Navigation component', () => {
        const wrapper = shallow(<Patient />);
        expect(wrapper.find(Navigation).length).toBe(1);
    });

    test('Renders a Grid component', () => {
        const wrapper = shallow(<Patient />);
        expect(wrapper.find(Grid).length).toBe(13);
    });

    test('Renders a Box component', () => {
        const wrapper = shallow(<Patient />);
        expect(wrapper.find(Box).length).toBe(1);
    });

    test('Renders a Copyright component', () => {
        const wrapper = shallow(<Patient />);
        expect(wrapper.find(Copyright).length).toBe(1);
    });
});