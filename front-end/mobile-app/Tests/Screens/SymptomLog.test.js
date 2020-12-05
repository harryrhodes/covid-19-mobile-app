import * as React from 'react';
import { shallow } from 'enzyme';

import SymptomLog from '../../Screens/SymptomLog';
import { SafeAreaView, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import SymptomForm from "../../Components/Symptoms/SymptomForm/SymptomForm";
import SymptomFormText from "../../Components/Symptoms/SymptomFormText/SymptomText";
import SymptomService from "../../Services/SymptomService";

describe('<SymptomLog />', () => {
    beforeAll(() => {
        jest
            .spyOn(React, 'useContext')
            .mockImplementation(() => ({ user: { patientDetails: { status: '' }, firstName: 'test', lastName: 'test' } }))
    });

    test('Renders a SafeAreaView component', () => {
        const wrapper = shallow(<SymptomLog />);
        expect(wrapper.find(SafeAreaView).length).toBe(1);
    });

    test('Renders a ScrollView component', () => {
        const wrapper = shallow(<SymptomLog />);
        expect(wrapper.find(ScrollView).length).toBe(1);
    });

    test('Renders a SymptomFormText component', () => {
        const wrapper = shallow(<SymptomLog />);
        expect(wrapper.find(SymptomFormText).length).toBe(1);
    });

    test('Renders a Button component', () => {
        const wrapper = shallow(<SymptomLog />);
        expect(wrapper.find(Button).length).toBe(1);
    });

    test('Renders text inside a Button component', () => {
        const wrapper = shallow(<SymptomLog />);
        expect(wrapper.find(Button).first().text()).toBe('Submit');
    });
});