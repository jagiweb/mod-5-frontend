import React, { Fragment } from 'react'
import '../index.css'
import { Link, Route } from 'react-router-dom'
import EditNews from './EditNews'



class AllNews extends React.Component {
    constructor() {
        super();
        this.state = {  }
    }
    
    render() { 
        const {title, image, description, news} = this.props
        console.log(this.props)
        const URL = `/admin/edit-news/${news.id}`

        return ( 
            <Fragment>
                <tr>
                    <td><p>{title}</p></td>
                    <td><p>{description}</p></td>
                    <td><img className="thumbnail" alt={image} src={image}/></td>
                    <td><Link onClick={() => this.props.showModal()} to={URL}>Edit</Link></td>
                    {/* <Route exact path={URL} component={() => <EditNews url={URL} news={news} hideModal={this.props.hideModal}/> } /> */}
                </tr>
            </Fragment>
                
         );
    }
}
 
export default AllNews;