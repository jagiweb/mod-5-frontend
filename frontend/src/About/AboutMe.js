import React from 'react';

class AboutMe extends React.Component {
    constructor() {
        super();
        this.state = {}
      }
    
      render() { 
        const {about} = this.props
        return (    
          <div className="row">
            <div className="col-md-6 col-lg-6">
                <img className="about-img img-fluid mb-50" alt="" src={this.props.about.image_url}/>
            </div>
            <div className="col-md-6 col-lg-6 text-center mb-50">
                <h3 className="font-vibes font-40">{about.title}</h3>
                <p className="font-viadora">{about.description}</p>
                <p className="font-viadora">{about.description2}</p>
                <p className="font-viadora">{about.description3}</p>
            </div>
          </div>
         );
}
}
 
export default AboutMe;