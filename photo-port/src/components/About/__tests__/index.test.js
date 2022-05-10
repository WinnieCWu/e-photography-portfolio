import React from 'react';
//so react can enable the components to fxn properly so we can test them 
import { render, cleanup } from '@testing-library/react';
//retrieve the 2 fxns to 1) render the component and 2) remove comp from dom to prevent memory leaking
import '@testing-library/jest-dom/extend-expect';
//jest-dom offers access to custom matchers used to test DOM elements
import About from '..';
//import the component we'll be testing- the About component

afterEach(cleanup);
//ensures that after each test, won't have leftover memory data that could give false results

//declare the component we're testing
describe('About component', () => {
    //renders About test
    //First Test: verify that the component is rendering
    ///a string declares what is being tested, and the cb fxn runs the test
    it('renders', () => { 
        render(<About />);
    });
    //Second Test - a 'test case' - will compare snapshot version of the DOM node structure
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        //test and compare if the expected and actual outcomes match
        expect(asFragment()).toMatchSnapshot();
    });
  })