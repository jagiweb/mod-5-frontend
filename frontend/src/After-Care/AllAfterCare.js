import React from 'react'

class AllAfterCare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="care" className="after-care">
              <div className="container">
                <h1 className="text-center mt-150 font-sacramento text-60">After Care</h1>
                <hr className="mb-50"/>
                    {this.props.renderAfterCare()}
                <span className="mb-50"></span>
              </div>
            </div>
         );
    }
}
 
export default AllAfterCare;