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
            <div className="col-lg-12 col-md-12 text-center" key={care.id}>
                <h3>{care.title}</h3>
                <p>{care.description}</p>
                <p>{care.description2}</p>
                <p className="mb-50">{care.description3}</p>
            </div>
        )
      }
    
      render() { 
        return ( 
            <div id="care" className="after-care">
              <div className="container">
                <h1 className="text-center mt-150 font-sacramento text-60">After Care</h1>
                <hr className="mb-50"/>
                <div className="row">
                  {this.renderCare()}
                </div>
                <span className="mb-50"></span>
              </div>
            </div>
            
         );
}
}
 
export default AboutMe;