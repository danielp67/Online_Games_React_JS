import React, {Component} from 'react';
import Filter from './Filter';
import GamesCard from './GamesCard';
import Autocomplete from './Autocomplete';
import axios from 'axios';
import {ThemeContext} from './ThemeContext';


class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryId: 0,
            categoryName: '',
            GamesList: [],
            GamesListFilter: [],
            loading: false
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.match.params.categoryId !== this.props.match.params.categoryId) {
            this.setState({loading: false})
            this.getGames();
        }

    }


    componentDidMount() {
        this.getGames();
    }

    getGames = () => {
        const params = this.props.match.params.categoryId;
        axios.get(`https://127.0.0.1:8000/category/` + params).then(res => {

            if (res.status === 200) {
                this.setState({GamesList: res.data, GamesListFilter: res.data, categoryId: parseInt(params)})
                for (let i = 0; i < this.state.GamesList[0].category.length; i++) {

                    if (this.state.categoryId === this.state.GamesList[0].category[i].id) {
                        this.setState({categoryName: this.state.GamesList[0].category[i].name, loading: true})
                    }

                }
            }

        })
    }


    handleChange = (mapped) => {
        this.setState({GamesListFilter: mapped})
    }

    searchName = (filterName) => {
        this.setState({GamesListFilter: filterName})
    }

    render() {
        if (this.state.loading) {
            return (
                <ThemeContext.Consumer>
                    {({theme}) => (
                        <div className="container-fluid"
                             style={{backgroundColor: theme.background, color: theme.color}}>
                            <div className="row">
                                <div className="col-10 offset-2">
                                    <h2 className="mt-4">Catégorie : {this.state.categoryName}</h2>
                                    <Filter gamesData={this.state.GamesListFilter} handleChange={this.handleChange}/>
                                    <Autocomplete gamesData={this.state.GamesList} searchName={this.searchName}/>
                                    <GamesCard gamesData={this.state.GamesListFilter}/>
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


export default Category;
