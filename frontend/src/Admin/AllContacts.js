import React from 'react'
import '../index.css'

class AllContacts extends React.Component {
    
    render() { 
        const {name, email, telephone, description, contact} = this.props
        return ( 
                <tr>
                    <td><p>{name}</p></td>
                    <td><p>{email}</p></td>
                    <td><p>{telephone}</p></td>
                    <td><p>{description.substring(0,120)}</p></td>
                    <td><button className="btn btn-danger" onClick={() => this.props.deleteContacts(contact.id)}><i class="fas fa-trash"></i></button></td>
                </tr>        
         );
    }
}
 
export default AllContacts;