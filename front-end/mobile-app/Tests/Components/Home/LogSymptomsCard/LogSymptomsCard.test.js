import React from 'react';
import { shallow } from 'enzyme';

import LogSymptomsCard from '../../../../Components/Home/LogSymptomsCard/LogSymptomsCard';
import { View } from "react-native";
import { Card, Button } from "react-native-paper";

describe('<LogSymptomsCard />', () => {
    test('Renders a View component', () => {
        const wrapper = shallow(<LogSymptomsCard />);
        expect(wrapper.find(View).length).toBe(1);
    });

    test('Renders a Card component', () => {
        const wrapper = shallow(<LogSymptomsCard />);
        expect(wrapper.find(Card).length).toBe(1);
    });

    test('Renders a Card.Title component', () => {
        const wrapper = shallow(<LogSymptomsCard />);
        expect(wrapper.find(Card.Title).length).toBe(1);
    });

    test('Renders a Card.Content component', () => {
        const wrapper = shallow(<LogSymptomsCard />);
        expect(wrapper.find(Card.Content).length).toBe(1);
    });

    test('Renders a Button component', () => {
        const wrapper = shallow(<LogSymptomsCard />);
        expect(wrapper.find(Button).length).toBe(1);
    });

    test('Renders text inside the Button component', () => {
        const wrapper = shallow(<LogSymptomsCard />);
        expect(wrapper.find(Button).text()).toBe('Log Now');
    });
});