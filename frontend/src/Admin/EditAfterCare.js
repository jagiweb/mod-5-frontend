import React from 'react'
import API from '../API'
import { Link } from 'react-router-dom'

class EditAfterCare extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            care: null
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
        const URL = `http://localhost:3001/admin/edit-aftercare/${this.props.match.params.id}`
        fetch(URL)
        .then(resp => resp.json())
        .then(data => this.setState({
            care: data.care
        }))
    }
    render() { 
        console.log(this.state.care)
        return ( 
            <div>
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
                <Link to="/admin">Close</Link>
            </div>
         );
    }
}
 
export default EditAfterCare;