import logo from './logo.svg';
import './App.scss';
import React  from 'react';
import HomePage from './Homepage.js';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import MoviePage from './MoviePage.js';
import { connect } from "react-redux";
import {
  maciVogelAction,
  arushiPushiAction,
} from "./actions/action"

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
    allMovies: mocData}


    renderMovies = (routerProps) => {
      let movieId = parseInt(routerProps.match.params.id)
      let foundMovie = this.state.allMovies.find(movieObj => movieObj.id === movieId)
      return (foundMovie? <MoviePage movie={foundMovie}/> : "Nope")
    }

    componentDidMount(){
      console.log(this.props)
      setTimeout(()=>{
        this.props.arushiPushiAction()
        setTimeout(()=>{
          this.props.maciVogelTrigerAction()
        },100)
      },5000)
    }

  render(){

    
    return (
      <div>
        <h1>ANXHIS FAV ANIMAL {this.props.sssssssss}</h1>
        <Route path = '/' render={(props) => (<HomePage {...props} allMovies={this.state.allMovies} />)}/>
        <Route path = '/movie/:id' render = {routerProps => this.renderMovies(routerProps)} />
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    sssssssss: state.anxhis.activeAnimal,
    ss: state.anxhis.activeAnimal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    maciVogelTrigerAction: () => dispatch(maciVogelAction()),

    arushiPushiAction: () => dispatch(arushiPushiAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
