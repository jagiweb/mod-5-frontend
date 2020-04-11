import React from 'react';
import API from '../API'

class AboutMe extends React.Component {
    constructor() {
        super();
        this.state = { 
          allAbout: []
         }
      }
    
    componentDidMount(){
      API.getAbout()
        .then(data => this.setState({
            allAbout: data.about
        }))
      }
    
      renderWorks = () => {
        return this.state.allAbout.map(about => 
          <div className="row">
            <div className="col-md-6 col-lg-6">
                <img className="about-img mb-50" key={about.id} alt="" src={about.image_url}/>
            </div>
            <div className="col-md-6 col-lg-6 text-center mb-50">
                <h3 className="font-vibes font-40" key={about.id}>{about.title}</h3>
                <p className="font-viadora" key={about.id}>{about.description}</p>
                <p className="font-viadora" key={about.id}>{about.description2}</p>
                <p className="font-viadora" key={about.id}>{about.description3}</p>
            </div>
          </div>
        )
      }
    
      render() { 
        return ( 
            <div id="about" className="about">
              <div className="container">
                <h1 className="text-center mt-150 font-sacramento text-60">About me</h1>
                <hr className="mb-50"/>
                {this.renderWorks()}
              </div>
                
            </div>
            
         );
}
}
 
export default AboutMe;