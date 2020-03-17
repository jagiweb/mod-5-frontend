import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
import API from '../API'

class AllAbout extends React.Component {
    constructor() {
        super();
        this.state = {  }
    }

    deleteAbout = () =>{
        const {about} = this.props
        API.aboutDelete(about.id)
            .then(data => console.log(data))
    }
    render() { 
        const {title, image, description, description2, description3, about} = this.props
        const URL = `/admin/edit-about/${about.id}`
        return ( 
                <tr>
                    <td><p>{title}</p></td>
                    <td>{description}</td>
                    <td><p>{description2}</p></td>
                    <td><p>{description3}</p></td>
                    <td><img className="thumbnail" alt={image} src={image}/></td>
                    <td><Link onClick={() => this.props.showModal()} to={URL}>Edit</Link></td>
                    <td><button onClick={() => this.deleteAbout()}>Delete</button></td>
                </tr>
         );
    }
}
 
export default AllAbout;