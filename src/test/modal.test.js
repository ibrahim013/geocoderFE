import React from 'react';
import { mount } from 'enzyme';
import CustomModal from '../component/customModal';

describe('Modal', () => {
  let props;
  let wrapper;
  beforeEach(()=> {
    props = {
      show: false,
      handleChange: jest.fn(),
      handleClose: jest.fn(),
      handleSubmit: jest.fn()
    }
    wrapper = mount(<CustomModal {...props}/>)
  });
  it('should mount modal componet', () => {
    expect(wrapper.find('Button').length).toBe(0);
    expect(wrapper.find('Form').length).toBe(0);
    props.show = true;
    wrapper = mount(<CustomModal {...props}/>)
    expect(wrapper.find('Button').length).toBe(2);
    expect(wrapper.find('Form').length).toBe(1)
  });

  it('should close modal on handleClose call', () => {
    props = {
      ...props,
      show: true
    }
    wrapper = mount(<CustomModal {...props}/>);
    let cancelButton = wrapper.find('Button').at(0);
    cancelButton.simulate('click');
    expect(props.handleClose).toHaveBeenCalled();
  });

  it('should submit address on handleSubmit call', () => {
    props = {
      ...props,
      show: true
    }
    wrapper = mount(<CustomModal {...props}/>);
    let addMapButton = wrapper.find('Button').at(1);
    addMapButton.simulate('click');
    expect(props.handleSubmit).toHaveBeenCalled();
  });
})
