import React from 'react';
import { shallow } from 'enzyme';

import Button from '../component/button';

describe('Render button', () => {
  it('should render button', () => {
    const wrapper = shallow(<Button/>);
      expect(wrapper.find('[data-test="add-map-button"]').length).toBe(1);
      expect(wrapper.find('Button').text()).toContain('Add Map');
  });
})