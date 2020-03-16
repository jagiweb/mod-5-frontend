import React from 'react'
import { Link } from 'react-router-dom'
import API from '../API'



class AfterCareForm extends React.Component {
      constructor() {
        super();
        this.state = { 
          title: "",
          description: "",
          description2: "",
          description3: ""
         }
      }
    
      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      handleSubmit = (e) => {
        e.preventDefault()
        API.afterCarePost(this.state)
      }
      
      render() { 
        return ( 
            
          <div>
            <h3>Update AfterCare</h3>
            <form onSubmit={this.handleSubmit}>
                <br/>
                <label>Title: </label>
                <br/>
                <input onChange={this.handleChange} name="title" type="text"/>
                <br/>
                <label>Description: </label>
                <br/>
                <textarea onChange={this.handleChange} row="4" cols="50" name="description" type="text"/>
                <br/>
                <label>Description2: </label>
                <br/>
                <textarea onChange={this.handleChange} row="4" cols="50" name="description2" type="text"/>
                <br/>
                <label>Description3: </label>
                <br/>
                <textarea onChange={this.handleChange} row="4" cols="50" name="description3" type="text"/>
                <br/>
                <button type="submit">Submit</button>
            </form>
            <Link to="/admin" onClick={this.props.handleClose}>Close</Link>
            
          </div>
         );
      }
    }
 
export default AfterCareForm;