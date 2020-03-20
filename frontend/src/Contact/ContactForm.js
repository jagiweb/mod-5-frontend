import React from 'react'
import { Link } from 'react-router-dom'
import API from '../API'

class ContactForm extends React.Component {
        constructor() {
            super();
            this.state = { 
            name: "",
            email: "",
            telephone: "",
            description: ""
            }
        }
        
        handleChange = (e) => {
            this.setState({
            [e.target.name]: e.target.value
            })
        }

        handleSubmit = (e) => {
            e.preventDefault()
            API.contactsPost(this.state)
            .then(data => console.log(data))
        }
    render() { 
        return ( 
            <div className="modal-main modal--change">
                <h3>Contact Me</h3>
                <form onSubmit={this.handleSubmit}>
                    <br/>
                    <label>Name: </label>
                    <br/>
                    <input onChange={this.handleChange} placeholder="Full name" name="name" type="text"/>
                    <br/>
                    <label>Email: </label>
                    <br/>
                    <input onChange={this.handleChange} placeholder="Email Address" row="4" cols="50" name="email" type="email"/>
                    <br/>
                    <label>Telephone Number: </label>
                    <br/>
                    <input onChange={this.handleChange} row="4" cols="50" placeholder="Your phone number" name="telephone" type="number"/>
                    <br/>
                    <label>Description: </label>
                    <br/>
                    <textarea onChange={this.handleChange} row="4" cols="50" placeholder="What would you like to ask us?" name="description" type="text"/>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
                <Link to="/" onClick={this.props.hideModal}>Close</Link>
                
            </div>
         );
    }
}
 
export default ContactForm;