import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Product from "./Product"
import About from "./About"
import Contact from "./Contact"
import P404 from "./P404"
import Details from "./Details"

export default class RouterURL extends Component {
     render() {
          return (
               <>
                    <Switch>
                         <Route path="/" exact component={Product} />
                         <Route path="/about" component={About} />
                         <Route path="/contact" component={Contact} />
                         <Route path="/details/:id" exact component={Details} />
                         <Route path="*" exact component={P404} />
                    </Switch>
               </>
          )
     }
}
