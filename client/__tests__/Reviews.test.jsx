import React from 'react';
import { shallow } from 'enzyme';
import Reviews from '../components/Reviews.jsx'

const sampleReviews = [
  {
    _id: 3,
    username: 'Tony Stark',
    thumbnail: 'https://hack-reactor-images.s3-us-west-1.amazonaws.com/people/person-1.jpg',
    resident: false,
    type: 'commute',
    posted: Date.now(),
    message: "They have neighborhood potlucks and Every Halloween they have a neighborhood Block party Where everyone can gather and share recipes and other things!!",
    liked: 9
  },
  {
    _id: 3,
    username: 'Barry Allen',
    thumbnail: 'https://hack-reactor-images.s3-us-west-1.amazonaws.com/people/person-2.jpg',
    resident: true,
    type: 'dogOwner',
    posted: Date.now(),
    message: "They have neighborhood potlucks and Every Halloween they have a neighborhood Block party Where everyone can gather and share recipes and other things!!",
    liked: 3
  },
  {
    _id: 3,
    username: 'Peter Pan',
    thumbnail: 'https://hack-reactor-images.s3-us-west-1.amazonaws.com/people/person-3.jpg',
    resident: false,
    type: 'community',
    posted: Date.now(),
    message: "They have neighborhood potlucks and Every Halloween they have a neighborhood Block party Where everyone can gather and share recipes and other things!!",
    liked: 6
  },
]

describe('<Reviews />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Reviews reviews={sampleReviews} />);
  })
  it('renders on the page', () => {
    expect(wrapper.find('Fragment')).toExist();
  });
});
