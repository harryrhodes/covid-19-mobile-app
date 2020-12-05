import * as React from 'react';
import { shallow } from 'enzyme';

import BookTestCard from '../../../../Components/Home/BookTestCard/BookTestCard';
import { View } from "react-native";
import { Card, Button } from "react-native-paper";


describe('<BookTestCard />', () => {
    beforeAll(() => {
        jest
            .spyOn(React, 'useContext')
            .mockImplementation(() => ({ user: { patientDetails: { status: '' } } }))
    });

    test('Renders a View component', () => {
        const wrapper = shallow(<BookTestCard />);
        expect(wrapper.find(View).length).toBe(1);
    });

    test('Renders a Card component', () => {
        const wrapper = shallow(<BookTestCard />);
        expect(wrapper.find(Card).length).toBe(1);
    });

    test('Renders a Card.Title component', () => {
        const wrapper = shallow(<BookTestCard />);
        expect(wrapper.find(Card.Title).length).toBe(1);
    });

    test('Renders a Card.Content component', () => {
        const wrapper = shallow(<BookTestCard />);
        expect(wrapper.find(Card.Content).length).toBe(1);
    });

    test('Renders a Button component', () => {
        const wrapper = shallow(<BookTestCard />);
        expect(wrapper.find(Button).length).toBe(1);
    });

    test('Renders a text inside a Button component', () => {
        const wrapper = shallow(<BookTestCard />);
        expect(wrapper.find(Button).text()).toBe('Book a test now');
    });
});