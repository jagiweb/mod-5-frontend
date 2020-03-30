import React from 'react'
import { Link } from 'react-router-dom';
import GoogleMaps from './GoogleMaps';
import API from '../API'

class Contact extends React.Component {
      constructor() {
        super();
        this.state = { 
            modal: false,
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
        e.target.reset()
        API.contactsPost(this.state)
        .then(data => console.log(data))
    }
    
      showModal = () => {
          this.setState({modal: true})
      }
    
      hideModal = () => {
          this.setState({ modal: false })
      }
    render() { 
        return ( 
        <div id="contact" className="contact">
            <div className="container mb-50">
                <h1 className="text-center mt-150 font-sacramento text-60">Do You Have Any Question?</h1>
                <hr className="mb-50"/>
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-5">
                        <h4>Contact info</h4>
                        <br/>
                        <h5>Address</h5>
                        <p>Horsham, London</p>
                        <br/>
                        <h5>Mail</h5>
                        <p>info@sharniepilar.com</p>
                        <p>sharnie@gmail.com</p>
                        <br/>
                        <h5>Call</h5>
                        <p>(+44) 75-123-456</p>
                        <p>(+44) 75-123-456</p>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-7">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <h4>Get in touch with me</h4>
                                <br/>
                                <label>Name: </label>
                                <br/>
                                <input className="form-control" onChange={this.handleChange} placeholder="Full name" name="name" type="text"/>
                                <br/>
                                <label>Email: </label>
                                <br/>
                                <input className="form-control" onChange={this.handleChange} placeholder="Email Address" row="4" cols="50" name="email" type="email"/>
                                <br/>
                                <label>Telephone Number: </label>
                                <br/>
                                <input className="form-control" onChange={this.handleChange} row="4" cols="50" placeholder="Your phone number" name="telephone" type="number"/>
                                <br/>
                                <label>Description: </label>
                                <br/>
                                <textarea className="form-control" onChange={this.handleChange} row="4" cols="50" placeholder="What would you like to ask?" name="description" type="text"/>
                                <br/>
                                <button className="btn btn-lg btn-primary text-center" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                
                {/* <Link onClick={this.props.showModal} to="/">Contact Form</Link> */}
                <hr/>
            </div>
            <div>
                <div className="row">
                    <div id="map" className="col-lg-12 col-md-12">
                        <GoogleMaps/>
                    </div>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Contact;