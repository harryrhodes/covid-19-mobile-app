import * as React from 'react';
import { shallow } from 'enzyme';

import SymptomText from '../../../../Components/Symptoms/SymptomFormText/SymptomText';
import { View } from "react-native";
import { Card, TextInput } from "react-native-paper";

describe('<SymptomText />', () => {
    test('Renders a View component', () => {
        const wrapper = shallow(<SymptomText />);
        expect(wrapper.find(View).length).toBe(1);
    });

    test('Renders a Card component', () => {
        const wrapper = shallow(<SymptomText />);
        expect(wrapper.find(Card).length).toBe(1);
    });

    test('Renders a Card.Title component', () => {
        const wrapper = shallow(<SymptomText />);
        expect(wrapper.find(Card.Title).length).toBe(1);
    });

    test('Renders a Card.Content component', () => {
        const wrapper = shallow(<SymptomText />);
        expect(wrapper.find(Card.Content).length).toBe(1);
    });

    test('Renders a TextInput component', () => {
        const wrapper = shallow(<SymptomText />);
        expect(wrapper.find(TextInput).length).toBe(1);
    });
});