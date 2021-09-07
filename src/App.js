import './App.css';
import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import { Provider } from 'react-redux';
import store from './store';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Shipment from './components/Shipment/Shipment';

function App() {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <Nav />

          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/details/:id" exact component={Details} />
          <Route path="/shipment" component={Shipment} />

          <Footer />
          <ScrollToTop style={{ backgroundColor: '#12d0d9', padding: '5px' }} />
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
