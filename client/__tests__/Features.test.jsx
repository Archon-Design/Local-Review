import React from 'react';
import Features from '../components/Features';
import { shallow } from 'enzyme';

describe('<Fixture />', () => {
  it('asserts checked', () => {
    const wrapper = shallow(<Features />);
    console.log('wrapper: ', wrapper.debug());
    expect(wrapper.children().text()).toBe(' Features component!')
  });
});