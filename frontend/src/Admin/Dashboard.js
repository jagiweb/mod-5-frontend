import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import API from '../API'
import AllWorks from './AllWorks'
import AllNews from './AllNews'
import AllAbout from './AllAbout'
import AllAfterCare from './AllAfterCare'
import AllContacts from './AllContacts'
import '../index.css'

class Dashboard extends React.Component {

    state={
        works: [],
        news: [],
        about: [],
        care: [],
        contacts: []

    }
    
    renderAllwork = () =>{
        return this.state.works.map(work => <AllWorks hideModal={this.props.hideModal} showModal={this.props.showModal} work={work} image={work.image_url}/>)
    }

    renderAllNews = () =>{
        return this.state.news.map(news => <AllNews hideModal={this.props.hideModal} showModal={this.props.showModal} news={news} title={news.title} description={news.description} image={news.image_url}/>)
    }

    renderAllAbout = () =>{
        return this.state.about.map(about => <AllAbout hideModal={this.props.hideModal} showModal={this.props.showModal} about={about} title={about.title} description={about.description} description2={about.description2} description3={about.description3} image={about.image_url}/>)
    }

    renderAllAfterCare = () =>{
        return this.state.care.map(care => <AllAfterCare hideModal={this.props.hideModal} showModal={this.props.showModal} care={care} title={care.title} description={care.description} description2={care.description2} description3={care.description3}/>)
    }

    renderAllContacts = () =>{
        return this.state.contacts.map(contact => <AllContacts hideModal={this.props.hideModal} showModal={this.props.showModal} contact={contact} title={contact.title} description={contact.description}/>)
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


    render() { 
        return ( 
            <Fragment>
                <Link to="/admin/add-work" onClick={this.props.showModal} >Add Work</Link>
                <Link to="/admin/add-news" onClick={this.props.showModal} >Add News</Link>
                <Link to="/admin/add-about" onClick={this.props.showModal} >Add About</Link>
                <Link to="/admin/add-aftercare" onClick={this.props.showModal} >Add AfterCare</Link>
                <div>
                    <h2 className="text-center">All Work</h2>
                    <table>
                        <th className="text-left">URL</th>
                        <th className="text-left">Thumbnail</th>
                        <th className="text-left">Edit</th>
                        <th className="text-left">Delete</th>
                        {this.renderAllwork()}
                    </table>
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
                        <th className="text-left">Title</th>
                        <th className="text-left">Paragraph</th>
                        <th className="text-left">Delete</th>
                        {this.renderAllContacts()}
                    </table>
                </div>

                
            </Fragment>
        );
    }
}
 
export default Dashboard;