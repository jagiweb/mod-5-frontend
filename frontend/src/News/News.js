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
              <ul class="grid cs-style-2">
                  <li>
                    <figure> 
                        <img key={news.id} alt="" src={news.image_url}/>
                      <figcaption>
                        <p>{news.title}</p>
                        <span></span>
                        <a onClick={handleShow} href={handleShow}>Take a look</a>
                      </figcaption>
                    </figure>
                  </li>
              </ul>
              {/* <p key={news.id}>{news.description}</p>  */}
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                  {news.title}
                  <img src={news.image_url}/>
                  <p>{news.description}</p>
                  </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
        </div>
        
     );
}
 
export default News;