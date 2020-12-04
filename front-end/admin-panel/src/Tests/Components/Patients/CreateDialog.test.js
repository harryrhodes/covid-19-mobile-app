import React from 'react';
import { shallow } from 'enzyme';

import AddPatient from '../../../Components/Patients/AddPatient';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import SubTitle from "../../../Components/SubTitle";
import {
    Fab,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

describe('<AddPatient />', () => {
    test('Renders a Fab component', () => {
        const wrapper = shallow(<AddPatient />);
        expect(wrapper.find(Fab).length).toBe(1);
    });

    test('Renders a AddIcon component', () => {
        const wrapper = shallow(<AddPatient />);
        expect(wrapper.find(AddIcon).length).toBe(1);
    });

    test('Renders a Dialog component', () => {
        const wrapper = shallow(<AddPatient />);
        expect(wrapper.find(Dialog).length).toBe(1);
    });

    test('Renders a DialogTitle component', () => {
        const wrapper = shallow(<AddPatient />);
        expect(wrapper.find(DialogTitle).length).toBe(1);
    });

    test('Renders correct text in the DialogTitle component', () => {
        const wrapper = shallow(<AddPatient />);
        expect(wrapper.find(DialogTitle).text()).toBe('Add New Patient');
    });

    test('Renders a DialogContent component', () => {
        const wrapper = shallow(<AddPatient />);
        expect(wrapper.find(DialogContent).length).toBe(1);
    });

    test('Renders a SubTitle component', () => {
        const wrapper = shallow(<AddPatient />);
        expect(wrapper.find(SubTitle).length).toBe(6);
    });

    test('Renders a FormControl component', () => {
        const wrapper = shallow(<AddPatient />);
        expect(wrapper.find(FormControl).length).toBe(24);
    });

    test('Renders a TextField component', () => {
        const wrapper = shallow(<AddPatient />);
        expect(wrapper.find(TextField).length).toBe(17);
    });

    test('Renders a FormLabel component', () => {
        const wrapper = shallow(<AddPatient />);
        expect(wrapper.find(FormLabel).length).toBe(15);
    });

    test('Renders a RadioGroup component', () => {
        const wrapper = shallow(<AddPatient />);
        expect(wrapper.find(RadioGroup).length).toBe(7);
    });

    test('Renders a FormControlLabel component', () => {
        const wrapper = shallow(<AddPatient />);
        expect(wrapper.find(FormControlLabel).length).toBe(27);
    });

    test('Renders a DialogActions component', () => {
        const wrapper = shallow(<AddPatient />);
        expect(wrapper.find(DialogActions).length).toBe(1);
    });

    test('Renders a Button component', () => {
        const wrapper = shallow(<AddPatient />);
        expect(wrapper.find(Button).length).toBe(2);
    });
});