import React from "react";
import Banner from "../components/UI/Banner/Banner";
import { shallow, mount } from "enzyme";

describe('Testing Banner Component', () => {

    // Render the banner without any errors

    test('Banner renders without crashing', () => {
        const wrapper = shallow(<Banner />);
        expect(wrapper.instance()).toBeDefined();
    })

    // displays the correct text inside the component

    test('Banner displays the correct input passed to it', () => {
        const TestingInput = 'Banner Works'
    const wrapper = shallow(<Banner>{TestingInput}</Banner>)
        expect(wrapper.props().children).toBe(TestingInput)
    })

})