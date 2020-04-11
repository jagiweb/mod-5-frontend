import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import API from '../API'
import AllWorks from './AllWorks'
import AllNews from './AllNews'
import AllAbout from './AllAbout'
import AllAfterCare from './AllAfterCare'
import AllContacts from './AllContacts'
import '../index.css'
import './admin.css'

class Dashboard extends React.Component {

    state={
        works: [],
        news: [],
        about: [],
        care: [],
        contacts: []

    }
    
    renderAllwork = () =>{
        return this.state.works.map(work => <AllWorks deleteWork={this.deleteWork} hideModal={this.props.hideModal} showModal={this.props.showModal} work={work} image={work.image_url}/>)
    }

    renderAllNews = () =>{
        return this.state.news.map(news => <AllNews deleteNews={this.deleteNews} hideModal={this.props.hideModal} showModal={this.props.showModal} news={news} title={news.title} description={news.description} image={news.image_url}/>)
    }

    renderAllAbout = () =>{
        return this.state.about.map(about => <AllAbout deleteAbout={this.deleteAbout} hideModal={this.props.hideModal} showModal={this.props.showModal} about={about} title={about.title} description={about.description} description2={about.description2} description3={about.description3} image={about.image_url}/>)
    }

    renderAllAfterCare = () =>{
        return this.state.care.map(care => <AllAfterCare deleteAfterCare={this.deleteAfterCare} hideModal={this.props.hideModal} showModal={this.props.showModal} care={care} title={care.title} description={care.description} description2={care.description2} description3={care.description3}/>)
    }

    renderAllContacts = () =>{
        return this.state.contacts.map(contact => <AllContacts deleteContacts={this.deleteContacts} hideModal={this.props.hideModal} showModal={this.props.showModal} contact={contact} name={contact.name} description={contact.description} email={contact.email}/>)
    }

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

    render() { 
        return ( 
            <Fragment>
                <div className="container">
                    <Link to="/admin/add-work" className="btn btn-labeled btn-success" onClick={this.props.showModal} ><span className="btn-label"><i className="icon-image"></i></span>Add Work</Link>
                    <Link to="/admin/add-news" onClick={this.props.showModal} >Add News</Link>
                    <Link to="/admin/add-about" onClick={this.props.showModal} >Add About</Link>
                    <Link to="/admin/add-aftercare" onClick={this.props.showModal} >Add AfterCare</Link>
                    -
                    -
                    <Link to="/" onClick={this.props.signOut}>Log Out</Link>
                    -
                    -
                    <Link to="/">Home</Link>
                    <div>
                        <h2 className="text-center">All Work</h2>
                        <table>
                            <th className="text-left">URL</th>
                            <th className="text-left">Thumbnail</th>
                            <th className="text-left">Edit</th>
                            <th className="text-left">Delete</th>
                            {this.renderAllwork()}
                        </table>
                        <button className="text-center btn btn-success" onClick={() => this.renderAllWorks()}>Show More</button>
                        {(this.state.works.length > 8) ? <button className="text-center btn btn-success" onClick={() => this.renderEightWorks()}>Show Less</button> : null}
                    </div>

                    <div>
                        <h2 className="text-center">All News</h2>
                        <table>
                            <th className="text-left">Title</th>
                            <th className="text-left">Description</th>
                            <th className="text-left">Thumbnail</th>
                            <th className="text-left">Edit</th>
                            <th className="text-left">Delete</th>
                            {this.renderAllNews()}
                        </table>
                        <button className="text-center btn btn-success" onClick={() => this.renderAllNewsAdmin()}>Show More</button>
                        {(this.state.news.length > 4) ? <button className="text-center btn btn-success" onClick={() => this.renderFourNews()}>Show Less</button> : null}
                    </div>

                    <div>
                        <h2 className="text-center">All About</h2>
                        <table>
                            <th className="text-left">Title</th>
                            <th className="text-left">Paragraph</th>
                            <th className="text-left">Paragraph 2</th>
                            <th className="text-left">Paragraph 3</th>
                            <th className="text-left">Thumbnail</th>
                            <th className="text-left">Edit</th>
                            <th className="text-left">Delete</th>
                            {this.renderAllAbout()}
                        </table>
                    </div>

                    <div>
                        <h2 className="text-center">All After Care</h2>
                        <table>
                            <th className="text-left">Title</th>
                            <th className="text-left">Paragraph</th>
                            <th className="text-left">Paragraph 2</th>
                            <th className="text-left">Paragraph 3</th>
                            <th className="text-left">Edit</th>
                            <th className="text-left">Delete</th>
                            {this.renderAllAfterCare()}
                        </table>
                    </div>

                    <div>
                        <h2 className="text-center">All Contacts</h2>
                        <table>
                            <th className="text-left">Name</th>
                            <th className="text-left">Email</th>
                            <th className="text-left">Telephone</th>
                            <th className="text-left">Description</th>
                            <th className="text-left">Delete</th>
                            {this.renderAllContacts()}
                        </table>
                    </div>

                </div>
            </Fragment>
        );
    }
}
 
export default Dashboard;