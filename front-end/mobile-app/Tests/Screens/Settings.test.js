import * as React from 'react';
import { shallow } from 'enzyme';

import Settings from '../../Screens/Settings';
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { List, Button, Card, Title, Avatar } from "react-native-paper";

describe('<Settings />', () => {
    beforeAll(() => {
        jest
            .spyOn(React, 'useContext')
            .mockImplementation(() => ({ user: { patientDetails: { status: '' }, firstName: 'test', lastName: 'test' } }))
    });

    test('Renders a SafeAreaView component', () => {
        const wrapper = shallow(<Settings />);
        expect(wrapper.find(SafeAreaView).length).toBe(1);
    });

    test('Renders a ScrollView component', () => {
        const wrapper = shallow(<Settings />);
        expect(wrapper.find(ScrollView).length).toBe(1);
    });

    test('Renders a Avatar.Text component', () => {
        const wrapper = shallow(<Settings />);
        expect(wrapper.find(Avatar.Text).length).toBe(1);
    });

    test('Renders a Title component', () => {
        const wrapper = shallow(<Settings />);
        expect(wrapper.find(Title).length).toBe(1);
    });

    test('Renders text inside a Title component', () => {
        const wrapper = shallow(<Settings />);
        expect(wrapper.find(Title).text()).toBe('<Title />');
    });

    test('Renders a Card component', () => {
        const wrapper = shallow(<Settings />);
        expect(wrapper.find(Card).length).toBe(1);
    });

    test('Renders a Card.Content component', () => {
        const wrapper = shallow(<Settings />);
        expect(wrapper.find(Card.Content).length).toBe(1);
    });

    test('Renders a List.Item component', () => {
        const wrapper = shallow(<Settings />);
        expect(wrapper.find(List.Item).length).toBe(2);
    });

    test('Renders a Button component', () => {
        const wrapper = shallow(<Settings />);
        expect(wrapper.find(Button).length).toBe(1);
    });

    test('Renders text inside a Button component', () => {
        const wrapper = shallow(<Settings />);
        expect(wrapper.find(Button).first().text()).toBe('Log Out');
    });
});