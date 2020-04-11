import React, { Fragment } from 'react';
import './App.css';
import Home from './Home/Home'
import API from './API'
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
import ContactForm from './Contact/ContactForm'
import Work from './Work/Work'
import News from './News/News'
import AfterCare from './After-Care/AfterCare'

class App extends React.Component {

  constructor() {
    super();
    this.state = { 
        modal: false, 
        user: null,
        username: "",
        token: null,
        allWorks: [],
        allNews: []
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
      username: username,
      user: user,
      token: token
    })
    localStorage.token = token

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

  }
  renderWorks = () => {
    return this.state.allWorks.map(work => 
          <Work image_url={work.image_url}/>  
    )
  }

  showFourMore = () => {
    API.showFourMore()
      .then(data => this.setState({
        allWorks: data.works
      }))
  }
  
  renderNews = () => {
    return this.state.allNews.map(news => <News news={news}/>)
  }

  showTwoMore = () => {
    API.getTwoNews()
      .then(data => this.setState({
        allNews: data.news
      }))
      // .then(data => console.log(data))
  }


  render() { 
    console.log(this.state)
    return ( 
      <Fragment>
        
        {localStorage.token ?  <Route exact path="/admin" component={() => <Dashboard signOut={this.signOut} showModal={this.showModal} show={this.state.modal} hideModal={this.hideModal} />} /> : null}
        <Route exact path="/" component={() => <Home allNews={this.state.allNews} showTwoMore={this.showTwoMore} showFourMore={this.showFourMore} renderNews={this.renderNews} renderWorks={this.renderWorks} showModal={this.showModal} show={this.state.modal} hideModal={this.hideModal}/>}/>
        {localStorage.token ? null : <Route exact path="/admin/signin" component={() => <SignIn signIn={this.signIn}/>}/>}
        <Route exact path="/admin/add-news" component={() => (this.state.modal && <NewsForm show={this.state.modal} handleClose={this.hideModal}/>)} />
        <Route exact path="/admin/add-work" component={() => (this.state.modal && <WorkForm show={this.state.modal} handleClose={this.hideModal}/>)} />
        <Route exact path="/admin/add-about" component={() => (this.state.modal && <AboutMeForm show={this.state.modal} handleClose={this.hideModal}/>)} />
        <Route exact path="/admin/add-aftercare" component={() => (this.state.modal && <AfterCareForm show={this.state.modal} handleClose={this.hideModal}/>)} />
        <Route exact path="/admin/edit-aftercare/:id" component={(props) => (this.state.modal && <EditAfterCare {...props} show={this.state.modal} handleClose={this.hideModal}/>)} />
        <Route exact path="/admin/edit-works/:id" component={(props) => (this.state.modal && <EditWorks {...props} show={this.state.modal} handleClose={this.hideModal}/>)} />
        <Route exact path="/admin/edit-news/:id" component={(props) => <EditNews {...props} show={this.state.modal} handleClose={this.hideModal}/>} />
        <Route exact path="/admin/edit-about/:id" component={(props) => (this.state.modal && <EditAbout {...props} show={this.state.modal} handleClose={this.hideModal}/>)} />
        <Route exact path="/AfterCare" component={() => <AfterCare/>} />
        {/* <Route exact path="/admin" component={() => <Dashboard showModal={this.showModal} show={this.state.modal} hideModal={this.hideModal} />} /> */}
        <Route exact path="/" component={() => (this.state.modal && <ContactForm showModal={this.showModal} show={this.state.modal} hideModal={this.hideModal} />)} />
      </Fragment>
     );
  }
}
 
export default App;