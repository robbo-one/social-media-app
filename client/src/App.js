import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'
import "./App.css";

import MenuBar from './components/MenuBar'
import Home from './components/pages/Home.js'
import Login from './components/pages/Login.js'
import Register from './components/pages/Register.js'



function App() {
  return (
    <Router>
      <Container>
      <MenuBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path='register' component={Register} />
      </Container>
    </Router>
  )
}

export default App;
 