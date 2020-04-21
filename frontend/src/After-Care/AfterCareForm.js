import React from 'react'
import API from '../API'



class AfterCareForm extends React.Component {
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
        API.afterCarePost(this.state)
      }
      
      render() { 
        return ( 
            
          <div>
            <h3 className="text-center title-forms">Upload AfterCare</h3>
            <form onSubmit={this.handleSubmit}>

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
                  <textarea onChange={this.handleChange} name="description" row="4" cols="50" type="text" required class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                </div>

                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Description </span>
                  </div>
                  <textarea onChange={this.handleChange} name="description2" row="4" cols="50" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                </div>

                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Description </span>
                  </div>
                  <textarea onChange={this.handleChange} name="description3" row="4" cols="50" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                </div>
                
                <button className="btn btn-success text-center" type="submit">Submit</button>
            </form>
                
          </div>
         );
      }
    }
 
export default AfterCareForm;