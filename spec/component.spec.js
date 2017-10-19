import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import PasswordGenerator from '../src/component'
import { shallow, mount } from 'enzyme'
import TestUtils from 'react-dom/test-utils'

const {
  findRenderedDOMComponentWithTag,
  Simulate,
} = TestUtils

chai.use(chaiEnzyme)

describe('Component', () => {
  let wrapper
  const className = 'test-class-name'
  const messages = {
    inputPlaceholder: 'test input placeholder',
    generateButtonLabel: 'generate button label',
  }

  it('generates a new password when on click on generate', () => {
    wrapper = mount(
      <PasswordGenerator />
    )

    wrapper.find('.react-password-generator__button').simulate('click')
    expect(wrapper.find('.react-password-generator__input')).to.not.be.empty
  })

  it('accepts a classname as prop', () => {
    wrapper = shallow(
      <PasswordGenerator className={className} />
    )

    expect(wrapper.hasClass(className)).to.be.true
  })

  it('accepts custom messages', () => {
    wrapper = shallow(
      <PasswordGenerator messages={messages} />
    )

    expect(wrapper.find('[placeholder="' + messages.inputPlaceholder + '"]')).to.have.length(1)
    expect(wrapper.find('.react-password-generator__button').text()).to.equal(messages.generateButtonLabel)
  })

  it('tests onBlur callback', () => {
    let called = false
    const blurHandler = () => {
      called = true
      return
    }
    wrapper = mount(
      <PasswordGenerator onBlur={blurHandler} />
    )
    const input = findRenderedDOMComponentWithTag(wrapper.node, 'input')
    expect(called).to.equal(false)
    Simulate.blur(input)
    expect(called).to.equal(true)
  })

  it('tests onFocus callback', () => {
    let called = false
    const focusHandler = () => {
      called = true
      return
    }
    wrapper = mount(
      <PasswordGenerator onFocus={focusHandler} />
    )
    const input = findRenderedDOMComponentWithTag(wrapper.node, 'input')
    expect(called).to.equal(false)
    Simulate.focus(input)
    expect(called).to.equal(true)
  })
})
