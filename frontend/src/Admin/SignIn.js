import React from 'react'
import API from '../API'
// import {Link} from 'react-router-dom'

class SignIn extends React.Component {
    constructor() {
      super()
      this.state = {
        username: "",
        password: ""
      }
    }
  
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  
    handleSubmit = (e) => {
      e.preventDefault()
      API.signIn(this.state)
          .then(json => this.props.signIn(json.username, json.token, json.user))
    }

    
  
    render() {
      return (
              <div className="modal-main modal--change">
                  <form onSubmit={this.handleSubmit}>
                      <label>Username:</label>
                      <input type="text" name="username" onChange={this.handleChange} />
                      <br />
  
                      <label>Password:</label>
                      <input type="password" name="password" onChange={this.handleChange} />
                      <br />
                      {/* <button type="submit"><Link to="/admin" >SignIn</Link></button> */}
                      
                      <input type="submit" value="Sign In" />
                  </form>
                  <div>
					
				  </div>
              </div>
          );
    }
  }
  
  export default SignIn