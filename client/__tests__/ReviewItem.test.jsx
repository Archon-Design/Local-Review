import React from 'react';
import ReviewItem from '../components/ReviewItem.jsx';
import { shallow } from 'enzyme';

const sampleReview = {
  _id: 3,
  username: 'Tony Stark',
  thumbnail: 'https://hack-reactor-images.s3-us-west-1.amazonaws.com/people/person-1.jpg',
  resident: false,
  type: 'commute',
  posted: Date.now(),
  message: "They have neighborhood potlucks and Every Halloween they have a neighborhood Block party Where everyone can gather and share recipes and other things!!",
  liked: 9
}

describe('<ReviewItem />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ReviewItem flag={true} review={sampleReview} selected={false} color={'#00adbb'} />);
  });
  it('Review Item component exists', () => {
    expect(wrapper.find('ReviewItem__StyledReview')).toExist();
  });
  it('displays username correctly', () => {
    expect(wrapper.find('.username').text()).toBe('Tony Stark');
  });
});