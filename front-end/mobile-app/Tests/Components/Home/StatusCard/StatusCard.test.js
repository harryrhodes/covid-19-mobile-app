import * as React from 'react';
import { shallow } from 'enzyme';

import StatusCard from '../../../../Components/Home/StatusCard/StatusCard';
import { View } from "react-native";
import { Card, Chip } from "react-native-paper";

describe('<StatusCard />', () => {
    beforeAll(() => {
        jest
            .spyOn(React, 'useContext')
            .mockImplementation(() => ({ user: { patientDetails: { status: '' } } }))
    });

    test('Renders a View component', () => {
        const wrapper = shallow(<StatusCard />);
        expect(wrapper.find(View).length).toBe(1);
    });

    test('Renders a Card component', () => {
        const wrapper = shallow(<StatusCard />);
        expect(wrapper.find(Card).length).toBe(1);
    });

    test('Renders a Card.Title component', () => {
        const wrapper = shallow(<StatusCard />);
        expect(wrapper.find(Card.Title).length).toBe(1);
    });

    test('Renders a Card.Content component', () => {
        const wrapper = shallow(<StatusCard />);
        expect(wrapper.find(Card.Content).length).toBe(1);
    });

    test('Renders a Chip component', () => {
        const wrapper = shallow(<StatusCard />);
        expect(wrapper.find(Chip).length).toBe(1);
    });
});