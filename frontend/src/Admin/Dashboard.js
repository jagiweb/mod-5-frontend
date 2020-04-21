import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import API from '../API'
import AllWorks from './AllWorks'
import AllNews from './AllNews'
import AllAbout from './AllAbout'
import AllAfterCare from './AllAfterCare'
import AllContacts from './AllContacts'
import WorkForm from '../Work/WorkForm'
import NewsForm from '../News/NewsForm'
import AboutMeForm from '../About/AboutMeForm'
import AfterCareForm from '../After-Care/AfterCareForm'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import '../index.css'
import './admin.css'

class Dashboard extends React.Component {

    state={
        // WORKS
        works: [],
        worksShow: false,
        newWorkModal: false,
        editWorkModal: false,
        // NEWS
        news: [],
        newsShow: false,
        newNewsModal: false,
        editNewsModal: false,
        // ABOUT
        about: [],
        aboutShow: false,
        newAboutModal: false,
        // CARE
        care: [],
        careShow: false,
        newCareModal: false,
        editCareModal: false,
        // CONTACTS
        contacts: [],
        contactShow: false,
    }

    // MODALS TO CREATE/EDIT CONTENT //
    
    // WORK MODALS
    newWorkModalShow = () => {
        this.setState({
            newWorkModal: true
        })
    }

    newWorkModalClose = () => {
        this.setState({
            newWorkModal: false
        })
    }

    editWorkModalShow = () => {
        this.setState({
            editWorkModal: true
        })
    }

    editWorkModalClose = () => {
        this.setState({
            editWorkModal: false
        })
    }

    // NEWS MODALS

    newNewsModalShow = () => {
        this.setState({
            newNewsModal: true
        })
    }

    newNewsModalClose = () => {
        this.setState({
            newNewsModal: false
        })
    }

    editNewsModalShow = () => {
        this.setState({
            editNewsModal: true
        })
    }

    editNewsModalClose = () => {
        this.setState({
            editNewsModal: false
        })
    }

    // ABOUT MODALS

    newAboutModalShow = () => {
        this.setState({
            newAboutModal: true
        })
    }

    newAboutModalClose = () => {
        this.setState({
            newAboutModal: false
        })
    }

    // AFTER CARE MODALS
    newCareModalShow = () => {
        this.setState({
            newCareModal: true
        })
    }

    newCareModalClose = () => {
        this.setState({
            newCareModal: false
        })
    }

    // END OF MODALS FUNCTIONS

    // RENDER ALL CONTENT
    renderAllwork = () =>{
        return this.state.works.map(work => <AllWorks key={work.id} deleteWork={this.deleteWork} hideModal={this.props.hideModal} showModal={this.props.showModal} work={work} image={work.image_url}/>)
    }

    renderAllNews = () =>{
        return this.state.news.map(news => <AllNews key={news.id} deleteNews={this.deleteNews} hideModal={this.props.hideModal} showModal={this.props.showModal} news={news} title={news.title} description={news.description} image={news.image_url}/>)
    }

    renderAllAbout = () =>{
        return this.state.about.map(about => <AllAbout key={about.id} deleteAbout={this.deleteAbout} hideModal={this.props.hideModal} showModal={this.props.showModal} about={about} title={about.title} description={about.description} description2={about.description2} description3={about.description3} image={about.image_url}/>)
    }

    renderAllAfterCare = () =>{
        return this.state.care.map(care => <AllAfterCare key={care.id} deleteAfterCare={this.deleteAfterCare} hideModal={this.props.hideModal} showModal={this.props.showModal} care={care} title={care.title} description={care.description} description2={care.description2} description3={care.description3}/>)
    }

    renderAllContacts = () =>{
        return this.state.contacts.map(contact => <AllContacts key={contact.id} deleteContacts={this.deleteContacts} hideModal={this.props.hideModal} showModal={this.props.showModal} contact={contact} name={contact.name} description={contact.description} email={contact.email}/>)
    }

    // FETCH ALL CONTENT

    componentDidMount(){

        API.getWorks()
            .then(data => this.setState({
                works: data.works
        }))

        API.getNews()
        .then(data => this.setState({
            news: data.news
        }))    

        API.getAbout()
        .then(data => this.setState({
            about: data.about
        }))  

        API.getAfterCare()
        .then(data => this.setState({
            care: data.care
        })) 
        
        API.getContacts()
        .then(data => this.setState({
            contacts: data.contacts
        })) 
    }
    
    // FETCH AND RENDER MORE/LESS CONTENT

    renderAllWorks = () => {
        API.getAllWorks()
        .then(data => this.setState({
            works: data.works
        }))
    }

    renderEightWorks = () => {
        API.getWorks()
        .then(data => this.setState({
            works:data.works
        }))
    }

    renderAllNewsAdmin = () => {
        API.getAllNews()
        .then(data => this.setState({
            news: data.news
        }))
    }

    renderFourNews = () => {
        API.getNews()
        .then(data => this.setState({
            news: data.news
        }))
    }

    // DELETE CONTENT FUNCTIONS
    
    deleteWork = (id) =>{
        API.workDelete(id)
            this.setState({
                works: [...this.state.works].filter(work => work.id !== id)
            })
    }

    deleteNews = (id) =>{
        API.newsDelete(id)
            this.setState({
                news: [...this.state.news].filter(news => news.id !== id)
            })
    }

    deleteAfterCare = (id) =>{
        API.afterCareDelete(id)
            this.setState({
                care: [...this.state.care].filter(care => care.id !== id)
            })
    }

    deleteAbout = (id) =>{
        API.aboutDelete(id)
            this.setState({
                about: [...this.state.about].filter(about => about.id !== id)
            })
    }

    deleteContacts = (id) =>{
        API.contactsDelete(id)
            this.setState({
                contacts: [...this.state.contacts].filter(contact => contact.id !== id)
            })
    }

    // SHOW CONTENT FUNCTIONS

    showWorks = () => {
        this.setState({
            worksShow: !this.state.worksShow,
            newsShow: false,
            aboutShow: false,
            contactShow: false,
            careShow: false
        })
    }

    showNews = () => {
        this.setState({
            newsShow: !this.state.newsShow,
            aboutShow: false,
            worksShow: false,
            contactShow: false,
            careShow: false
        })
    }

    showAfterCare = () => {
        this.setState({
            careShow: !this.state.careShow,
            newsShow: false,
            aboutShow: false,
            worksShow: false,
            contactShow: false
        })
    }

    showAbout = () => {
        this.setState({
            aboutShow: !this.state.aboutShow,
            newsShow: false,
            worksShow: false,
            contactShow: false,
            careShow: false
        })
    }

    showContacts = () => {
        this.setState({
            contactShow: !this.state.contactShow,
            newsShow: false,
            aboutShow: false,
            worksShow: false,
            careShow: false
        })
    }

    render() { 
        return ( 
            <Fragment>
                <nav className="navbar scrolling-navbar fixed-top navbar-expand-lg navbar-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
                            <div className="container">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link text-white">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        
                                    </li>
                                </ul>
                                <Link to="/" className="nav-link text-white" onClick={this.props.signOut}>Log Out</Link>
                            </div>
                        </div>                    
                </nav>
                <div className="container m-top100">
                    <hr/>
                    <h5 className="text-center font-title">UPLOAD NEW CONTENT</h5>
                    <hr/>
                    <div className="row">

                        {/* ADD WORKS */}
                            <div className="text-center col-lg-3 col-md-3 col-sm-6">
                                <div onClick={this.newWorkModalShow} className="box">
                                    <div className="icon-size"><i class="fas fa-plus-square"></i></div>
                                    <p className="add-font">Upload WORKS</p>
                                </div>
                                <Modal show={this.state.newWorkModal} onHide={this.newWorkModalClose}>
                                    <Modal.Body className="back-white">
                                        <WorkForm/>
                                    </Modal.Body>
                                    <Modal.Footer className="back-white">
                                    <Button variant="btn btn-dark" onClick={this.newWorkModalClose}>
                                        Close
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>

                            {/* ADD NEWS */}
                            <div className="text-center col-lg-3 col-md-3 col-sm-6">
                                <div onClick={this.newNewsModalShow} className="box4">
                                    <div className="icon-size"><i class="fas fa-plus-square"></i></div>
                                    <p className="add-font">Upload NEWS</p>
                                </div>
                                <Modal show={this.state.newNewsModal} onHide={this.newNewsModalClose}>
                                    <Modal.Body className="back-white">
                                        <NewsForm/>
                                    </Modal.Body>
                                    <Modal.Footer className="back-white">
                                    <Button variant="btn btn-dark" onClick={this.newNewsModalClose}>
                                        Close
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>

                            {/* ADD ABOUT */}
                            <div className="text-center col-lg-3 col-md-3 col-sm-6">  
                                <div onClick={this.newAboutModalShow} className="box2">
                                    <div className="icon-size"><i class="fas fa-plus-square"></i></div>
                                    <p className="add-font">Upload About</p>
                                </div>
                                <Modal  show={this.state.newAboutModal} onHide={this.newAboutModalClose}>
                                    <Modal.Body className="back-white">
                                        <AboutMeForm/>
                                    </Modal.Body>
                                    <Modal.Footer className="back-white">
                                    <Button variant="btn btn-dark" onClick={this.newAboutModalClose}>
                                        Close
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>

                            {/* ADD AFTERCARE */}
                            <div className="text-center col-lg-3 col-md-3 col-sm-6">
                                <div onClick={this.newCareModalShow} className="box3">
                                    <div className="icon-size"><i class="fas fa-plus-square"></i></div>
                                    <p className="add-font">Upload Care</p>
                                </div>
                                <Modal show={this.state.newCareModal} onHide={this.newCareModalClose}>
                                    <Modal.Body className="back-white">
                                        <AfterCareForm/>
                                    </Modal.Body>
                                    <Modal.Footer className="back-white">
                                    <Button variant="btn btn-dark" onClick={this.newCareModalClose}>
                                        Close
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                            
                    </div>

                    <hr/>
                    <h5 className="text-center font-title">MANAGE CONTENT</h5>
                    <hr/>

                    <div className="row">
                            <div className="col-md-1 col-lg-1 col-sm-2">

                            </div>
                            <div className="col-md-2 col-lg-2 col-sm-2">
                                <div className="button-box add-font2 text-center" onClick={() => this.showWorks()}><i class="fas fa-briefcase"></i> {this.state.worksShow ? "Hide Work" : "Show Work"}</div>
                            </div>
                            <div className="col-md-2 col-lg-2 col-sm-2">
                                <div className="button-box add-font2 text-center" onClick={() => this.showAfterCare()}><i class="fas fa-clinic-medical"></i> {this.state.careShow ? "Hide AfterCare" : "Show AfterCare"}</div>
                            </div>
                            <div className="col-md-2 col-lg-2 col-sm-2">
                                <div className="button-box add-font2 text-center" onClick={() => this.showNews()}><i class="far fa-newspaper"></i> {this.state.newsShow ? "Hide News" : "Show News"}</div>
                            </div>
                            <div className="col-md-2 col-lg-2 col-sm-2">
                                <div className="button-box add-font2 text-center" onClick={() => this.showAbout()}><i class="fas fa-address-card"></i> {this.state.aboutShow ? "Hide About Me" : "Show About Me"}</div>
                            </div>
                            <div className="col-md-2 col-lg-2 col-sm-2">
                                <div className="button-box add-font2 text-center" onClick={() => this.showContacts()}><i class="fas fa-address-book"></i> {this.state.contactShow ? "Hide Contacts" : "Show Contacts"}</div>
                            </div>
                            <div className="col-md-1 col-lg-1 col-sm-2">

                            </div>
                           
                    </div>

                        <div className="table-responsive">

                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xl-3"></div>
                                
                                {this.state.worksShow ? <div className="col-lg-6 col-md-6 col-sm-6 col-xl-6">
                                    
                                    <table className="table">
                                        
                                        <th scope="col" className="text-left">Thumbnail</th>
                                        <th scope="col" className="text-left">Edit</th>
                                        <th scope="col" className="text-left">Delete</th>
                                        {this.renderAllwork()}
                                    </table>
                                    <button className="text-center btn btn-success" onClick={() => this.renderAllWorks()}>Show More</button>
                                    {(this.state.works.length > 8) ? <button className="text-center btn btn-success" onClick={() => this.renderEightWorks()}>Show Less</button> : null}
                                </div> : null}
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xl-3"></div>
                            </div>

                            <div className="row">
                                {this.state.newsShow ? <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                                    
                                    <table className="table">
                                        <th scope="col" className="text-left">Title</th>
                                        <th scope="col" className="text-left">Description</th>
                                        <th scope="col" className="text-left">Thumbnail</th>
                                        <th scope="col" className="text-left">Edit</th>
                                        <th scope="col" className="text-left">Delete</th>
                                        {this.renderAllNews()}
                                    </table>
                                    <button className="text-center btn btn-success" onClick={() => this.renderAllNewsAdmin()}>Show More</button>
                                    {(this.state.news.length > 4) ? <button className="text-center btn btn-success" onClick={() => this.renderFourNews()}>Show Less</button> : null}
                                </div> : null}
                            </div>

                            <div className="row">
                                {this.state.aboutShow ? <div className="table-responsive col-lg-12 col-md-12 col-sm-12 col-xl-12">
                                    
                                    <table className="table table-responsive">
                                        <th scope="col" className="text-left">Title</th>
                                        <th scope="col" className="text-left">Paragraph</th>
                                        <th scope="col" className="text-left">Paragraph 2</th>
                                        <th scope="col" className="text-left">Paragraph 3</th>
                                        <th scope="col" className="text-left">Thumbnail</th>
                                        <th scope="col" className="text-left">Edit</th>
                                        <th scope="col" className="text-left">Delete</th>
                                        {this.renderAllAbout()}
                                    </table>
                                </div> : null}
                            </div>
                            <div className="row">
                                {this.state.careShow ? <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                                    
                                    <table className="table">
                                        <th scope="col" className="text-left">Title</th>
                                        <th scope="col" className="text-left">Paragraph</th>
                                        <th scope="col" className="text-left">Paragraph 2</th>
                                        <th scope="col" className="text-left">Paragraph 3</th>
                                        <th scope="col" className="text-left">Edit</th>
                                        <th scope="col" className="text-left">Delete</th>
                                        {this.renderAllAfterCare()}
                                    </table>
                                </div> : null}
                            </div>
                            
                            <div className="row">
                                {this.state.contactShow ? <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                                    
                                    <table className="table">
                                        <th scope="col" className="text-left">Name</th>
                                        <th scope="col" className="text-left">Email</th>
                                        <th scope="col" className="text-left">Telephone</th>
                                        <th scope="col" className="text-left">Description</th>
                                        <th scope="col" className="text-left">Delete</th>
                                        {this.renderAllContacts()}
                                    </table>
                                </div> : null}
                            </div>
                        </div>
                    
                </div>
            </Fragment>
        );
    }
}
 
export default Dashboard;