import React from 'react';
import { Link } from 'react-router-dom'
import API from '../API'

class NewsForm extends React.Component {
    constructor() {
        super();
        this.state = { 
          title: "",
          news_image: "",
          user_id: 1,
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
        API.newsPost(form)
          .then(data => this.setState({
            work_image: data
          }))
      }
    
      render() { 
        return ( 
            
          <div>
            <h3>Create News</h3>
            <form onSubmit={this.handleSubmit}>
                <label>Upload Image:</label>
                <br/>
                <input onChange={this.handleChange} accept="image/*" name="news_image" type="file"/>
                <br/>
                <label>Title: </label>
                <br/>
                <input onChange={this.handleChange} name="title" type="text"/>
                <br/>
                <label>Description: </label>
                <br/>
                <textarea onChange={this.handleChange} row="4" cols="50" name="description" type="text"/>
                <br/>
                <button type="submit">Submit</button>
                {/* <div><img alt="" src={this.state.news_image.image_url}/></div> */}
            </form>
            <Link to="/admin" onClick={this.props.handleClose}>Close</Link>
          </div>
         );
      }
}
 
export default NewsForm;