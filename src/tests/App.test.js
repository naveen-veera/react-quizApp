import React from "react";
import App from "../App";
import { shallow, mount } from "enzyme";


var wrapper;
describe('Testing App Component', () => {

   // App Component renders without crashing 
    test('App renders without crashing', () => {
        wrapper = mount(<App />);
        expect(wrapper.instance()).toBeDefined();
        wrapper.unmount();
    });

    // Testing the Start Quiz button 

    test('Testing the Start Button inside the App Component', () => {
        wrapper = mount(<App />);
        expect(wrapper.find('h1 center').text()).toBe('Quizz App');
        expect(wrapper.find('button').instance()).toBeDefined();
        wrapper.unmount();
    });

    // Checking the UI after clicking the Start Quiz button

    test('App Component after clicking the Start Button', () => {
        wrapper = mount(<App />);
        wrapper.find('Button').simulate('click')
        wrapper.find('Button').forEach(node => {
            expect(node.text()).not.toBe('Start Quiz');
        })
        wrapper.unmount();
    });

    // After finishing all the questions, checking whether the show result button shows up

    test('Showing the "Show Results" button', () => {
        wrapper = mount(<App />);
        wrapper.find('Button').simulate('click')
        wrapper.find('Button').forEach(node => {
            expect(node.simulate('click'));
        });
        
        expect(wrapper.find('Button').last().text()).toBe(' Show Results ');
        wrapper.unmount();
    });

    // checking the Banner component works after clicking the Show Results button

    test('Update UI After Clicking "Show Results" button', () => {
        wrapper = mount(<App />);
        wrapper.find('Button').simulate('click')
        wrapper.find('Button').forEach(node => {
            expect(node.simulate('click'));
        });
        wrapper.find('Button').last().simulate('click');
        expect(wrapper.find('Button').text()).toBe('Start Quiz');

        wrapper.instance().setState({
            questionsCorrect : 5
        });

        expect(wrapper.find('Banner').text()).toEqual("You have answered 5 / 5  Correctly")

    })
})