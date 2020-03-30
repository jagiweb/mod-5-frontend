import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Work({image_url}) {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(image_url)
  return (
            <div  className="col-md-3 col-lg-3">
              <div onClick={handleShow} className="img-hover-zoom img-hover-zoom--colorize">
                <img className="about-img" alt="" src={image_url}/>
              </div>
              <Modal show={show} onHide={handleClose}>
                <Modal.Body><img alt={image_url} src={image_url}/></Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>         
  );
}


export default Work