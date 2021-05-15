import React from 'react';
import PrevButton from '../components/PrevButton.jsx';
import { shallow } from 'enzyme';

describe('<PrevButton />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PrevButton />);
  });
  it('PrevButton component exists', () => {
    expect(wrapper.find('PrevButton__StyledButton')).toExist();
  });
});