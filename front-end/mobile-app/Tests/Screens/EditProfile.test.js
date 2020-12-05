import * as React from 'react';
import { shallow } from 'enzyme';

import EditProfile from '../../Screens/EditProfile';
import { SafeAreaView, ScrollView, Keyboard } from "react-native";
import {
    TextInput,
    Button,
    Card,
    Title,
    Subheading,
    ActivityIndicator,
    Avatar,
    HelperText,
} from "react-native-paper";


describe('<EditProfile />', () => {
    beforeAll(() => {
        jest
            .spyOn(React, 'useContext')
            .mockImplementation(() => ({ user: { patientDetails: { status: '' }, firstName: 'test', lastName: 'test' } }))
    });

    test('Renders a SafeAreaView component', () => {
        const wrapper = shallow(<EditProfile />);
        expect(wrapper.find(SafeAreaView).length).toBe(1);
    });

    test('Renders a ScrollView component', () => {
        const wrapper = shallow(<EditProfile />);
        expect(wrapper.find(ScrollView).length).toBe(1);
    });

    test('Renders a Avatar.Text component', () => {
        const wrapper = shallow(<EditProfile />);
        expect(wrapper.find(Avatar.Text).length).toBe(1);
    });

    test('Renders a Title component', () => {
        const wrapper = shallow(<EditProfile />);
        expect(wrapper.find(Title).length).toBe(1);
    });

    // test('Renders text inside a Title component', () => {
    //     const wrapper = shallow(<EditProfile />);
    //     expect(wrapper.find(Title).text()).toBe('Account Settings');
    // });

    test('Renders a Card component', () => {
        const wrapper = shallow(<EditProfile />);
        expect(wrapper.find(Card).length).toBe(2);
    });

    test('Renders a Card.Content component', () => {
        const wrapper = shallow(<EditProfile />);
        expect(wrapper.find(Card.Content).length).toBe(2);
    });

    test('Renders a Subheading component', () => {
        const wrapper = shallow(<EditProfile />);
        expect(wrapper.find(Subheading).length).toBe(2);
    });

    test('Renders text inside a first Subheading component', () => {
        const wrapper = shallow(<EditProfile />);
        expect(wrapper.find(Subheading).first().text()).toBe('<Subheading />');
    });

    test('Renders a TextInput component', () => {
        const wrapper = shallow(<EditProfile />);
        expect(wrapper.find(TextInput).length).toBe(13);
    });

    test('Renders a HelperText component', () => {
        const wrapper = shallow(<EditProfile />);
        expect(wrapper.find(HelperText).length).toBe(8);
    });

    test('Renders a ActivityIndicator component', () => {
        const wrapper = shallow(<EditProfile />);
        expect(wrapper.find(ActivityIndicator).length).toBe(2);
    });

    test('Renders a Button component', () => {
        const wrapper = shallow(<EditProfile />);
        expect(wrapper.find(Button).length).toBe(2);
    });

    test('Renders text inside a Button component', () => {
        const wrapper = shallow(<EditProfile />);
        expect(wrapper.find(Button).first().text()).toBe('Update Profile');
    });
});