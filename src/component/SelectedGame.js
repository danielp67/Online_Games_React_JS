import React from 'react';
import {ThemeContext} from './ThemeContext';
import { Link } from 'react-router-dom';


const SelectedGame = (props)=>{
   
  const selectedGame = props.gamesData;

     return (
      <ThemeContext.Consumer>
      {({theme}) => (
      <div style={{backgroundColor: theme.divBackground, color : theme.divColor}}   className="card my-2 mx-2 mt-5">
      <img src={`https://127.0.0.1:8000/game/img/${selectedGame.id}`} className="card-img-top" alt="..." />
      <div className="card-body">
      <h5 className="card-title">{selectedGame.name}</h5>
      <div className="card-text">
      Studio : {selectedGame.studio.name}<br/>
      Catégorie : <Links selectedGame={selectedGame.category}/><br/>
      
      Date de sortie : {selectedGame.releaseAt}<br/>
      Note : {selectedGame.rate}/5  <div className="stars-outer">
          <div className="stars-inner" style={{width :selectedGame.rate*14.75}}></div>
        </div><br/>
      Nombre d'exemplaires vendus : {selectedGame.copiesSold}<br/>
      Plateformes compatibles : {selectedGame.plateformes}<br/>
      </div>
    </div>
    </div>
    )}
      </ThemeContext.Consumer>
     ) 
  }




const Links = (props) =>{
  const rows = props.selectedGame.map((row, index) => {

    return (
      <Link key={index} to={`/category/${row.id}`}> {row.name}</Link>
    )
  })

  return <span>{rows}</span>
}

  
  export default SelectedGame