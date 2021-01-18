import React  from 'react';
import ReactDOM  from 'react-dom';
import { Route, Switch, BrowserRouter, Link} from 'react-router-dom';
import './App.scss';
import {NavLink} from 'react-router-dom'

class MoviePage extends React.Component {
    render() {
      return (
        <div>
           {this.props.movie.id}.
          <br></br>
          Movie Name: {this.props.movie.movieName}<br></br>
          Movie Gender: {this.props.movie.gender}
        </div>
      );
    }
  }

  export default MoviePage;