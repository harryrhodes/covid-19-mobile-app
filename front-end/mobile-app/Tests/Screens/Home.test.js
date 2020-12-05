import * as React from 'react';
import { shallow } from 'enzyme';

import Home from '../../Screens/Home';
import { SafeAreaView } from "react-native";
import { Button } from "react-native-paper";
import StatusCard from "../../Components/Home/StatusCard/StatusCard";
import SymptomsCard from "../../Components/Home/SymptomsCard/SymptomsCard";
import BookTestCard from "../../Components/Home/BookTestCard/BookTestCard";
import TestResultCard from "../../Components/Home/TestResultCard/TestResultCard";
import LogSymptomsCard from "../../Components/Home/LogSymptomsCard/LogSymptomsCard";
import Welcome from "../../Components/Home/Welcome/Welcome";

describe('<Home />', () => {
    beforeAll(() => {
        jest
            .spyOn(React, 'useContext')
            .mockImplementation(() => ({ user: { patientDetails: { status: '' }, firstName: 'test', lastName: 'test' } }))
    });

    test('Renders a SafeAreaView component', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find(SafeAreaView).length).toBe(1);
    });

    test('Renders a Welcome component', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find(Welcome).length).toBe(1);
    });

    test('Renders text inside a Welcome component', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find(Welcome).text()).toBe('<Welcome />');
    });

    test('Renders a StatusCard component', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find(StatusCard).length).toBe(1);
    });

    test('Renders a SymptomsCard component', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find(SymptomsCard).length).toBe(1);
    });

    test('Renders a BookTestCard component', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find(BookTestCard).length).toBe(1);
    });

    test('Renders a LogSymptomsCard component', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find(LogSymptomsCard).length).toBe(1);
    });

    test('Renders a Button component', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find(Button).length).toBe(1);
    });

    test('Renders text inside a Button component', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find(Button).first().text()).toBe('Log Out');
    });
});