import React from 'react'
import { Link } from 'react-router-dom'
// import API from '../API'

class EditWorks extends React.Component {
    
    render() { 
        console.log(this.props.work)
        console.log("im here")
        return ( 
            <div>
                I AM HERE
                <img src={this.props.work.image_url}/>
                <Link to="/admin" onClick={this.props.handleClose}>Close</Link>
            </div>
         );
    }
}
 
export default EditWorks;