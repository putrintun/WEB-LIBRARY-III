import React from 'react';
import Main from './pages/Main';
import {Link} from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap'

class App extends React.Component {
  render(){
    return (
      <div> <hr />
        <Link to="/">Beranda</Link> |
        <Link to="/tentangsaya">About</Link> |
        <Link to="/karya">Creation</Link> |
        <Link to="/kontak">Contact</Link> |
        <Link to="/gallery">Gallery</Link> |
        <Link to="/cart">Cart</Link> <hr />
        <p><Main /></p>
      </div>
    );
  }
}

export default App;
