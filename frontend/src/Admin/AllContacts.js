import React from 'react'
import '../index.css'
import API from '../API'

class AllContacts extends React.Component {
    constructor() {
        super();
        this.state = {  }
    }

    deleteContact = () =>{
        const {contact} = this.props
        API.contactDelete(contact.id)
            .then(data => console.log(data))
    }
    
    render() { 
        const {title, image, description} = this.props
        return ( 
                <tr>
                    <td><p>{title}</p></td>
                    <td><p>{description}</p></td>
                    <td><img className="thumbnail" alt={image} src={image}/></td>
                    <td><button onClick={() => this.deleteNews()}>Delete</button></td>
                </tr>        
         );
    }
}
 
export default AllContacts;