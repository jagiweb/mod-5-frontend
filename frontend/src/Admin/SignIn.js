import React from 'react'
import API from '../API'

class SignIn extends React.Component {
    constructor() {
      super()
      this.state = {
        username: "",
        password: "",
        success: true
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
          .then(json => json.token ? this.props.signIn(json.username, json.token, json.user) : this.setState({
            success: false
          }))
      e.target.reset()
      
    }

    renderMessage = ( ) =>{
      
    }
    
    render() {    
      return (
        <div class="wrapper fadeInDown m-top100">
          <div id="formContent">
            <div class="fadeIn first">
              <i class="fas fa-user"></i>
              {/* <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" /> */}
            </div>

            <form onSubmit={this.handleSubmit}>
              <input id="login" placeholder="username" class="fadeIn second input-signin" type="text" name="username" onChange={this.handleChange}/>
              <input id="password" class="fadeIn third input-signin" type="password" name="password" onChange={this.handleChange} placeholder="password"/>
              <input type="submit" class="button-signin fadeIn fourth" value="Log In"/>
            </form>

          </div>
        </div>
              // <div className="modal-main modal--change">
              //     <form onSubmit={this.handleSubmit}>
              //         <label>Username:</label>
              //         <input type="text" name="username" onChange={this.handleChange} />
              //         <br />
  
              //         <label>Password:</label>
              //         <input type="password" name="password" onChange={this.handleChange} />
              //         <br />
              //         {/* <button type="submit"><Link to="/admin" >SignIn</Link></button> */}
                      
              //         <input type="submit" value="Sign In" />
              //     </form>
              //     <div>
              //         {this.state.success ? null : <h1>PASSWORD OR USER INCORRECT</h1>}
				      //     </div>
              // </div>
          );
    }
  }
  
  export default SignIn