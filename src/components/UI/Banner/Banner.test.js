import React from "react";
import Banner from "./Banner";
import { shallow, mount } from "enzyme";

describe('Testing Banner Component', () => {

    test('Banner renders without crashing', () => {
        const wrapper = shallow(<Banner />);
        expect(wrapper.instance()).toBeDefined();
    })

    test('Banner displays the correct input passed to it', () => {
        const TestingInput = 'Banner Works'
    const wrapper = shallow(<Banner>{TestingInput}</Banner>)
        expect(wrapper.props().children).toBe(TestingInput)
    })

})