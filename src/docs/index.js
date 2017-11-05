import React, { Component } from 'react'
import { render } from 'react-dom'

import PasswordWithGenerator from '../component'
// In your code this would be:
// import PasswordWithGenerator from 'react-input-password-generator'

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
        <h1>react-password-with-generator</h1>

        {/* Installation */}

        <div className='example'>
          <div>Installation</div>
          <pre>
            {`npm install react-password-with-generator --save`}
          </pre>
          <pre>{`import PasswordWithGenerator from 'react-password-with-generator'`}</pre>
          <p>Or if you're not using the ES6 module format yet:</p>
          <pre>{`var PasswordWithGenerator = require('react-password-with-generator')`}</pre>
        </div>

        {/* Default Options */}

        <h2>Example with Default options</h2>
        <div>
          <PasswordWithGenerator />
        </div>

        <pre>
          {`<div>
  <PasswordWithGenerator />
</div>`}
        </pre>

        <hr />

        {/* Custom Class */}

        <h2>Example with a Custom Class</h2>
        <div>
          <PasswordWithGenerator className={'react-password-generator__on-focus-glow'} />
        </div>

        <pre>
          {`<div>
  <PasswordWithGenerator className={'react-password-generator__on-focus-glow'} />
</div>`}
        </pre>

        <hr />

        {/* Custom Length */}

        <h2>Example with a custom length password. Size of 20 characters.</h2>
        <div>
          <PasswordWithGenerator passwordCustomLength={20} />
        </div>

        <pre>
          {`<div>
  <PasswordWithGenerator passwordCustomLength={20} />
</div>`}
        </pre>

        <hr />

        {/* Not Memorable */}

        <h2>Example with a not memorable password</h2>
        <div>
          <PasswordWithGenerator passwordNotMemorable={false} />
        </div>

        <pre>
          {`<div>
  <PasswordWithGenerator passwordNotMemorable={false} />
</div>`}
        </pre>

        {/* Should Match Pattern */}

        <h2>Example with should match pattern</h2>
        <div>
          <PasswordWithGenerator passwordShouldMatchPattern={/\d/} />
        </div>

        <pre>
          {`<div>
  <PasswordWithGenerator passwordShouldMatchPattern={/d/} />
</div>`}
        </pre>

        <hr />

        {/* Prefix */}

        <h2>Example with prefix</h2>
        <div>
          <PasswordWithGenerator passwordPrefix={'test'} />
        </div>

        <pre>
          {`<div>
  <PasswordWithGenerator passwordPrefix={'test'} />
</div>`}
        </pre>

        <hr />

        {/* On focus */}

        <h2>Example with a on focus callback</h2>
        <div>
          <PasswordWithGenerator onFocus={function () { console.log('on focus!') }} />
        </div>

        <pre>
          {`<div>
  <PasswordWithGenerator onFocus={function () { console.log('on focus!') }} />
</div>`}
        </pre>

        <hr />

        {/* On blur */}

        <h2>Example with a on blur callback</h2>
        <div>
          <PasswordWithGenerator onBlur={function () { console.log('on blur!') }} />
        </div>

        <pre>
          {`<div>
  <PasswordWithGenerator onBlur={function () { console.log('on blur!') }} />
</div>`}
        </pre>

        <hr />
      </form>
    )
  }
}

App.displayName = 'App'

render(<App />, document.getElementById('application'))
