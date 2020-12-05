import * as React from 'react';
import { shallow } from 'enzyme';

import SymptomsCard from '../../../../Components/Home/SymptomsCard/SymptomsCard';
import { View } from "react-native";
import { Headline, Card, Chip } from "react-native-paper";

describe('<SymptomsCard />', () => {
    beforeAll(() => {
        jest
            .spyOn(React, 'useContext')
            .mockImplementation(() => ({ user: { patientDetails: { status: '' }, symptoms: [] } }))
    });

    test('Renders a View component', () => {
        const wrapper = shallow(<SymptomsCard />);
        expect(wrapper.find(View).length).toBe(1);
    });

    test('Renders a Card component', () => {
        const wrapper = shallow(<SymptomsCard />);
        expect(wrapper.find(Card).length).toBe(1);
    });

    test('Renders a Card.Title component', () => {
        const wrapper = shallow(<SymptomsCard />);
        expect(wrapper.find(Card.Title).length).toBe(1);
    });

    test('Renders a Card.Content component', () => {
        const wrapper = shallow(<SymptomsCard />);
        expect(wrapper.find(Card.Content).length).toBe(1);
    });

    test('Renders a Headline component', () => {
        const wrapper = shallow(<SymptomsCard />);
        expect(wrapper.find(Headline).length).toBe(1);
    });
});