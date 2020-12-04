import React from 'react';
import { shallow } from 'enzyme';

import SignIn from '../../Pages/SignIn';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Copyright from "../../Components/Copyright";

describe('<SignIn />', () => {
    test('Renders a Container component', () => {
        const wrapper = shallow(<SignIn />);
        expect(wrapper.find(Container).length).toBe(1);
    });

    test('Renders a CssBaseline component', () => {
        const wrapper = shallow(<SignIn />);
        expect(wrapper.find(CssBaseline).length).toBe(1);
    });

    test('Renders a Avatar component', () => {
        const wrapper = shallow(<SignIn />);
        expect(wrapper.find(Avatar).length).toBe(1);
    });

    test('Renders a LockOutlinedIcon component', () => {
        const wrapper = shallow(<SignIn />);
        expect(wrapper.find(LockOutlinedIcon).length).toBe(1);
    });

    test('Renders a Typography component', () => {
        const wrapper = shallow(<SignIn />);
        expect(wrapper.find(Typography).length).toBe(1);
    });

    test('Renders a TextField component', () => {
        const wrapper = shallow(<SignIn />);
        expect(wrapper.find(TextField).length).toBe(2);
    });

    test('Renders a Button component', () => {
        const wrapper = shallow(<SignIn />);
        expect(wrapper.find(Button).length).toBe(1);
    });

    test('Renders a Box component', () => {
        const wrapper = shallow(<SignIn />);
        expect(wrapper.find(Box).length).toBe(1);
    });

    test('Renders a Copyright component', () => {
        const wrapper = shallow(<SignIn />);
        expect(wrapper.find(Copyright).length).toBe(1);
    });
});