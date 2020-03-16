import React from 'react';
import { Link } from 'react-router-dom'
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
      }
    
      render() { 
        return ( 
            
          <div className="modal-main modal--change">
            <h3>Create Work</h3>
            <form onSubmit={this.handleSubmit}>
                <label>Upload Image:</label>
                <br/>
                <input onChange={this.handleChange} accept="image/*" name="work_image" type="file"/>
                <br/>
                <label>Title: </label>
                <br/>
                <input onChange={this.handleChange} name="title" type="text"/>
                <br/>
                <button type="submit">Submit</button>
                {/* <div><img alt="" src={this.state.work_image.image_url}/></div> */}
            </form>
            <Link to="/admin" onClick={this.props.handleClose}>Close</Link>

          </div>
         );
      }
}
 
export default WorkForm;