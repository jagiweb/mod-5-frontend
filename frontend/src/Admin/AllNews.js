import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
import API from '../API'

class AllNews extends React.Component {
    constructor() {
        super();
        this.state = {  }
    }
    deleteNews = () =>{
        const {news} = this.props
        API.newsDelete(news.id)
            .then(data => console.log(data))
    }

    
    render() { 
        const {title, image, description, news} = this.props
        const URL = `/admin/edit-news/${news.id}`
        return ( 
                <tr>
                    <td><p>{title}</p></td>
                    <td><p>{description}</p></td>
                    <td><img className="thumbnail" alt={image} src={image}/></td>
                    <td><Link onClick={() => this.props.showModal()} to={URL}>Edit</Link></td>
                    <td><button onClick={() => this.deleteNews()}>Delete</button></td>
                </tr>        
         );
    }
}
 
export default AllNews;