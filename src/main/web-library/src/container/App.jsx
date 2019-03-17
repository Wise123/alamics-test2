import React, {Component} from 'react';
import BookCatalogue from './BookCatalogue/BookCatalogue';
import './App.css';
import {Route} from 'react-router-dom';
import {withRouter} from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={BookCatalogue}/>
      </div>
    );
  }
}

export default withRouter(App);
