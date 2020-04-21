import React from 'react'
import API from '../API'


class AboutMeForm extends React.Component {
    constructor() {
        super();
        this.state = { 
          title: "",
          description: "",
          description2: " ",
          description3: " "
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
            <h3 className="text-center title-forms">Upload About Me</h3>
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

                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Description </span>
                  </div>
                  <textarea onChange={this.handleChange} name="description2" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                </div>

                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Description </span>
                  </div>
                  <textarea onChange={this.handleChange} name="description3" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                </div>
                
                <button className="btn btn-success text-center" type="submit">Submit</button>
            </form>
          </div>
         );
      }
    }
 
export default AboutMeForm;