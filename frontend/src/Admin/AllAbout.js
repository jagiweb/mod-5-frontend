import React from 'react'
import '../index.css'

class AllAbout extends React.Component {
    constructor() {
        super();
        this.state = {  }
    }
    render() { 
        const {title, image, description, description2, description3, about} = this.props
        return ( 
                <tr>
                    <td><p>{title}</p></td>
                    <td>{description}</td>
                    <td><p>{description2}</p></td>
                    <td><p>{description3}</p></td>
                    <td><img className="thumbnail" alt={image} src={image}/></td>
                    <td><button>Edit</button></td>
                </tr>
         );
    }
}
 
export default AllAbout;