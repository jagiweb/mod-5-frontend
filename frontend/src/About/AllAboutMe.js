import React from 'react'

class AllAboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="about" className="about">
              <div className="container">
                <h1 className="fadeInDown text-center mt-150 font-sacramento text-60">About me</h1>
                <hr className="mb-50"/>
                {this.props.renderAbout()}
              </div>
                
            </div>
         );
    }
}
 
export default AllAboutMe;