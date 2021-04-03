import React from 'react';
import {ThemeContext} from './ThemeContext';
import {  Link } from "react-router-dom";


const TableBody = (props) => {
  
  const rows = props.gamesData.map((row, index) => {

    let category = '';
    for(let i = 0; i <row.category.length; i++){
      if(i === row.category.length-1){
        category += row.category[i]["name"] 
      }else{
        category += row.category[i]["name"] + ", "
      }  
      }

    return (
      <ThemeContext.Consumer key={index}>
      {({theme}) => (
      <div  style={{backgroundColor: theme.divBackground}} className="card my-2 mx-2 pt-2 col-4">
      <Link to={`/game/${row.id}`}>
        <img src={`https://127.0.0.1:8000/game/img/${row.id}`}className="card-img-top" alt="..." />
        <div style={{color:theme.divColor}} className="card-body">
          <h5 className="card-title">{row.name}</h5>
          <div className="card-text">
          Studio : {row.studio.name}<br/>
          Catégorie : {category}<br/>
          Date de sortie : {row.releaseAt}<br/>
          Note : {row.rate}/5 <div className="stars-outer">
          <div className="stars-inner" style={{width :row.rate*14.75}}></div>
        </div><br/>
          </div>
          
          <span className="btn btn-success">Voir plus...</span>     
        </div>    
        </Link>
      </div>
      )}
      </ThemeContext.Consumer>
    )
  })
  return <div className="row">{rows}</div>
}


const GamesCard = (props) => {
  const {gamesData} = props

  return (
    <ThemeContext.Consumer>
    {({theme}) => (
      <div style={{backgroundColor: theme.background, color:theme.color}}>
      <TableBody gamesData={gamesData} />
      </div>
      )}
      </ThemeContext.Consumer>
  )
}

export default GamesCard