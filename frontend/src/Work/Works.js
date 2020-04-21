import React from 'react';

class Works extends React.Component {
    render(){
  return (
        <div id="work" className="work">
          <div className="container">
            <h1 className="text-center mt-150 font-sacramento text-60">My Work</h1>
            <p className="text-center font-viadora">Our latest news for you to check out, i know that i looks awesome, just dont break my web page because i dont know what to write right now over here and i am getting stressed</p>
            <hr/>
            <div className="row">
                {this.props.renderWorks()}
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12 text-center">
                 <button onClick={() => this.props.showFourMore()} className="btnn btn-1w btn-1c text-center m-right-75 m-top-25">Show More</button>
              </div>
            </div>
          </div>
        </div> 
  );
}
}

export default Works