import React from 'react';
import { shallow } from 'enzyme';
import Reviews from '../components/Reviews.jsx';

describe('<Reviews />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Reviews />);
  })
  it('renders on the page', () => {
    expect(wrapper.find('')).toExist();
  })
});
