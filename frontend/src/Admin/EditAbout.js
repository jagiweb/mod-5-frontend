import React from 'react'
import API from '../API'
import { Link } from 'react-router-dom'

class EditAbout extends React.Component {
    constructor() {
        super();
        this.state = { 
            about: null
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
        API.aboutPatch(form, this.state.about.id)
          .then(data => console.log(data))
      }

    componentDidMount(){
        const URL = `http://localhost:3001/admin/edit-about/${this.props.match.params.id}`
        fetch(URL)
        .then(resp => resp.json())
        .then(data => this.setState({
            about: data.about
        }))
    }
    render() { 
        return ( 
            <div>
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
 
export default EditAbout;