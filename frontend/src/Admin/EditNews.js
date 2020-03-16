import React from 'react'
// import { Link } from 'react-router-dom'
const URL = `http://localhost:3001/admin/edit-news/:id`

class EditNews extends React.Component {
    constructor() {
        super();
        this.state = {  }
    }

    componentDidMount(){
        fetch(URL)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
    render() { 
        console.log(this.props)
        return ( 
            <div>
                HERE
            </div>
         );
    }
}
 
export default EditNews;