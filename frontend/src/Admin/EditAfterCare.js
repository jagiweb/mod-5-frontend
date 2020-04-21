import React from 'react'
import API from '../API'


class EditAfterCare extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            care: null,
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
        API.afterCarePatch(this.state, this.state.care.id)
      }

    componentDidMount(){
        const URL = `http://localhost:3001/admin/edit-aftercare/${this.props.id}`
        fetch(URL)
        .then(resp => resp.json())
        .then(data => this.setState({
            care: data.care,
            title: data.care.title,
            description: data.care.description,
            description2: data.care.description2,
            description3: data.care.description3
        }))
    }
    render() { 
        const {care, title, description, description2, description3} = this.state
        console.log(care)
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
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
 
export default EditAfterCare;