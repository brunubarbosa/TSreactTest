
import React from 'react';
import { shallow } from 'enzyme';
import { Content } from '../../components/Content';
import { Input } from '../../components/Input';

describe('Test the input value by a mock', () => {
  it('test value input', () => {
    const props = {textValue: 'bruno'}
    const wrapper = shallow(<Input {...props}/>)
    expect(wrapper.find('input').props().value).toEqual('bruno')
  })

})