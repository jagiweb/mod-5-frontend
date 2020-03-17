import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
import API from '../API'

class AllWorks extends React.Component {
    constructor() {
        super();
        this.state = { }
      }

    deleteWork = () =>{
        const {work} = this.props
        API.workDelete(work.id)
            .then(data => console.log(data))
    }
    
    render() { 
        const {image, work} = this.props
        const URL = `/admin/edit-works/${work.id}`
        return ( 
                <tr>
                    <td><p>{image}</p></td>
                    <td><img className="thumbnail" alt={image} src={image}/></td>
                    <td><Link onClick={() => this.props.showModal()} to={URL}>Edit</Link></td>
                    <td><button onClick={() => this.deleteWork()}>Delete</button></td>
                </tr>
         );
    }
}
 
export default AllWorks;