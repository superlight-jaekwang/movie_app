import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {

  // Render : componentWillMount() => render() => componentDidMount()

  // Update : componentWillReceiveProps() => shouldComponentUpdate() => componentWillUpdate() => render() => componentDidUpdate()

  state = {

  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: 'Matrix',
            poster: 'https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L.jpg'
          },
          {
            title: 'Full Metal Jacket',
            poster: 'https://i.pinimg.com/736x/36/1e/cd/361ecdb85a3767f70810cbe2cdaaf1a4.jpg'
          },
          {
            title: 'Oldboy',
            poster: 'https://images-na.ssl-images-amazon.com/images/I/41YK2JYRMJL._SY445_.jpg'
          },
          {
            title: 'Star wars',
            poster: 'https://images-na.ssl-images-amazon.com/images/I/81WjGytz7HL._SY445_.jpg'
          },
          {
            title: 'Trainspotting',
            poster: 'https://images-na.ssl-images-amazon.com/images/I/51oFj1gwDyL.jpg'
          }
        ]
      })
    }, 3000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie key={index} title={movie.title} poster={movie.poster} />
    })

    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
