import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Product extends Component {
     render() {
          return (
               <div>
                    <div id="body">
                         <h2 className="text-center">Courses</h2>
                         <div className="container">
                              <div className="row">
                                   <div className="col-lg-3 col-md-6 col-sm-12">
                                        <img className="img-fluid mb-4" src="/images/slide-1.jpg" alt="1"/>
                                        <h4>
                                             <Link to="/details/1">Lorem ipsum dolor sit amet</Link>
                                        </h4>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                                             ultricies gravida nulla fermentum suscipit.
                                        </p>
                                   </div>
                                   <div className="col-lg-3 col-md-6 col-sm-12">
                                        <img className="img-fluid mb-4" src="/images/slide-2.jpg" alt="2"/>
                                        <h4>
                                             <Link to="/details/2">Lorem ipsum dolor sit amet</Link>
                                        </h4>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                                             ultricies gravida nulla fermentum suscipit.
                                        </p>
                                   </div>
                                   <div className="col-lg-3 col-md-6 col-sm-12">
                                        <img className="img-fluid mb-4" src="/images/slide-3.jpg" alt="3" />
                                        <h4>
                                             <Link to="/details/3">Lorem ipsum dolor sit amet</Link>
                                        </h4>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                                             ultricies gravida nulla fermentum suscipit.
                                        </p>
                                   </div>
                                   <div className="col-lg-3 col-md-6 col-sm-12">
                                        <img className="img-fluid mb-4" src="/images/slide-4.jpg" alt="4"/>
                                        <h4>
                                             <Link to="/details/4">Lorem ipsum dolor sit amet</Link>
                                        </h4>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                                             ultricies gravida nulla fermentum suscipit.
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>;
               </div>
          )
     }
}
