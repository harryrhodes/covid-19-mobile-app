import * as React from 'react';
import { shallow } from 'enzyme';

import TestResultCard from '../../../../Components/Home/TestResultCard/TestResultCard';
import { View } from "react-native";
import { Card, Button } from "react-native-paper";

describe('<TestResultCard />', () => {
    beforeAll(() => {
        jest
            .spyOn(React, 'useContext')
            .mockImplementation(() => ({ user: { patientDetails: { status: '' }, symptoms: [] } }))
    });

    test('Renders a View component', () => {
        const wrapper = shallow(<TestResultCard />);
        expect(wrapper.find(View).length).toBe(1);
    });

    test('Renders a Card component', () => {
        const wrapper = shallow(<TestResultCard />);
        expect(wrapper.find(Card).length).toBe(1);
    });

    test('Renders a Card.Title component', () => {
        const wrapper = shallow(<TestResultCard />);
        expect(wrapper.find(Card.Title).length).toBe(1);
    });

    test('Renders a Card.Content component', () => {
        const wrapper = shallow(<TestResultCard />);
        expect(wrapper.find(Card.Content).length).toBe(1);
    });

    test('Renders a Button component', () => {
        const wrapper = shallow(<TestResultCard />);
        expect(wrapper.find(Button).length).toBe(2);
    });

    test('Renders text inside a Button component', () => {
        const wrapper = shallow(<TestResultCard />);
        expect(wrapper.find(Button).first().text()).toBe('Positive');
    });
});