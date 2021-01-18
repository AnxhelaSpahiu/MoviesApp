import logo from './logo.svg';
import './App.scss';
import React  from 'react';
import HomePage from './Homepage.js';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import MoviePage from './MoviePage.js';

const mocData = [
    
  {id: 1,
  movieName: 'Why him',
   duration: 1.5,
   imdb: 7.1,
   gender: "Comedy"},

   {id: 2,
   movieName: 'A Dog Purpose',
   duration: 1.5,
   imdb: 8.1,
   gender: "Comedy"},

   {id: 3,
  movieName: 'The Proposal',
   duration: 1.5,
   imdb: 8.1,
   gender: "Comedy"},

   {id: 4,
    movieName: 'Propo',
   duration: 3.2,
   imdb: 8.1,
   gender: "Comedy"}

]


class App extends React.Component{

  state = {
    allMovies: mocData
  }


    renderMovies = (routerProps) => {
      let movieId = parseInt(routerProps.match.params.id)
      let foundMovie = this.state.allMovies.find(movieObj => movieObj.id === movieId)
      return (foundMovie? <MoviePage movie={foundMovie}/> : "Nope")
    }

  render(){

    
    return (
      <div>
        <Route exact path = '/' component = {HomePage} allMovies={this.state.allMovies} />
        <Route path = '/movie/:id' render = {routerProps => this.renderMovies(routerProps)} />
        
      </div>
    )
  }
}

export default App;
