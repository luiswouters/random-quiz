// Login-test.js
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Quiz from '../Quiz';
import configureStore from 'redux-mock-store'

describe('Quiz Component', () => {

    const initialState = {output:10}
    const mockStore = configureStore()
    let store,wrapper

    beforeEach(()=>{
        store = mockStore(initialState)
        wrapper = mount( <Provider store={store}><ConnectedHome /></Provider> )
    })
 
    // make our assertion and what we expect to happen 
    it('should render without throwing an error', () => {
      expect(shallow(<Quiz />).find('div.quiz').exists()).toBe(true)
    })
})