import React from 'react'
import API from '../API'

class EditAbout extends React.Component {
    constructor() {
        super();
        this.state = { 
            about: null,
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
        const form = new FormData(e.target)
        form.append("title", this.state.title)
        form.append("description", this.state.description)
        form.append("description2", this.state.description2)
        form.append("description3", this.state.description3)
        API.aboutPatch(form, this.state.about.id)
          .then(data => console.log(data))
      }

    componentDidMount(){
        const URL = `http://localhost:3001/admin/edit-about/${this.props.id}`
        fetch(URL)
        .then(resp => resp.json())
        .then(data => this.setState({
            about: data.about,
            image_url: data.image_url,
            title: data.about.title,
            description: data.about.description,
            description2: data.about.description2,
            description3: data.about.description3
        }))
    }

    render() { 
       const {title, description, description2, description3} = this.state
       
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Upload Image:</label>
                    <br/>
                    <input onChange={this.handleChange} accept="image/*" name="about_image" type="file" required/>
                    <br/>
                    <label>Title: </label>
                    <br/>
                    <input value={title} onChange={this.handleChange} name="title" type="text"/>
                    <br/>
                    <label>Description: </label>
                    <br/>
                    <textarea value={description} onChange={this.handleChange} row="4" cols="50" name="description" type="text"/>
                    <br/>
                    <label>Description2: </label>
                    <br/>
                    <textarea value={description2} onChange={this.handleChange} row="4" cols="50" name="description2" type="text"/>
                    <br/>
                    <label>Description3: </label>
                    <br/>
                    <textarea value={description3} onChange={this.handleChange} row="4" cols="50" name="description3" type="text"/>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
         );
    }
}
 
export default EditAbout;