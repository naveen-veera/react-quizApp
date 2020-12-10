import React from "react";
import Button from "./Button";
import { shallow, mount } from "enzyme";

describe('Testing Button Component', () => {

    test('Button renders without crashing', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.instance()).toBeDefined();
    })

    test('Button displays the correct input passed to it', () => {
        const TestingInput = 'Button Works'
    const wrapper = shallow(<Button>{TestingInput}</Button>)
        expect(wrapper.props().children).toBe(TestingInput)
    })

})