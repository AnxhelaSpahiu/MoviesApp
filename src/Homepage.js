import React  from 'react';
import ReactDOM  from 'react-dom';
import { Route, Switch, BrowserRouter, Link} from 'react-router-dom';
import './App.scss';
import MoviePage from './MoviePage.js';
import {NavLink} from 'react-router-dom'



class Movies extends React.Component{

    state = {
        movieName: "",
        duration: "",
        imdb: "",
        gender: ""
    }
    render(){
        const profile = this.props
        return (
            <div className = "movie-box">
                <div style={{fontSize : "15px"}}>Movie Name: {profile.movieName}</div>
                <p>Duration: {profile.duration}</p>
            </div>
        )
    }
}

class SearchBar extends React.Component{

    state={
        input: ""
    }

    changeInput = (e) =>{
     this.setState({input: e.target.value})
        }

    handleKeyStroke = (e) =>{
        if (e.key === 'Enter' ){
            this.submitButton()
        }
    }

    testBackspace = (e) =>{
        if (e.keyCode === 8) {
            this.submitButton()
        }
    }

    submitButton = () =>{
        this.props.gibYou(this.state.input)
        
    }
    
    render(){
        return(
            <div>   
                <input value={this.state.input} onKeyPress={this.handleKeyStroke} onKeyDown={this.testBackspace} onChange={this.changeInput} type="text" placeholder="Search your movie"/>
                <button onClick = {this.submitButton}  >Search</button>
            </div>
        )
    }
}

class MovieContainer extends React.Component{
//    constructor(props){
//       super(props)
//    }
   
    renderShirtsNav = () => {
            let aShirt = this.props.allKindsMovies.map(shirtObj => <Link to = {`/movie/${shirtObj.id}`}> <Movies {...shirtObj}/> </Link> )
            return aShirt
           
        }
render(){
        
        return(
            <div className="outer-container">
                <p>Your movies</p>
                <div className="movie-container">
                {this.renderShirtsNav()}
                        </div>
                        
                </div>
        )
    }
    
}


class HomePage extends React.Component{

    state = {
        
        filteredMovies: [],
        filtered: false
    }

    gibBack = (smth) =>{
        const filteredMovies = this.props.allMovies.filter(
            (movie) => movie.movieName.toLowerCase().includes(smth.toLowerCase())
          );
    
          this.setState({ filteredMovies });
          this.setState({ filtered: true });
           

            if (smth==""){
                this.setState({ filtered: false });
            }
          }

          componentDidUpdate(){
                console.log(this.state.filtered)
          }

          

    render(){
      return (
        <div>
            
          <h1>Welcome to Movie Night</h1>
          <SearchBar gibYou={this.gibBack}/>
          {this.state.filtered ?(
          <MovieContainer allKindsMovies={this.state.filteredMovies}/> ) :
          (
            <MovieContainer allKindsMovies={this.props.allMovies}/> )
          }
       
        
         
        </div>
      )
    }
  }



  


  export default HomePage;