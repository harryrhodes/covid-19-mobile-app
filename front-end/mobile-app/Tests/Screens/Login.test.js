import * as React from 'react';
import { shallow } from 'enzyme';

import Login from '../../Screens/Login';
import { StyleSheet, SafeAreaView, ScrollView, Keyboard } from "react-native";
import {
    TextInput,
    Button,
    Card,
    Title,
    ActivityIndicator,
    HelperText,
} from "react-native-paper";

describe('<Login />', () => {
    beforeAll(() => {
        jest
            .spyOn(React, 'useContext')
            .mockImplementation(() => ({ user: { patientDetails: { status: '' }, firstName: 'test', lastName: 'test' } }))
    });

    test('Renders a SafeAreaView component', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find(SafeAreaView).length).toBe(1);
    });

    test('Renders a ScrollView component', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find(ScrollView).length).toBe(1);
    });

    test('Renders a Title component', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find(Title).length).toBe(1);
    });

    test('Renders text inside a Title component', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find(Title).text()).toBe('<Title />');
    });

    test('Renders a Card component', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find(Card).length).toBe(1);
    });

    test('Renders a Card.Content component', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find(Card.Content).length).toBe(1);
    });

    test('Renders a TextInput component', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find(TextInput).length).toBe(2);
    });

    test('Renders a HelperText component', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find(HelperText).length).toBe(2);
    });

    test('Renders a Button component', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find(Button).length).toBe(2);
    });

    test('Renders text inside a Button component', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find(Button).first().text()).toBe('Login');
    });

    test('Renders a Button component', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find(Button).length).toBe(2);
    });
});