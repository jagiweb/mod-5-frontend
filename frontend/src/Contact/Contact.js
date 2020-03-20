import React from 'react'
import { Link } from 'react-router-dom';

class Contact extends React.Component {
    constructor() {
        super();
        this.state = { 
            modal: false
         }
      }
    
      showModal = () => {
          this.setState({modal: true})
      }
    
      hideModal = () => {
          this.setState({ modal: false })
      }
    render() { 
        return ( 
            <div>
                <h1>Contact</h1>
                <Link onClick={this.props.showModal} to="/">Contact Form</Link>
            </div>
         );
    }
}
 
export default Contact;