import React, { Fragment } from 'react';
import Carousel from './Carousel'
import Intro from './Intro'
import NavBar from '../NavBar/NavBar'
import AboutMe from '../About/AboutMe'
import AllNews from '../News/AllNews'
import Works from '../Work/Works'
// import AfterCare from '../After-Care/AfterCare'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {  }
    }

    
    render() { 
        return ( 
            <Fragment>
                <NavBar/>
                <Carousel/>
                <Intro/>
                <AboutMe/>
                <AllNews allNews={this.props.allNews} showTwoMore={this.props.showTwoMore} renderNews={this.props.renderNews}/>
                <Works showFourMore={this.props.showFourMore} renderWorks={this.props.renderWorks}/>
                {/* <AfterCare/> */}
                <Contact showModal={this.props.showModal} show={this.props.show} hideModal={this.props.hideModal}/>
                <Footer/>
            </Fragment>
         );
    }
}
 
export default Home;