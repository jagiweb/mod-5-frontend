import React from 'react'
import { Link } from 'react-router-dom'
import API from '../API'


class AboutMeForm extends React.Component {
    constructor() {
        super();
        this.state = { 
          title: "",
          description: "",
          description2: "",
          description3: "",
          about_image: ""
         }
      }
    
      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        form.append("title", this.state.title)
        form.append("description", this.state.description)
        form.append("description2", this.state.description2)
        form.append("description3", this.state.description3)
        API.aboutPost(form)
          .then(data => this.setState({
            work_image: data
          }))
      }
    
      render() { 
        return ( 
            
          <div>
            <h3>Create About</h3>
            <form onSubmit={this.handleSubmit}>
                <label>Upload Image:</label>
                <br/>
                <input onChange={this.handleChange} accept="image/*" name="about_image" type="file"/>
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
 
export default AboutMeForm;