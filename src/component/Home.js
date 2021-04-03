import React, { Component } from 'react';
import Filter from './Filter';
import GamesCard from './GamesCard';
import Autocomplete from './Autocomplete';
import axios from 'axios';
import {ThemeContext} from './ThemeContext';


class Home extends Component {
 
  constructor(props){
  super(props);
  this.state = {
    GamesList : [],
    GamesListFilter : [],
    loading :false,
  }
 }


 componentDidMount() {
 this.getGames();
}

 getGames =() => {
  axios.get(`https://127.0.0.1:8000/home`).then(res => {
    if(res.status === 200){
      this.setState({GamesList : res.data, GamesListFilter : res.data, loading:true})
    }
    else{
      console.log('erreur chargement')
    }
})
}

handleChange = (mapped) =>{
    this.setState({GamesListFilter : mapped})
  }

searchName = (filterName) => {
    this.setState({GamesListFilter :filterName})
  }

  render() {
      if(this.state.loading){
      return (
        <ThemeContext.Consumer>
        {({theme}) => (
          <div className="container-fluid" style={{backgroundColor: theme.background, color:theme.color}}>
          <div className="row">
          <div className="col-10 offset-1">
         
        <Filter gamesData={this.state.GamesListFilter} handleChange={this.handleChange} />
        <Autocomplete gamesData={this.state.GamesList}  searchName ={this.searchName} />
        
        <GamesCard gamesData={this.state.GamesListFilter} />
      </div>
      </div>
      </div>
      )}
      </ThemeContext.Consumer>
    )
  }else{
    return (
      <ThemeContext.Consumer>
      {({theme}) => (
        <div className="" style={{backgroundColor: theme.background, color:theme.color}}>
        <h5 className="card-title">wait... </h5>
        </div>
      )}
      </ThemeContext.Consumer>
    )
    }
  }
}


export default Home;
