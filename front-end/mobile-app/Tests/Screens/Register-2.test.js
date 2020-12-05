import * as React from 'react';
import { shallow } from 'enzyme';

import Register2 from '../../Screens/Register-2';
import { SafeAreaView, View } from "react-native";
import {
    TextInput,
    Button,
    Card,
    Title,
    ProgressBar,
    ActivityIndicator,
    HelperText,
    Text,
} from "react-native-paper";

describe('<Register2 />', () => {
    test('Renders a SafeAreaView component', () => {
        const wrapper = shallow(<Register2 />);
        expect(wrapper.find(SafeAreaView).length).toBe(1);
    });

    test('Renders a View component', () => {
        const wrapper = shallow(<Register2 />);
        expect(wrapper.find(View).length).toBe(1);
    });

    test('Renders a Title component', () => {
        const wrapper = shallow(<Register2 />);
        expect(wrapper.find(Title).length).toBe(1);
    });

    test('Renders text inside a Title component', () => {
        const wrapper = shallow(<Register2 />);
        expect(wrapper.find(Title).text()).toBe('<Title />');
    });

    test('Renders a ProgressBar component', () => {
        const wrapper = shallow(<Register2 />);
        expect(wrapper.find(ProgressBar).length).toBe(1);
    });

    test('Renders a Card component', () => {
        const wrapper = shallow(<Register2 />);
        expect(wrapper.find(Card).length).toBe(1);
    });

    test('Renders a Card.Content component', () => {
        const wrapper = shallow(<Register2 />);
        expect(wrapper.find(Card.Content).length).toBe(1);
    });

    test('Renders a TextInput component', () => {
        const wrapper = shallow(<Register2 />);
        expect(wrapper.find(TextInput).length).toBe(6);
    });

    test('Renders a HelperText component', () => {
        const wrapper = shallow(<Register2 />);
        expect(wrapper.find(HelperText).length).toBe(6);
    });

    test('Renders a Text component', () => {
        const wrapper = shallow(<Register2 />);
        expect(wrapper.find(Text).length).toBe(1);
    });

    test('Renders text inside a Text component', () => {
        const wrapper = shallow(<Register2 />);
        expect(wrapper.find(Text).first().text()).toBe('All fields marked Required cannot be left blank.');
    });

    test('Renders a Button component', () => {
        const wrapper = shallow(<Register2 />);
        expect(wrapper.find(Button).length).toBe(2);
    });

    test('Renders text inside a Button component', () => {
        const wrapper = shallow(<Register2 />);
        expect(wrapper.find(Button).first().text()).toBe('Continue');
    });

    test('Renders a ActivityIndicator component', () => {
        const wrapper = shallow(<Register2 />);
        expect(wrapper.find(ActivityIndicator).length).toBe(1);
    });
});