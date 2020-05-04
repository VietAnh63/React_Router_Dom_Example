import React from 'react';
import Nav from './components/Nav'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import RouterURL from './components/RouterURL';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <RouterURL/>
        <Footer />
      </Router>
    )
  }
}

export default App;
