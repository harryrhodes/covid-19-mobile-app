import * as React from 'react';
import { shallow } from 'enzyme';

import Register3 from '../../Screens/Register-3';
import { SafeAreaView, View } from "react-native";
import {
    TextInput,
    Button,
    Card,
    Title,
    ProgressBar,
    ActivityIndicator,
    HelperText,
    RadioButton,
    Text,
} from "react-native-paper";

describe('<Register3 />', () => {
    test('Renders a SafeAreaView component', () => {
        const wrapper = shallow(<Register3 />);
        expect(wrapper.find(SafeAreaView).length).toBe(1);
    });

    test('Renders a View component', () => {
        const wrapper = shallow(<Register3 />);
        expect(wrapper.find(View).length).toBe(1);
    });

    test('Renders a Title component', () => {
        const wrapper = shallow(<Register3 />);
        expect(wrapper.find(Title).length).toBe(1);
    });

    test('Renders text inside a Title component', () => {
        const wrapper = shallow(<Register3 />);
        expect(wrapper.find(Title).text()).toBe('<Title />');
    });

    test('Renders a ProgressBar component', () => {
        const wrapper = shallow(<Register3 />);
        expect(wrapper.find(ProgressBar).length).toBe(1);
    });

    test('Renders a Card component', () => {
        const wrapper = shallow(<Register3 />);
        expect(wrapper.find(Card).length).toBe(9);
    });

    test('Renders a Card.Content component', () => {
        const wrapper = shallow(<Register3 />);
        expect(wrapper.find(Card.Content).length).toBe(9);
    });

    test('Renders a RadioButton.Group component', () => {
        const wrapper = shallow(<Register3 />);
        expect(wrapper.find(RadioButton.Group).length).toBe(6);
    });

    test('Renders a RadioButton.Item component', () => {
        const wrapper = shallow(<Register3 />);
        expect(wrapper.find(RadioButton.Item).length).toBe(23);
    });

    test('Renders a TextInput component', () => {
        const wrapper = shallow(<Register3 />);
        expect(wrapper.find(TextInput).length).toBe(1);
    });

    test('Renders a HelperText component', () => {
        const wrapper = shallow(<Register3 />);
        expect(wrapper.find(HelperText).length).toBe(1);
    });

    test('Renders a Text component', () => {
        const wrapper = shallow(<Register3 />);
        expect(wrapper.find(Text).length).toBe(2);
    });

    test('Renders text inside a Text component', () => {
        const wrapper = shallow(<Register3 />);
        expect(wrapper.find(Text).first().text()).toBe('PLEASE LOOK OVER THIS SECTION CAREFULLY');
    });

    test('Renders a Button component', () => {
        const wrapper = shallow(<Register3 />);
        expect(wrapper.find(Button).length).toBe(2);
    });

    test('Renders text inside a Button component', () => {
        const wrapper = shallow(<Register3 />);
        expect(wrapper.find(Button).first().text()).toBe('Continue');
    });

    test('Renders a ActivityIndicator component', () => {
        const wrapper = shallow(<Register3 />);
        expect(wrapper.find(ActivityIndicator).length).toBe(1);
    });
});