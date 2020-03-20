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

    deleteContacts = () =>{
        const {contact} = this.props
        API.contactsDelete(contact.id)
            .then(data => console.log(data))
    }
    
    render() { 
        const {name, email, telephone, description} = this.props
        return ( 
                <tr>
                    <td><p>{name}</p></td>
                    <td><p>{email}</p></td>
                    <td><p>{telephone}</p></td>
                    <td><p>{description}</p></td>
                    <td><button onClick={() => this.deleteContacts()}>Delete</button></td>
                </tr>        
         );
    }
}
 
export default AllContacts;