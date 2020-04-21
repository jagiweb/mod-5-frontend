import React, { Fragment } from 'react'
import '../index.css'
import EditNews from './EditNews'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class AllNews extends React.Component {
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
        const {title, image, description, news} = this.props
        return ( 
                        
                <Fragment>
                    <tr>
                        <td><p>{title}</p></td>
                        <td><p>{description}</p></td>
                        <td><img className="thumbnail" alt={image} src={image}/></td>
                        <td><button className="btn btn-success" onClick={() => this.handleShow()}><i class="fas fa-edit"></i></button></td>
                        <td><button className="btn btn-danger" onClick={() => this.props.deleteNews(news.id)}><i class="fas fa-trash"></i></button></td>
                    </tr>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Body className="back-white">
                            <EditNews id={news.id}/>
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
 
export default AllNews;