import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

class AllWorks extends React.Component {
    
    render() { 
        const {image, work} = this.props
        const URL = `/admin/edit-works/${work.id}`
        return ( 
                <tr>
                    <td><p>{image}</p></td>
                    <td><img className="thumbnail" alt={image} src={image}/></td>
                    <td><Link onClick={() => this.props.showModal()} to={URL}>Edit</Link></td>
                    <td><button onClick={() => this.props.deleteWork(work.id)}>Delete</button></td>
                </tr>
         );
    }
}
 
export default AllWorks;