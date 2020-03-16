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
            <div key={about.id}>
                <h3 key={about.id}>{about.title}</h3>
                <p key={about.id}>{about.description}</p>
                <p key={about.id}>{about.description2}</p>
                <p key={about.id}>{about.description3}</p>
                <img key={about.id} alt="" src={about.image_url}/>
            </div>
        )
      }
    
      render() { 
        return ( 
            <div>
                <h1>About me</h1>
                {this.renderWorks()}
            </div>
            
         );
}
}
 
export default AboutMe;