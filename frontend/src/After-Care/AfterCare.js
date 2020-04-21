import React, { Fragment } from 'react';
import NavBar from '../NavBar/NavBar'

class AboutMe extends React.Component {
    constructor() {
        super();
        this.state = {}
      }
    
      render() { 
        const {care} = this.props
        return ( 
          <Fragment>
            <NavBar/>
            
            <div className="row">
                  <div className="col-lg-12 col-md-12 text-center">
                    <h3>{care.title}</h3>
                    <p>{care.description}</p>
                    <p>{care.description2}</p>
                    <p className="mb-50">{care.description3}</p>
                  </div>
                </div>
          </Fragment>
            
            
         );
}
}
 
export default AboutMe;