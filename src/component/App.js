import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './Home';
import NewGame from './NewGame';
import Nav from './Nav';
import Game from './Game';
import {ThemeContext, Theme} from './ThemeContext';
import Category from './Category';


  class App extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggleTheme = () => {
        this.setState(state => ({
          theme:
            state.theme === Theme.dark
              ? Theme.light
              : Theme.dark,
        }));
      };
      // L’état local contient aussi la fonction de mise à jour donc elle va
      // être passée au fournisseur de contexte
      this.state = {
        GamesList : [],
        GamesListFilter : [],
        theme: Theme.light,
        toggleTheme: this.toggleTheme,
      };
    }
    
    render() {
        return (
          <Router>
          <ThemeContext.Provider value={this.state}>
              <Nav />
              <Switch>
                <Route exact path="/">
                <Redirect to="/home" />
                </Route>
                <Route path="/home" exact component={Home}/>
                <Route path="/newgame" component={NewGame} />
                <Route path="/game/:gameId"  component={Game} />
                <Route path="/category/:categoryId" exact component={Category} />
              </Switch>
              </ThemeContext.Provider>
          </Router>
        );
      }

}
export default App;
