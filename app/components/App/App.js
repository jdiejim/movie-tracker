import React, { Component } from 'react';
import Header from '../Header/Header'


export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <Header/>
        <h1>Movie Watcher</h1>
      </div>
    )
  }
}
