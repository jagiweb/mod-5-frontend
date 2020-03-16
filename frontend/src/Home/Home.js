import React, { Fragment } from 'react';
import NavBar from '../NavBar/NavBar'
import AboutMe from '../About/AboutMe'
import News from '../News/News'
import Work from '../Work/Work'
import AfterCare from '../After-Care/AfterCare'
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
                <AboutMe/>
                <News/>
                <Work/>
                <AfterCare/>
                <Contact/>
                <Footer/>
            </Fragment>
         );
    }
}
 
export default Home;