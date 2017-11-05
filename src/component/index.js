import React, { PureComponent } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import generatePassword from 'password-generator'

class InputPasswordGenerator extends PureComponent {
  constructor (props) {
    super(props)
    this.handleOnFocus = this.handleOnFocus.bind(this)
    this.handleOnBlur = this.handleOnBlur.bind(this)
    this.handleGenerateOnClick = this.handleGenerateOnClick.bind(this)
    this.state = {
      password: '',
      passwordInputType: 'password',
      hasFocus: false,
    }
  }

  handleOnFocus (event) {
    const { onFocus } = this.props

    if (onFocus) {
      onFocus(event)
    }

    this.setState({ hasFocus: true })
  }

  handleOnBlur (event) {
    const { onBlur } = this.props

    if (onBlur) {
      onBlur(event)
    }

    this.setState({
      hasFocus: false,
      passwordInputType: 'password',
    })
  }

  getMessage (key) {
    const { messages } = this.props
    return messages[key] === undefined
        ? InputPasswordGenerator.defaultProps.messages[key]
        : messages[key]
  }

  handleGenerateOnClick () {
    let passwordNotMemorable = this.props.passwordNotMemorable
    if (this.props.passwordShouldMatchPattern !== null ||
        this.props.passwordShouldMatchPattern !== '') {
      passwordNotMemorable = false
    }
    const generatedPassword = generatePassword(
      this.props.passwordCustomLength,
      passwordNotMemorable,
      this.props.passwordShouldMatchPattern,
      this.props.passwordPrefix,
    )

    this.setState({
      password: generatedPassword,
      passwordInputType: 'text',
    }, () => { this.input.focus() })
  }

  render () {
    const {
      className,
      messages,
      passwordCustomLength,
      passwordNotMemorable,
      passwordShouldMatchPattern,
      passwordPrefix,
      ...inputProps
    } = this.props
    const classes = classNames('react-password-generator', {
      'react-password-generator--focus': this.state.hasFocus,
    }, className)

    return (
      <div className={classes}>
        <input
          {...inputProps}
          className={'react-password-generator__input'}
          ref={ref => { this.input = ref }}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          value={this.state.password}
          placeholder={this.getMessage('inputPlaceholder')}
          type={this.state.passwordInputType} />
        <button
          className={'react-password-generator__button'}
          onClick={this.handleGenerateOnClick}
          type='button'>
          {this.getMessage('generateButtonLabel')}
        </button>
      </div>
    )
  }
}

InputPasswordGenerator.displayName = 'InputPasswordGenerator'

InputPasswordGenerator.defaultProps = {
  className: '',
  messages: {
    inputPlaceholder: 'Password',
    generateButtonLabel: 'Generate',
  },
  passwordCustomLength: 10,
  passwordNotMemorable: true,
  passwordShouldMatchPattern: null,
  passwordPrefix: null,
}

InputPasswordGenerator.propTypes = {
  className: PropTypes.string,
  messages: PropTypes.shape({
    inputPlaceholder: PropTypes.string,
    generateButtonLabel: PropTypes.string,
  }),
  passwordCustomLength: PropTypes.number,
  passwordNotMemorable: PropTypes.bool,
  passwordShouldMatchPattern: PropTypes.instanceOf(RegExp),
  passwordPrefix: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
}

export default InputPasswordGenerator
