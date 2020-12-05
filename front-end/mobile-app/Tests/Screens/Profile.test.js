import * as React from 'react';
import { shallow } from 'enzyme';

import Profile from '../../Screens/Profile';
import { SafeAreaView } from "react-native";

describe('<Profile />', () => {
    test('Renders a SafeAreaView component', () => {
        const wrapper = shallow(<Profile />);
        expect(wrapper.find(SafeAreaView).length).toBe(1);
    });
});