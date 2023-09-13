import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    console.log('email:', email);
    console.log('Password:', password);
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="login-container">
        <h2>Ewaste</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit" className="animated-button">Login</button>
          <p>Don't have an account? <a href="signuppage">Sign Up</a></p>

        </form>
      </div>
    );
  }
}

export default Login;