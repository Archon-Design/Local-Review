import React from 'react';
import NextButton from '../components/NextButton.jsx';
import { shallow } from 'enzyme';

describe('<NextButton/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NextButton />);
  });
  it('NextButton component exists', () => {
    expect(wrapper.find('NextButton__StyledButton')).toExist();
  });
});