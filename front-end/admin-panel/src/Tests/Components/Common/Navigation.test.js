import React from 'react';
import { shallow } from 'enzyme';

import Navigation from '../../../Components/Common/Navigation';
import {
    AppBar,
    CssBaseline,
    Toolbar,
    Button,
    Drawer,
    IconButton,
    Divider,
    List,
    Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

describe('<Navigation />', () => {
    test('Renders a css baseline component', () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper.find(CssBaseline).length).toBe(1);
    });

    test('Renders a app bar component', () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper.find(AppBar).length).toBe(1);
    });

    test('Renders a tool bar component', () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper.find(Toolbar).length).toBe(1);
    });

    test('Renders a icon button component', () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper.find(IconButton).length).toBe(2);
    });

    test('Renders a menu icon component', () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper.find(MenuIcon).length).toBe(1);
    });

    test('Renders a typography component', () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper.find(Typography).length).toBe(1);
    });

    test('Renders correct text in the typography component', () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper.find(Typography).text()).toBe('Valhalla Tracker Dashboard');
    });

    test('Renders a button component', () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper.find(Button).length).toBe(2);
    });

    test('Renders correct text in the button component', () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper.find(Button).first().text()).toBe('My Account');
    });

    test('Renders a drawer component', () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper.find(Drawer).length).toBe(1);
    });

    test('Renders a chevron left icon component', () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper.find(ChevronLeftIcon).length).toBe(1);
    });

    test('Renders a divider component', () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper.find(Divider).length).toBe(3);
    });

    test('Renders a divider list', () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper.find(List).length).toBe(3);
    });
});