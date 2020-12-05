import * as React from 'react';
import { shallow } from 'enzyme';

import SymptomForm from '../../../../Components/Symptoms/SymptomForm/SymptomForm';
import { View } from "react-native";
import { Card, RadioButton, HelperText } from "react-native-paper";

describe('<SymptomForm />', () => {
    test('Renders a View component', () => {
        const wrapper = shallow(<SymptomForm />);
        expect(wrapper.find(View).length).toBe(1);
    });

    test('Renders a Card component', () => {
        const wrapper = shallow(<SymptomForm />);
        expect(wrapper.find(Card).length).toBe(1);
    });

    test('Renders a Card.Title component', () => {
        const wrapper = shallow(<SymptomForm />);
        expect(wrapper.find(Card.Title).length).toBe(1);
    });

    test('Renders a Card.Content component', () => {
        const wrapper = shallow(<SymptomForm />);
        expect(wrapper.find(Card.Content).length).toBe(1);
    });

    test('Renders a RadioButton.Group component', () => {
        const wrapper = shallow(<SymptomForm />);
        expect(wrapper.find(RadioButton.Group).length).toBe(1);
    });

    test('Renders a RadioButton.Item component', () => {
        const wrapper = shallow(<SymptomForm />);
        expect(wrapper.find(RadioButton.Item).length).toBe(2);
    });

    test('Renders a HelperText component', () => {
        const wrapper = shallow(<SymptomForm />);
        expect(wrapper.find(HelperText).length).toBe(1);
    });

    test('Renders passed in props to the HelperText component', () => {
        const wrapper = shallow(<SymptomForm errorText={'test'} />);
        expect(wrapper.find(HelperText).text()).toBe('test');
    });
});