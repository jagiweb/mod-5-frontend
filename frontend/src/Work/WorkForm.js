import React from 'react';
import API from '../API'


class WorkForm extends React.Component {
    constructor() {
        super();
        this.state = { 
          title: "",
          work_image: "",
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
        API.workPost(form)
          .then(data => this.setState({
            work_image: data
          }))
          e.target.reset()
      }
    
      render() { 
        
        return ( 
            
          <div>
            <h3 className="text-center title-forms">Upload Work</h3>
            <form onSubmit={this.handleSubmit}>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Image</span>
                  </div>
                  <input accept="image/*" name="work_image" type="file" required class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                </div>
                
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Title (Optional)</span>
                  </div>
                  <input onChange={this.handleChange} name="title" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                </div>

                <button className="btn btn-success text-center" type="submit">Submit</button>
            </form>
            

          </div>
         );
      }
}
 
export default WorkForm;