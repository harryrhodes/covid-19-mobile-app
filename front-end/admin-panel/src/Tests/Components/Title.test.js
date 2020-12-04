import React from 'react';
import { shallow } from 'enzyme';

import Title from '../../Components/Title';
import Typography from '@material-ui/core/Typography';


describe('<Title />', () => {
    test('Renders a Typography component', () => {
        const wrapper = shallow(<Title />);
        expect(wrapper.find(Typography).length).toBe(1);
    });
});