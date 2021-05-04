import React from 'react';
import ReviewItem from '../components/ReviewItem.jsx';
import { shallow } from 'enzyme';

describe('<ReviewItem />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ReviewItem />);
  });
  it('Review Item component exists', () => {
    expect(wrapper.find('Fragment')).toExist();
  });
});