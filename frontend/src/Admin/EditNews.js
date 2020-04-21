import React from 'react'
import API from '../API'

class EditNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            news: null,
            title: "",
            description: ""
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
        form.append("description", this.state.description)
        API.newsPatch(form, this.state.news.id)
          .then(data => console.log(data))
      }

    componentDidMount(){
        const URL = `http://localhost:3001/admin/edit-news/${this.props.id}`
        fetch(URL)
        .then(resp => resp.json())
        .then(data => this.setState({
            news: data.news,
            title: data.news.title,
            description: data.news.description
        }))
    }
    render() { 
        const {title, description} = this.state
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Upload Image:</label>
                    <br/>
                    <input onChange={this.handleChange} accept="image/*" name="news_image" type="file"/>
                    <br/>
                    <label>Title: </label>
                    <br/>
                    <input value={title} onChange={this.handleChange} name="title" type="text"/>
                    <br/>
                    <label>Description: </label>
                    <br/>
                    <textarea value={description} onChange={this.handleChange} row="4" cols="50" name="description" type="text"/>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
         );
    }
}
 
export default EditNews;