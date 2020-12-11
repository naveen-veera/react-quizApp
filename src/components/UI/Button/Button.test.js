import React from "react";
import Button from "./Button";
import { shallow, mount } from "enzyme";

describe('Testing Button Component', () => {

    // render the button without any error
    
    test('Button renders without crashing', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.instance()).toBeDefined();
    })

    // displays the correct text inside the component

    test('Button displays the correct input passed to it', () => {
        const TestingInput = 'Button Works'
    const wrapper = shallow(<Button>{TestingInput}</Button>)
        expect(wrapper.props().children).toBe(TestingInput)
    })

})