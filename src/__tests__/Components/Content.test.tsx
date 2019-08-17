
import React from 'react';
import { shallow } from 'enzyme';
import { Content } from '../../components/Content';
import { Input } from '../../components/Input';

describe('Test the content by a mock value', () => {
  it('test a mock array for the content render', () => {
    const props = {textValue: 'bruno', data: ['bruno']}
    const wrapper = shallow(<Content {...props}/>)
    expect(wrapper.text()).toEqual('bruno')
  })

})