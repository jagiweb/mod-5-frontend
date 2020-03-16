import React from 'react'
import '../index.css'

class AllAfterCare extends React.Component {
    constructor() {
        super();
        this.state = {  }
    }
    render() { 
        const {title, description, description2, description3, care} = this.props
        return ( 
                <tr>
                    <td><p>{title}</p></td>
                    <td><p>{description}</p></td>
                    <td><p>{description2}</p></td>
                    <td><p>{description3}</p></td>
                    <td><button>Edit</button></td>
                </tr>
         );
    }
}
 
export default AllAfterCare;