import React from 'react'
import '../index.css'
import { Link, Route } from 'react-router-dom'
import EditWorks from './EditWorks'

class AllWorks extends React.Component {
    constructor() {
        super();
        this.state = { 
            modal: false
         }
      }
    
      showModal = () => {
          this.setState({modal: true})
          console.log(this.state)
      }
    
      hideModal = () => {
          this.setState({ modal: false })
      }
    
    render() { 
        const {image, work} = this.props
        console.log(this.props.showModal)
        const URL = `/admin/edit/${work.title}`
        return ( 
            <div >
                {/* <EditWorks work={work}/> */}
                <tr>
                    <td><p>{image}</p></td>
                    <td><img className="thumbnail" alt={image} src={image}/></td>
                    <td><Link onClick={this.showModal} to={URL}>Edit</Link></td>
                    <Route exact path={URL} component={() => (this.state.modal && <EditWorks work={work} show={this.state.modal} handleClose={this.hideModal}/>)} />
                </tr>
            </div>
         );
    }
}
 
export default AllWorks;