import React, {Component} from 'react';
import {Route} from 'react-router';
import { Layout } from './components/Layout';
import Home  from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Submit from './components/Submit';
import Resume from './components/Resume';
import './index.css';

export default class App extends Component {
  render () {
   if(window.location.pathname === '/resume') {
     return < Resume />
   }
  return (
      <div>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
            <Route path='/projects' component={Project} />
            <Route path='/contact' component={Contact} />
            <Route path='/submit' component={Submit} />
            
      </Layout>
      <Footer />
      </div>
     
    );
  }
}


