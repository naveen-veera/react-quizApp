import React from "react";
import Card from "./Card";
import { shallow, mount } from "enzyme";

var questionProp, wrapper, mockFunction;



describe('Testing Card Component', () => {
    beforeEach(() => {
        mockFunction = jest.fn();

        questionProp = {
            questionId : 2,
            question : "What color is are the leaves ?",
            option1 : "Blue",
            option2 : "Red",
            option3 : "Yellow",
            option4 : "Green",
            answer : "Green"
        }

        wrapper = mount(<Card 
            key={questionProp.questionId}
            question={questionProp.question}
            correctAnswerMarkUpdate={mockFunction}
            attempt={mockFunction}
            options={{
            option1: questionProp.option1,
            option2: questionProp.option2,
            option3: questionProp.option3,
            option4: questionProp.option4
            }}
            answer={questionProp.answer}
        />);
        
    })


    test('Card renders without crashing', () => {
        expect(wrapper.instance()).toBeDefined();
    });

    describe('Testing the display content of Card Component', () => {
        test('Displays the Question inside the Card question', () => {
            expect(wrapper.find('h4').text()).toBe('What color is are the leaves ?');
        })
    
        test('Displays the option inside the Card', () => {
    
            let optionsList = ['Blue', 'Red', 'Yellow', 'Green'];
            let optionIterator = 0;
            expect(wrapper.find('button')).toHaveLength(4);
            
            wrapper.find('button').forEach(node => {
                expect(node.text()).toBe(optionsList[optionIterator]);
                optionIterator++;
            });
        })
    })

})