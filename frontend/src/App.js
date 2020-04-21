import React, { Fragment } from 'react';
import './App.css';
import Home from './Home/Home'
import API from './API'
import SignIn from './Admin/SignIn'
import {Redirect, Route} from 'react-router-dom'
import NewsForm from './News/NewsForm';
import WorkForm from './Work/WorkForm';
import AboutMeForm from './About/AboutMeForm';
import AfterCareForm from './After-Care/AfterCareForm'
import EditAfterCare from './Admin/EditAfterCare'
import EditAbout from './Admin/EditAbout'
import EditWorks from './Admin/EditWorks'
import EditNews from './Admin/EditNews'
import Dashboard from './Admin/Dashboard';
import ContactForm from './Contact/ContactForm'
import Work from './Work/Work'
import News from './News/News'
import AllAfterCare from './After-Care/AllAfterCare'
import AfterCare from './After-Care/AfterCare'
import AboutMe from './About/AboutMe';

class App extends React.Component {

  constructor() {
    super();
    this.state = { 
        modal: false, 
        user: null,
        username: "",
        token: "",
        allWorks: [],
        allNews: [],
        allAbout: [],
        allCare: [],
        success: false
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
    if (token){
    this.setState({
      username: username,
      user: user,
      token: token,
      success: true
    })
    localStorage.token = token
  }
  if (this.state.success){
    console.log(this.state.success)
    return <Redirect to="/admin"/>
  }
  
}

signOut = () => {
  this.setState({
    username: null
  });
  localStorage.removeItem('token');
};

componentDidMount(){

  API.getWorks()
  .then(data => this.setState({
    allWorks: data.works
  }))

  API.getNews()
  .then(data => this.setState({
    allNews: data.news
  }))

  API.getAbout()
    .then(data => this.setState({
        allAbout: data.about
    }))
  
  API.getAfterCare()
    .then(data => this.setState({
      allCare: data.care
    }))
  }

  renderWorks = () => {
    return this.state.allWorks.map(work => 
          <Work key={work.id} image_url={work.image_url}/>  
    )
  }

  renderNews = () => {
    return this.state.allNews.map(news => <News key={news.id} news={news}/>)
  }

  renderAbout = () => {
    return this.state.allAbout.map(about => <AboutMe key={about.id} about={about} />)
  }

  renderAfterCare = () => {
    return this.state.allCare.map(care => <AfterCare key={care.id} care={care} />)
  }

  showFourMore = () => {
    API.showFourMore()
      .then(data => this.setState({
        allWorks: data.works
      }))
  }
  
  

  showTwoMore = () => {
    API.getTwoNews()
      .then(data => this.setState({
        allNews: data.news
      }))
  }


  render() { 
    return ( 
      <Fragment>
        
        {localStorage.token || this.state.user ?  <Route exact path="/admin" component={() => <Dashboard signOut={this.signOut} showModal={this.showModal} show={this.state.modal} hideModal={this.hideModal} />} /> : null}
        <Route exact path="/" component={() => <Home renderAbout={this.renderAbout} allNews={this.state.allNews} showTwoMore={this.showTwoMore} showFourMore={this.showFourMore} renderNews={this.renderNews} renderWorks={this.renderWorks} showModal={this.showModal} show={this.state.modal} hideModal={this.hideModal}/>}/>
        {localStorage.token || this.state.user ? <Redirect to="/admin" /> : <Route exact path="/admin/signin" component={() => <SignIn signIn={this.signIn}/>}/>}
        <Route exact path="/admin/add-news" component={() => (this.state.modal && <NewsForm show={this.state.modal} handleClose={this.hideModal}/>)} />
        <Route exact path="/admin/add-work" component={() => (this.state.modal && <WorkForm show={this.state.modal} handleClose={this.hideModal}/>)} />
        <Route exact path="/admin/add-about" component={() => (this.state.modal && <AboutMeForm show={this.state.modal} handleClose={this.hideModal}/>)} />
        <Route exact path="/admin/add-aftercare" component={() => (this.state.modal && <AfterCareForm show={this.state.modal} handleClose={this.hideModal}/>)} />
        <Route exact path="/admin/edit-aftercare/:id" component={(props) => (this.state.modal && <EditAfterCare {...props} show={this.state.modal} handleClose={this.hideModal}/>)} />
        <Route exact path="/admin/edit-works/:id" component={(props) => (this.state.modal && <EditWorks {...props} show={this.state.modal} handleClose={this.hideModal}/>)} />
        <Route exact path="/admin/edit-news/:id" component={(props) => <EditNews {...props} show={this.state.modal} handleClose={this.hideModal}/>} />
        <Route exact path="/admin/edit-about/:id" component={(props) => (this.state.modal && <EditAbout {...props} show={this.state.modal} handleClose={this.hideModal}/>)} />
        <Route exact path="/AfterCare" component={() => <AllAfterCare renderAfterCare={this.renderAfterCare}/>} />
        {/* <Route exact path="/admin" component={() => <Dashboard showModal={this.showModal} show={this.state.modal} hideModal={this.hideModal} />} /> */}
        <Route exact path="/" component={() => (this.state.modal && <ContactForm showModal={this.showModal} show={this.state.modal} hideModal={this.hideModal} />)} />
      </Fragment>
     );
  }
}
 
export default App;