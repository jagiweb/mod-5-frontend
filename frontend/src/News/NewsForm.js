import React from 'react';
import API from '../API'

class NewsForm extends React.Component {
    constructor() {
        super();
        this.state = { 
          title: " ",
          news_image: "",
          user_id: 1,
          description: " "
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
            news_image: data
          }))
          e.target.reset()
      }
    
      render() { 
        return ( 
            
          <div>
            <h3 className="text-center title-forms">Upload News</h3>
            <form onSubmit={this.handleSubmit}>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Image *</span>
                  </div>
                  <input accept="image/*" name="news_image" type="file" required class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                </div>
                
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Title *</span>
                  </div>
                  <input onChange={this.handleChange} name="title" type="text" required class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                </div>

                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Description *</span>
                  </div>
                  <textarea onChange={this.handleChange} name="description" type="text" required class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                </div>
                
                <button className="btn btn-success text-center" type="submit">Submit</button>
            </form>
          </div>
         );
      }
}
 
export default NewsForm;