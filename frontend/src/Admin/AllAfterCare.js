import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
import API from '../API'

class AllAfterCare extends React.Component {
    constructor() {
        super();
        this.state = {  }
    }
    deleteAfterCare = () =>{
        const {care} = this.props
        API.afterCareDelete(care.id)
            .then(data => console.log(data))
    }
    render() { 
        const {title, description, description2, description3, care} = this.props
        const URL = `/admin/edit-aftercare/${care.id}`
        return ( 
                <tr>
                    <td><p>{title}</p></td>
                    <td><p>{description}</p></td>
                    <td><p>{description2}</p></td>
                    <td><p>{description3}</p></td>
                    <td><Link onClick={() => this.props.showModal()} to={URL}>Edit</Link></td>
                    <td><button onClick={() => this.deleteAfterCare()}>Delete</button></td>
                </tr>
         );
    }
}
 
export default AllAfterCare;