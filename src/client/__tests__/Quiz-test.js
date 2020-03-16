// Login-test.jsimport React from 'react';
import { shallow, mount, render } from 'enzyme';
import Quiz from '../Quiz';

describe('Quiz Component', () => {
 
    // make our assertion and what we expect to happen 
    it('should render without throwing an error', () => {
      expect(shallow(<Quiz />).find('form.login').exists()).toBe(true)
    })
})