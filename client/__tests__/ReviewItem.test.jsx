import React from 'react';
import ReviewItem from '../components/ReviewItem.jsx';
import { mount } from 'enzyme';

const sampleReview = {
  _id: 3,
  username: 'Tony Stark',
  thumbnail: 'https://hack-reactor-images.s3-us-west-1.amazonaws.com/people/person-1.jpg',
  resident: false,
  type: 'commute',
  posted: new Date.now(),
  message: "They have neighborhood potlucks and Every Halloween they have a neighborhood Block party Where everyone can gather and share recipes and other things!!",
  liked: 9
}

describe('<ReviewItem />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ReviewItem flag={true} review={sampleReview} selected={false} color={'#00adbb'} />);
  });
  it('Review Item component exists', () => {
    console.log(wrapper.debug());
    // expect(wrapper.find('ReviewItem__StyledReview')).toExist();
  });
});