import GamesList from './gameslist.json';

class Store{
  constructor(){
    
    this.state = {
      GamesList : [],
      gameId : '',
      characters: [],
      permittedValues : [],
      searchGame :[]
    }
    this.componentDidMount();
 //   this.filterByName()
   
   console.log(this.state)
  }

  
  saveStateToLocalStorage = () => {
    localStorage.setItem('stateComment', JSON.stringify(this.state))
  }

  /*
  filterByName(){
    for (let i = 0; i < this.state.GamesList.length; i++){
      this.state.permittedValues[i] = this.state.GamesList[i]["name"];
   }
    }
*/

  setName(value){
    this.state.searchGame = value;
  }

  setGameList(value){
    this.state.GameList = value;
  }



   filterName(){
      let filterName=[]
     //pas nécessaire
     // this.state.GamesList = GamesList;
      if(this.state.searchGame){
        for (let i = 0; i < this.state.GamesList.length; i++){
          if(this.state.GamesList[i]["name"] == this.state.searchGame){

            filterName.push(this.state.GamesList[i])
          }
         
        }
      this.state.GamesList = filterName
    }
        return this.state.GamesList
      }



componentDidMount(){
    const state = localStorage.getItem('stateComment')
    if (state) {
      this.state.characters = JSON.parse(state)
    }
  }


 getState = () =>{
  return this.state
}



}

let storage = new Store()
     

export default storage;


