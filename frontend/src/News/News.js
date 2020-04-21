import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function News({news}) {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return ( 
          <div>
            <div className="col-md-4 col-lg-4">
              <ul className="grid cs-style-2">
                  <li>
                    <figure onClick={handleShow} className="works-img"> 
                        <img alt="" src={news.image_url}/>
                      <figcaption>
                        <p>{news.title}</p>
                        <span></span>
                        <button onClick={handleShow}>Take a look</button>
                      </figcaption>
                    </figure>
                  </li>
              </ul>
              {/* <p key={news.id}>{news.description}</p>  */}
            </div>
            <Modal className="modal-work" show={show} onHide={handleClose}>
                <Modal.Body className="back-ground modal-content">
                  {news.title}
                  <img alt="" src={news.image_url}/>
                  <p>{news.description}</p>
                  </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
        </div>
        
     );
}
 
export default News;