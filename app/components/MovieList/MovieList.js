import React, { Component } from 'react';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    console.log(this.props)
    this.props.fetchMovies();
  }

  render() {
    if (this.props.isLoading) {
      return <div>loading...</div>
    }
    console.log(this.props);
    return (
      <div>
        MOVIESafas
      </div>
    )
  }
}
