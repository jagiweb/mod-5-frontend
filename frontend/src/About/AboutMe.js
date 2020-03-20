import React from 'react';
const AllAboutURL = 'http://localhost:3001/all_about'

class AboutMe extends React.Component {
    constructor() {
        super();
        this.state = { 
          allAbout: []
         }
      }
    
      componentDidMount(){
    
      fetch(AllAboutURL)
        .then(resp => resp.json())
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
                <h3 key={about.id}>{about.title}</h3>
                <p key={about.id}>{about.description}</p>
                <p key={about.id}>{about.description2}</p>
                <p key={about.id}>{about.description3}</p>
            </div>
          </div>
        )
      }
    
      render() { 
        return ( 
            <div id="about" className="about">
              <div className="container">
                <h1 className="text-center mt-150 mb-50">About me</h1>
                {this.renderWorks()}
              </div>
                
            </div>
            
         );
}
}
 
export default AboutMe;