import React from 'react'
import { Link } from 'react-router-dom';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>Contact</h1>
                <Link to="/">Contact Form</Link>
            </div>
         );
    }
}
 
export default Contact;