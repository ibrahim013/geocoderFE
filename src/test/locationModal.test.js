import React from 'react';
import { shallow } from 'enzyme';

import { LocationModal } from '../component/locationModal'
describe('modal contianer', () => {
  it('should mount modal on button click', () => {
    const wrapper = shallow(<LocationModal/>);
    expect(wrapper.find('CustomModal').length).toBe(1);
    expect(wrapper.find('Button').length).toBe(1);
  })
})