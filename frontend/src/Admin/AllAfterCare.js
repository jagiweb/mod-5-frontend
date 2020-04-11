import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

class AllAfterCare extends React.Component {
    
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
                    <td><button onClick={() => this.props.deleteAfterCare(care.id)}>Delete</button></td>
                </tr>
         );
    }
}
 
export default AllAfterCare;