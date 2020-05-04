import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
     render() {
          return (
               <div>
                     <div className="container-fluid">
                         <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                   <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                                        <ul className="navbar-nav">
                                             <li className="nav-item active" >
                                                  <Link className="nav-link" to="/">
                                                       Home
                                                  </Link>
                                             </li>
                                             <li className="nav-item">
                                                  <Link className="nav-link" to="/about">
                                                       About
                                                  </Link>
                                             </li>
                                             <li className="nav-item">
                                                  <Link className="nav-link" to="/contact">
                                                       Contact
                                                  </Link>
                                             </li>
                                        </ul>
                                   </nav>
                              </div>
                         </div>
                    </div>
               </div>
          )
     }
}
