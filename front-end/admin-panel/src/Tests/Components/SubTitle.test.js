import React from 'react';
import { shallow } from 'enzyme';

import SubTitle from '../../Components/SubTitle';
import Typography from '@material-ui/core/Typography';


describe('<SubTitle />', () => {
    test('Renders a Typography component', () => {
        const wrapper = shallow(<SubTitle />);
        expect(wrapper.find(Typography).length).toBe(1);
    });
});