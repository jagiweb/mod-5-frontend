import React from 'react'
import API from '../API'

class EditNews extends React.Component {
    constructor() {
        super();
        this.state = { 
            work: null,
            user_id: 1
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
        form.append("user_id", 1)
        form.append("title", this.state.title)
        API.workPatch(form, this.state.work.id)
          .then(data => console.log(data))
      }

    componentDidMount(){
        const URL = `http://localhost:3001/admin/edit-works/${this.props.id}`
        fetch(URL)
        .then(resp => resp.json())
        .then(data => this.setState({
            work: data.work
        }))
    }
    render() { 
        console.log(this.state.work)
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Change Image:</label>
                    <br/>
                    <input onChange={this.handleChange} accept="image/*" name="work_image" type="file"/>
                    <br/>
                    <label>Title: </label>
                    <br/>
                    <input onChange={this.handleChange} name="title" type="text"/>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
         );
    }
}
 
export default EditNews;