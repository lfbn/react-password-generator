import React, { Component } from 'react'
import { render } from 'react-dom'

import InputPasswordGenerator from '../component'
// In your code this would be:
// import InputPasswordGenerator from 'react-input-password-generator'

import '../../style.css'
import './style.css'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <form>
        <h1>react-input-password-generator</h1>
        <div className='example'>
          <InputPasswordGenerator />
        </div>
      </form>
    )
  }
}

App.displayName = 'App'

render(<App />, document.getElementById('application'))
