import * as React from 'react';
import { shallow } from 'enzyme';

import AccountSettings from '../../Screens/AccountSettings';
import { StyleSheet, SafeAreaView, ScrollView, Keyboard } from "react-native";
import {
    TextInput,
    Button,
    Card,
    Title,
    Subheading,
    Avatar,
    HelperText,
    ActivityIndicator,
} from "react-native-paper";


describe('<AccountSettings />', () => {
    beforeAll(() => {
        jest
            .spyOn(React, 'useContext')
            .mockImplementation(() => ({ user: { patientDetails: { status: '' }, firstName: 'test', lastName: 'test' } }))
    });

    test('Renders a SafeAreaView component', () => {
        const wrapper = shallow(<AccountSettings />);
        expect(wrapper.find(SafeAreaView).length).toBe(1);
    });

    test('Renders a ScrollView component', () => {
        const wrapper = shallow(<AccountSettings />);
        expect(wrapper.find(ScrollView).length).toBe(1);
    });

    test('Renders a Avatar.Text component', () => {
        const wrapper = shallow(<AccountSettings />);
        expect(wrapper.find(Avatar.Text).length).toBe(1);
    });

    test('Renders a Title component', () => {
        const wrapper = shallow(<AccountSettings />);
        expect(wrapper.find(Title).length).toBe(1);
    });

    // test('Renders text inside a Title component', () => {
    //     const wrapper = shallow(<AccountSettings />);
    //     expect(wrapper.find(Title).text()).toBe('Account Settings');
    // });

    test('Renders a Card component', () => {
        const wrapper = shallow(<AccountSettings />);
        expect(wrapper.find(Card).length).toBe(1);
    });

    test('Renders a Card.Content component', () => {
        const wrapper = shallow(<AccountSettings />);
        expect(wrapper.find(Card.Content).length).toBe(1);
    });

    test('Renders a Subheading component', () => {
        const wrapper = shallow(<AccountSettings />);
        expect(wrapper.find(Subheading).length).toBe(3);
    });

    test('Renders text inside a first Subheading component', () => {
        const wrapper = shallow(<AccountSettings />);
        expect(wrapper.find(Subheading).first().text()).toBe('<Subheading />');
    });

    test('Renders a TextInput component', () => {
        const wrapper = shallow(<AccountSettings />);
        expect(wrapper.find(TextInput).length).toBe(3);
    });

    test('Renders a HelperText component', () => {
        const wrapper = shallow(<AccountSettings />);
        expect(wrapper.find(HelperText).length).toBe(5);
    });

    test('Renders a ActivityIndicator component', () => {
        const wrapper = shallow(<AccountSettings />);
        expect(wrapper.find(ActivityIndicator).length).toBe(1);
    });

    test('Renders a Button component', () => {
        const wrapper = shallow(<AccountSettings />);
        expect(wrapper.find(Button).length).toBe(3);
    });

    test('Renders text inside a Button component', () => {
        const wrapper = shallow(<AccountSettings />);
        expect(wrapper.find(Button).first().text()).toBe('Change Username');
    });
});