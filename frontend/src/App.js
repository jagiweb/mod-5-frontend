import React, { Fragment } from 'react';
import './App.css';
import Home from './Home/Home'
import SignIn from './Admin/SignIn'
import { Route} from 'react-router-dom'
import NewsForm from './News/NewsForm';
import WorkForm from './Work/WorkForm';
import AboutMeForm from './About/AboutMeForm';
import AfterCareForm from './After-Care/AfterCareForm'
import EditAfterCare from './Admin/EditAfterCare'
import EditAbout from './Admin/EditAbout'
import EditWorks from './Admin/EditWorks'
import EditNews from './Admin/EditNews'
import Dashboard from './Admin/Dashboard';


class App extends React.Component {

  constructor() {
    super();
    this.state = { 
        modal: false
     }
  }

  showModal = () => {
      this.setState({modal: true})
  }

  hideModal = () => {
      this.setState({ modal: false })
  }


  signIn = (username, token, user) => {
    console.log(user)
    this.setState({
        username,
        user
    })
    localStorage.token = token

}



  render() { 
    // console.log(this.state)
    return ( 
      <Fragment>
        <Route exact path="/" component={() => <Home/>}/>
        <Route exact path="/admin/signin" component={() => <SignIn signIn={this.signIn}/>}/>
        <Route exact path="/admin/add-news" component={() => (this.state.modal && <NewsForm show={this.state.modal} handleClose={this.hideModal}/>)} />
        <Route exact path="/admin/add-work" component={() => (this.state.modal && <WorkForm show={this.state.modal} handleClose={this.hideModal}/>)} />
        <Route exact path="/admin/add-about" component={() => (this.state.modal && <AboutMeForm show={this.state.modal} handleClose={this.hideModal}/>)} />
        <Route exact path="/admin/add-aftercare" component={() => (this.state.modal && <AfterCareForm show={this.state.modal} handleClose={this.hideModal}/>)} />
        <Route exact path="/admin/edit-aftercare/:id" component={(props) => (this.state.modal && <EditAfterCare {...props} show={this.state.modal} handleClose={this.hideModal}/>)} />
        <Route exact path="/admin/edit-works/:id" component={(props) => (this.state.modal && <EditWorks {...props} show={this.state.modal} handleClose={this.hideModal}/>)} />
        <Route exact path="/admin/edit-news/:id" component={(props) => <EditNews {...props} show={this.state.modal} handleClose={this.hideModal}/>} />
        <Route exact path="/admin/edit-about/:id" component={(props) => (this.state.modal && <EditAbout {...props} show={this.state.modal} handleClose={this.hideModal}/>)} />
        <Route exact path="/admin" component={() => <Dashboard showModal={this.showModal} show={this.state.modal} hideModal={this.hideModal} />} />
      </Fragment>
     );
  }
}
 
export default App;