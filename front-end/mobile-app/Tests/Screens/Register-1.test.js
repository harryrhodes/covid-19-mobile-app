import * as React from 'react';
import { shallow } from 'enzyme';

import Register1 from '../../Screens/Register-1';
import { ScrollView, SafeAreaView, View } from "react-native";
import {
    TextInput,
    Button,
    Card,
    Title,
    ActivityIndicator,
    ProgressBar,
    HelperText,
    Text,
} from "react-native-paper";

describe('<Register1 />', () => {
    beforeAll(() => {
        jest
            .spyOn(React, 'useContext')
            .mockImplementation(() => ({ user: { patientDetails: { status: '' }, firstName: 'test', lastName: 'test' } }))
    });

    test('Renders a SafeAreaView component', () => {
        const wrapper = shallow(<Register1 />);
        expect(wrapper.find(SafeAreaView).length).toBe(1);
    });

    test('Renders a ScrollView component', () => {
        const wrapper = shallow(<Register1 />);
        expect(wrapper.find(ScrollView).length).toBe(1);
    });

    test('Renders a View component', () => {
        const wrapper = shallow(<Register1 />);
        expect(wrapper.find(View).length).toBe(1);
    });

    test('Renders a Title component', () => {
        const wrapper = shallow(<Register1 />);
        expect(wrapper.find(Title).length).toBe(1);
    });

    test('Renders text inside a Title component', () => {
        const wrapper = shallow(<Register1 />);
        expect(wrapper.find(Title).text()).toBe('<Title />');
    });

    test('Renders a ProgressBar component', () => {
        const wrapper = shallow(<Register1 />);
        expect(wrapper.find(ProgressBar).length).toBe(1);
    });

    test('Renders a Card component', () => {
        const wrapper = shallow(<Register1 />);
        expect(wrapper.find(Card).length).toBe(1);
    });

    test('Renders a Card.Content component', () => {
        const wrapper = shallow(<Register1 />);
        expect(wrapper.find(Card.Content).length).toBe(1);
    });

    test('Renders a TextInput component', () => {
        const wrapper = shallow(<Register1 />);
        expect(wrapper.find(TextInput).length).toBe(3);
    });

    test('Renders a HelperText component', () => {
        const wrapper = shallow(<Register1 />);
        expect(wrapper.find(HelperText).length).toBe(3);
    });

    test('Renders a Text component', () => {
        const wrapper = shallow(<Register1 />);
        expect(wrapper.find(Text).length).toBe(5);
    });

    test('Renders text inside a Text component', () => {
        const wrapper = shallow(<Register1 />);
        expect(wrapper.find(Text).first().text()).toBe('Password requirements:');
    });

    test('Renders a Button component', () => {
        const wrapper = shallow(<Register1 />);
        expect(wrapper.find(Button).length).toBe(2);
    });

    test('Renders text inside a Button component', () => {
        const wrapper = shallow(<Register1 />);
        expect(wrapper.find(Button).first().text()).toBe('Continue');
    });

    test('Renders a ActivityIndicator component', () => {
        const wrapper = shallow(<Register1 />);
        expect(wrapper.find(ActivityIndicator).length).toBe(1);
    });
});