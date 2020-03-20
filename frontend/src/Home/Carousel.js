import React from 'react'
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>

            
            <div id="background-carousel" class="carousel slide" data-ride="carousel">
                    <div id="myCarousel">
                        <div class="carousel-inner">
                            <div className="carousel-item active">
                                <div className="view">
                                    <img class="d-block w-100" src="https://www.radissonred.com/wp-content/uploads/2016/07/shutterstock_420858511.jpg" alt="First slide"/>
                                    <div class="mask rgba-black-light"></div>
                                </div>
                                <div class="carousel-caption">
                                    <h3 class="h3-responsive">Light mask</h3>
                                    <p>First text</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="view">
                                    <img class="d-block w-100" src="https://media.timeout.com/images/105233178/image.jpg" alt="Second slide"/>
                                    <div class="mask rgba-black-light"></div>
                                </div>
                                <div class="carousel-caption">
                                    <h3 class="h3-responsive">Light mask</h3>
                                    <p>First text</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="view">
                                    <img class="d-block w-100" src="https://i2-prod.getreading.co.uk/incoming/article17005557.ece/ALTERNATES/s1200b/0_Tattoo-generic.jpg" alt="Second slide"/>
                                    <div class="mask rgba-black-light"></div>
                                </div>
                                <div class="carousel-caption">
                                    <h3 class="h3-responsive">Light mask</h3>
                                    <p>First text</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        //     <div id="carousel-example-1" class="carousel slide carousel-fade" data-ride="carousel">
        //     <ol class="carousel-indicators">
        //       <li data-target="#carousel-example-1" data-slide-to="0" class="active"></li>
        //       <li data-target="#carousel-example-1" data-slide-to="1"></li>
        //       <li data-target="#carousel-example-1" data-slide-to="2"></li>
        //     </ol>
        //     <div class="carousel-inner" role="listbox">
        //       <div class="carousel-item active">
        //         <div class="view">
        //           <div class="full-bg-img flex-center mask rgba-indigo-light white-text">
        //             <ul class="animated fadeInUp col-md-12 list-unstyled list-inline">
        //               <li>
        //                 <h1 class="font-weight-bold text-uppercase">Material Design for Bootstrap 4</h1>
        //               </li>
        //               <li>
        //                 <p class="font-weight-bold text-uppercase py-4">The most powerful and free UI KIT for Bootstrap</p>
        //               </li>
        //               <li class="list-inline-item">
        //                 <a target="_blank" href="https://mdbootstrap.com/getting-started/" class="btn btn-unique btn-lg btn-rounded mr-0">Sign up!</a>
        //               </li>
        //               <li class="list-inline-item">
        //                 <a target="_blank" href="https://mdbootstrap.com/material-design-for-bootstrap/" class="btn btn-cyan btn-lg btn-rounded ml-0">Learn more</a>
        //               </li>
        //             </ul>
        //           </div>
        //         </div>
        //       </div>
        //       <div class="carousel-item">
        //         <div class="view">
        //           <div class="full-bg-img flex-center mask rgba-purple-light white-text">
        //             <ul class="animated fadeInUp col-md-12 list-unstyled">
        //               <li>
        //                 <h1 class="font-weight-bold text-uppercase">Lots of tutorials at your disposal</h1>
        //               </li>
        //               <li>
        //                 <p class="font-weight-bold text-uppercase py-4">And all of them are FREE!</p>
        //               </li>
        //               <li>
        //                 <a target="_blank" href="https://mdbootstrap.com/bootstrap-tutorial/" class="btn btn-primary btn-rounded btn-lg">Start learning</a>
        //               </li>
        //             </ul>
        //           </div>
        //         </div>
        //       </div>
        //       <div class="carousel-item">
        //         <div class="view">
        //           <div class="full-bg-img flex-center mask rgba-blue-light white-text">
        //             <ul class="animated fadeInUp col-md-12 list-unstyled">
        //               <li>
        //                 <h1 class="font-weight-bold text-uppercase">Visit our support forum</h1></li>
        //               <li>
        //                 <p class="font-weight-bold text-uppercase py-4">Our community can help you with any question</p>
        //               </li>
        //               <li>
        //                 <a target="_blank" href="https://mdbootstrap.com/forums/forum/support/" class="btn btn-lg btn-indigo btn-rounded">Support forum</a>
        //               </li>
        //             </ul>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //     <a class="carousel-control-prev" href="#carousel-example-1" role="button" data-slide="prev">
        //       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //       <span class="sr-only">Previous</span>
        //     </a>
        //     <a class="carousel-control-next" href="#carousel-example-1" role="button" data-slide="next">
        //       <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //       <span class="sr-only">Next</span>
        //     </a>
        //   </div>

         );
    }
}
 
export default Carousel;