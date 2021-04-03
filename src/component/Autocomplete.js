import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";


class Autocomplete extends Component {
    static propTypes = {
        suggestions: PropTypes.instanceOf(Array)
    };

    static defaultProps = {
        suggestions: []
    };

    constructor(props) {
        super(props);

        this.state = {
            // The active selection's index
            activeSuggestion: 0,
            // The suggestions that match the user's input
            filteredSuggestions: [],
            // Whether or not the suggestion list is shown
            showSuggestions: false,
            // What the user has entered
            userInput: "",
            indexImg: []
        };
    }

    // Event fired when the input value is changed
    onChange = e => {
        let permittedValues = [];
        for (let i = 0; i < this.props.gamesData.length; i++) {
            permittedValues[i] = this.props.gamesData[i]["name"];
        }
        const suggestions = permittedValues;
        const userInput = e.currentTarget.value;


        // Filter our suggestions that don't contain the user's input
        const filteredSuggestions = suggestions.filter(
            suggestion =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        const indexImg = []
        for (let i = 0; i < filteredSuggestions.length; i++) {

            let id = suggestions.indexOf(filteredSuggestions[i]);
            indexImg.push(this.props.gamesData[id].id)
        }

        //console.log(indexImg)
        // Update the user input and filtered suggestions, reset the active
        // suggestion and make sure the suggestions are shown
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value,
            indexImg
        });
        // console.log(this.state)
    };

    // Event fired when the user clicks on a suggestion
    onClick = e => {
        // Update the user input and reset the rest of the state
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText
        });


    };

    // Event fired when the user presses a key down
    onKeyDown = e => {
        const {activeSuggestion, filteredSuggestions} = this.state;

        // User pressed the enter key, update the input and close the
        // suggestions
        if (e.keyCode === 13) {
            this.setState({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: filteredSuggestions[activeSuggestion]
            });
        }
        // User pressed the up arrow, decrement the index
        else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }

            this.setState({activeSuggestion: activeSuggestion - 1});
        }
        // User pressed the down arrow, increment the index
        else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }

            this.setState({activeSuggestion: activeSuggestion + 1});
        }
    };

    filterName = () => {
        let filterName = []

        // console.log(this.props.gamesData.length)
        if (this.state.userInput) {
            for (let i = 0; i < this.props.gamesData.length; i++) {
                if (this.props.gamesData[i]["name"] === this.state.userInput) {
                    filterName.push(this.props.gamesData[i])
                }
            }
            //console.log(filterName)
        } else {
            filterName = this.props.gamesData
        }

        this.props.searchName(filterName)
    }

    render() {
        const {
            onChange,
            onClick,
            onKeyDown,
            filterName,
            state: {
                activeSuggestion,
                filteredSuggestions,
                showSuggestions,
                userInput,
                indexImg
            }
        } = this;

        let suggestionsListComponent;

        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <ul className="suggestions">
                        {filteredSuggestions.map((suggestion, index) => {
                            let className;

                            // Flag the active suggestion with a class
                            if (index === activeSuggestion) {
                                className = "suggestion-active";
                            }

                            return (
                                <li
                                    className={className}
                                    key={suggestion}
                                    onClick={onClick}
                                >
                                    <img src={`https://127.0.0.1:8000/game/img/${indexImg[index]}`} className="mr-2"
                                         alt="" width="30" height="30"/>{suggestion}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                suggestionsListComponent = (
                    <div className="no-suggestions">
                        <em>No suggestions, you're on your own!</em>
                    </div>
                );
            }
        }

        return (
            <div className="row mb-5">
                <Fragment>


                    <div className="col-4">
                        <input className="form-control mr-sm-2 mdb-autocomplete" type="search"
                               placeholder="Rechercher un jeu"
                               onChange={onChange}
                               onKeyDown={onKeyDown}
                               value={userInput}
                        />
                        {suggestionsListComponent}
                    </div>
                    <div className="col-2">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="button"
                                onClick={filterName}>Search
                        </button>
                    </div>


                </Fragment>
            </div>
        );


    }


}

export default Autocomplete;

