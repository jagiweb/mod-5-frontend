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
                    <td><p>{description}</p></td>
                    <td><button onClick={() => this.props.deleteContacts(contact.id)}>Delete</button></td>
                </tr>        
         );
    }
}
 
export default AllContacts;