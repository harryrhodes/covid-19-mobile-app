import React from 'react';
import { shallow } from 'enzyme';

import Copyright from '../../Components/Copyright';
import Typography from "@material-ui/core/Typography";

describe('<Copyright />', () => {
    test('Renders a Typography component', () => {
        const wrapper = shallow(<Copyright />);
        expect(wrapper.find(Typography).length).toBe(1);
    });
});