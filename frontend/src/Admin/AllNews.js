import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

class AllNews extends React.Component {

    render() { 
        const {title, image, description, news} = this.props
        const URL = `/admin/edit-news/${news.id}`
        return ( 
                <tr>
                    <td><p>{title}</p></td>
                    <td><p>{description}</p></td>
                    <td><img className="thumbnail" alt={image} src={image}/></td>
                    <td><Link onClick={() => this.props.showModal()} to={URL}>Edit</Link></td>
                    <td><button onClick={() => this.props.deleteNews(news.id)}>Delete</button></td>
                </tr>        
         );
    }
}
 
export default AllNews;