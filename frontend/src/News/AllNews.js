import React from 'react';

class AllNews extends React.Component {

  render() { 
    return ( 
        <div id="news" className="news">
          <div className="container">
          <h1 className="text-center mt-150 font-sacramento text-60">Latest News</h1>
          <p className="text-center font-viadora">Our latest news for you to check out, i know that i looks awesome, just dont break my web page because i dont know what to write right now over here and i am getting stressed</p>
          <hr className="mb-50"/>
            <div className="row">
              {this.props.renderNews()}
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12 text-center">
                 <button onClick={() => this.props.showTwoMore()} className="btnn btn-1 btn-1c text-center m-right-75 m-top-25">Show More</button>
              </div>
            </div>
            
          </div>
            
        </div>
        
     );
  }
}
 
export default AllNews;