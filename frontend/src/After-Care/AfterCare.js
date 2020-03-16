import React from 'react';
const AllCareURL = 'http://localhost:3001/all_care'

class AboutMe extends React.Component {
    constructor() {
        super();
        this.state = { 
          allCare: []
         }
      }
    
      componentDidMount(){
    
      fetch(AllCareURL)
        .then(resp => resp.json())
        .then(data => this.setState({
            allCare: data.care
        }))
    
      }
    
      renderCare = () => {
        return this.state.allCare.map(care => 
            <div key={care.id}>
                <h3>{care.title}</h3>
                <p>{care.description}</p>
                <p>{care.description2}</p>
                <p>{care.description3}</p>
                <button>Edit</button>
                {/* <img alt="" src={care.image_url}/> */}
            </div>
        )
      }
    
      render() { 
        return ( 
            <div>
                <h1>After Care</h1>
                {this.renderCare()}
            </div>
            
         );
}
}
 
export default AboutMe;