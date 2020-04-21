import React, { Fragment } from 'react'
import '../index.css'
import EditAbout from './EditAbout'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class AllAbout extends React.Component {
    state = {
        show: false
    }

    handleShow = () => {
        this.setState({
            show: true
        })
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    render() { 
        const {title, image, description, description2, description3, about} = this.props
        return ( 
            <Fragment>
                <tr>
                    <td><p>{title}</p></td>
                    <td>{description.substring(0,120)}...</td>
                    <td><p>{description2.substring(0,120)}...</p></td>
                    <td><p>{description3.substring(0,120)}...</p></td>
                    <td><img className="thumbnail" alt={image} src={image}/></td>
                    <td><button className="btn btn-success" onClick={() => this.handleShow()} to={URL}><i class="fas fa-edit"></i></button></td>
                    <td><button className="btn btn-danger" onClick={() => this.props.deleteAbout(about.id)}><i class="fas fa-trash"></i></button></td>
                </tr>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Body className="back-white">
                        <EditAbout id={about.id}/>
                    </Modal.Body>
                    <Modal.Footer className="back-white">
                    <Button variant="btn btn-dark" onClick={this.handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
         );
    }
}
 
export default AllAbout;