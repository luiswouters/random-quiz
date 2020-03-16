// Login-test.js
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Quiz from '../Quiz';
import configureStore from 'redux-mock-store'

describe('Quiz Component', () => {

    const initialState = {
        fetchQuestionsState : {
            questionList : [{
                "category":"History",
                "type":"multiple",
                "difficulty":"easy",
                "question":"The idea of Socialism was articulated and advanced by whom?",
                "correct_answer":"Karl Marx",
                "incorrect_answers":[
                  "Vladimir Lenin",
                  "Joseph Stalin",
                  "Vladimir Putin"
                ]
              }]
        }
    }
    const mockStore = configureStore()
    let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<Quiz store={store} />)
    })
 
    // make our assertion and what we expect to happen 
    it('should render without throwing an error', () => {
      expect(container.exists()).toBe(true)
    })
    console.log(container);
})