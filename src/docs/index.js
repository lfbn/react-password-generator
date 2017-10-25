import React, { Component } from 'react'
import { render } from 'react-dom'

import InputPasswordGenerator from '../component'
// In your code this would be:
// import InputPasswordGenerator from 'react-input-password-generator'

import '../../style.css'
import './style.css'

class App extends Component {
  render () {
    const messages = {
      inputPlaceholder: 'This is a custom input placeholder',
      generateButtonLabel: 'This a custom button label',
    }

    return (
      <form>
        <h1>react-input-password-generator</h1>
        <h2>Simple Example</h2>
        <div className='example'>
          <InputPasswordGenerator />
        </div>
        <hr />
        <h2>Example with a custom length password</h2>
        <div className='example'>
          <InputPasswordGenerator password={{password: {'customLength': 15}}} />
        </div>
        <hr />
        <h2>Example with a not memorable password</h2>
        <div className='example'>
          <InputPasswordGenerator password={{password: {'notMemorable': false}}} />
        </div>
        <hr />
        <h2>Example with a custom Class Name</h2>
        <div className='example'>
          <InputPasswordGenerator className={'red'} />
        </div>
        <hr />
        <h2>Example with a custom Class Name</h2>
        <div className='example'>
          <InputPasswordGenerator className={'red'} />
        </div>
        <hr />
        <h2>Example with a custom button label or input placeholder</h2>
        <div className='example'>
          <InputPasswordGenerator messages />
        </div>
      </form>
    )
  }
}

App.displayName = 'App'

render(<App />, document.getElementById('application'))
