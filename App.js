import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Product from './components/product';
import About from './components/about';
import Contact from './components/contact';
import Blog from './components/blog';
import Testimonials from './components/testimonials';
import Faq from './components/faq';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="components/product.js">
          <Product />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
      </Switch>
      <Testimonials />
      <Faq />
      <Footer />
    </Router>
  );
}

export default App;