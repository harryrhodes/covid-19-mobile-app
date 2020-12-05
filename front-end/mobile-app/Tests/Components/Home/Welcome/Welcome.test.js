import * as React from 'react';
import { shallow } from 'enzyme';

import Welcome from '../../../../Components/Home/Welcome/Welcome';
import { View } from "react-native";
import { Headline } from "react-native-paper";

describe('<Welcome />', () => {
    beforeAll(() => {
        jest
            .spyOn(React, 'useContext')
            .mockImplementation(() => ({ user: { patientDetails: { status: '' }, symptoms: [] } }))
    });

    test('Renders a View component', () => {
        const wrapper = shallow(<Welcome />);
        expect(wrapper.find(View).length).toBe(2);
    });

    test('Renders a Headline component', () => {
        const wrapper = shallow(<Welcome />);
        expect(wrapper.find(Headline).length).toBe(1);
    });
});