import React from 'react';

const AllWorkURL = 'http://localhost:3001/all_work'

class Work extends React.Component {
  constructor() {
    super();
    this.state = { 
      allWorks: []
     }
  }

  componentDidMount(){

  fetch(AllWorkURL)
    .then(resp => resp.json())
    .then(data => this.setState({
        allWorks: data.works
    }))

  }

  renderWorks = () => {
    return this.state.allWorks.map(work => 
        <div>
            <h3>{work.title}</h3>
            <img alt="" src={work.image_url}/>
        </div>
    )
  }

  render() { 
    return ( 
        <div>
            <h1>All Works</h1>
            {this.renderWorks()}
        </div>
        
     );
  }
}
 
export default Work;