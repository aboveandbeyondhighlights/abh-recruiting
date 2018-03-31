import React, { Component } from 'react';
import TextInput from './common/TextInput';
import bindActionCreators from 'redux';
import connect from 'react-redux';
import * as sessionActions from '../actions/sessionActions';

class LogInPage extends Component {
  constructor(props) {
    super(props);
    this.state = { credentials: { email: '', password: '' } }
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({ credentials });
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.loginUser(this.state.credentials);
  }

  render() {
    return (
      <div>
        <form>
          <TextInput
            name="email"
            label="email"
            value={this.state.credentials.email}
            onChange={this.onChange}
          />

          <TextInput
            name="password"
            label="password"
            value={this.state.credentials.password}
            onChange={this.onChange}
          />

          <input
            type="submit"
            className="submit-button"
            onClick={this.onsSave}
          />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(LogInPage);
