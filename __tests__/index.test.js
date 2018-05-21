import React from 'react'
import { shallow } from 'enzyme'
import App from '../pages/index.js'

describe('<App />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toHaveLength(1)
  })
})
