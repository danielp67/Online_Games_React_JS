import React, {Component} from 'react';
import Form from './Form';
import SelectedGame from './SelectedGame';
import Comments from './Comments';
import axios from 'axios';
import {ThemeContext} from './ThemeContext';


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Game: [],
            Studio: {},
            Category: [],
            gameId: this.props.match.params.gameId,
            characters: [],
            commentByGame: []
        }
    }

    componentDidMount() {
        this.getGame();
    }

    getGame = () => {
        const params = this.state.gameId
        axios.get('https://127.0.0.1:8000/game/' + params).then(res => {
                this.setState({Game: res.data.game[0], commentByGame: res.data.comments})
            }
        )
    }

    handleSubmit = (comment) => {
        comment = JSON.stringify(comment)
        const params = this.state.gameId
        axios.post('https://127.0.0.1:8000/comment/new/' + params, comment, {headers: {"Content-Type": "application/json"}})
            .then(res => {
                if (res.status === 200) {
                    this.getGame();
                } else {
                    console.log("error comment");
                }
            })
    }

    handleSubmitUpdate = (comment) => {
        const params = comment.id
        comment = JSON.stringify(comment)
        axios.put('https://127.0.0.1:8000/comment/' + params, comment, {headers: {"Content-Type": "application/json"}})
            .then(res => {
                if (res.status === 200) {
                    this.getGame();
                } else {
                    console.log("error comment");
                }
            })

    }

    removeComment = (commentId) => {
        axios.delete('https://127.0.0.1:8000/comment/' + commentId).then(res => {
            if (res.status === 200) {
                this.getGame();
            } else {
                console.log("error comment");
            }
        })
    }


    render() {
        if (this.state.Game.category != null) {

            return (
                <ThemeContext.Consumer>
                    {({theme}) => (
                        <div className="container-fluid"
                             style={{backgroundColor: theme.background, color: theme.color}}>
                            <div className="row">
                                <div className="col-6 offset-3">
                                    <SelectedGame gamesData={this.state.Game}/>
                                    <Comments commentsData={this.state.commentByGame} removeComment={this.removeComment}
                                              handleSubmitUpdate={this.handleSubmitUpdate}/>
                                    <Form gameId={this.state.gameId} handleSubmit={this.handleSubmit}/>
                                </div>
                            </div>
                        </div>
                    )}
                </ThemeContext.Consumer>
            )

        } else {
            return (
                <ThemeContext.Consumer>
                    {({theme}) => (
                        <div className="" style={{backgroundColor: theme.background, color: theme.color}}>
                            <h5 className="card-title">wait... </h5>
                        </div>
                    )}
                </ThemeContext.Consumer>
            )
        }
    }


}


export default Game;
