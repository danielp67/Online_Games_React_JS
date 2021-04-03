import React, {Component} from 'react';
import {ThemeContext} from './ThemeContext';


const CommentsHeader = () => {
    return (
        <h3 className="text-center my-3">
            Vos Commentaires
        </h3>
    )
}


class CommentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentId: this.props
        }

    }

    flip = (index) => {
        const comment = document.getElementById('comment' + index);
        const cardfacefront = document.getElementById('cardfacefront' + index);
        const cardfaceback = document.getElementById('cardfaceback' + index);
        comment.classList.toggle('is-flipped');
        cardfacefront.classList.toggle('hidden');
        cardfaceback.classList.toggle('hidden');
    }

    render() {
        const {removeComment, handleSubmitUpdate} = this.props
        const rows = this.props.commentsData.map((row, index) => {
            const comment = this.props.commentsData[index];
            return (
                <div key={index} className="comment" id={`comment${row.id}`}>
                    <div id={`cardfacefront${row.id}`} className="card__face card__face--front">
                        <CommentFace comment={comment} removeComment={removeComment} flip={this.flip}/>
                    </div>

                    <div id={`cardfaceback${row.id}`} className="card__face card__face--back hidden">
                        <CommentBack comment={comment} flip={this.flip} handleSubmitUpdate={handleSubmitUpdate}/>
                    </div>
                </div>
            )
        })

        return <div className="col-12">{rows}</div>
    }
}


class CommentFace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        }
    }

    componentDidMount() {

        this.setState({
            comment: this.props.comment
        })
    }

    render() {


        const comment = this.props.comment
        if (this.props.comment != null) {
            return (
                <ThemeContext.Consumer>
                    {({theme}) => (
                        <div style={{backgroundColor: theme.divBackground}} className="card  my-2 mx-2">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-9">
                                        De : {comment.author} <br/>
                                        le : {comment.createAt}
                                    </div>
                                    <div className="col-3 text-right">
                                        Note : {comment.rate}/5
                                        <div className="stars-outer">
                                            <div className="stars-inner" style={{width: comment.rate * 14.75}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <p className="card-text text-center">
                                    {comment.comment}<br/>
                                </p>
                            </div>
                            <div className="card-footer">
                                <div className="row">
                                    <button className="btn btn-primary col-4 offset-1" onClick={() =>
                                        this.props.flip(comment.id)}>Modifier
                                    </button>
                                    <button className="btn btn-danger col-4 offset-2" onClick={() =>
                                        this.props.removeComment(comment.id)}>Supprimer
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </ThemeContext.Consumer>
            )
        } else {
            return <h5 className="card-title">wait... </h5>
        }
    }
}


class CommentBack extends Component {
    initialState = {
        id: '',
        author: '',
        comment: '',
        rate: '',
        createAt: this.props.comment.createAt
    }

    state = this.initialState

    componentDidMount() {

        this.setState({
            id: this.props.comment.id,
            author: this.props.comment.author,
            comment: this.props.comment.comment,
            rate: this.props.comment.rate,
            gameId: this.props.comment.gameId
        })
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
        console.log(this.state)
    }

    submitForm = (event) => {
        this.handleChange(event);
        this.props.handleSubmitUpdate(this.state)
        this.props.flip(this.state.id)
    }

    render() {
        const {id, author, comment} = this.state;

        return (
            <ThemeContext.Consumer>
                {({theme}) => (
                    <div style={{backgroundColor: theme.divBackground}} className="card  my-2 mx-2">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-8">
                                    De : {author} <br/>
                                    le : {this.initialState.createAt}
                                </div>
                                <div className="form-inline col-4 text-right">Note :

                                    <div className="half-stars-example">
                                        <div className="rating-group">
                                            <input className="rating__input rating__input--none" name="rate"
                                                   id={`${id}rating2-0`} value="0" type="radio"
                                                   onChange={this.handleChange}/>
                                            <label aria-label="0 stars" className="rating__label"
                                                   htmlFor={`${id}rating2-0`}>&nbsp;</label>
                                            <label aria-label="0.5 stars" className="rating__label rating__label--half"
                                                   htmlFor={`${id}rating2-05`}><i
                                                className="rating__icon rating__icon--star fa fa-star-half"></i></label>
                                            <input className="rating__input" name="rate" id={`${id}rating2-05`}
                                                   value="1" type="radio" onChange={this.handleChange}/>
                                            <label aria-label="1 star" className="rating__label"
                                                   htmlFor={`${id}rating2-10`}><i
                                                className="rating__icon rating__icon--star fa fa-star"></i></label>
                                            <input className="rating__input" name="rate" id={`${id}rating2-10`}
                                                   value="1" type="radio" onChange={this.handleChange}/>
                                            <label aria-label="1.5 stars" className="rating__label rating__label--half"
                                                   htmlFor={`${id}rating2-15`}><i
                                                className="rating__icon rating__icon--star fa fa-star-half"></i></label>
                                            <input className="rating__input" name="rate" id={`${id}rating2-15`}
                                                   value="1.5" type="radio" onChange={this.handleChange}/>
                                            <label aria-label="2 stars" className="rating__label"
                                                   htmlFor={`${id}rating2-20`}><i
                                                className="rating__icon rating__icon--star fa fa-star"></i></label>
                                            <input className="rating__input" name="rate" id={`${id}rating2-20`}
                                                   value="2" type="radio" onChange={this.handleChange}/>
                                            <label aria-label="2.5 stars" className="rating__label rating__label--half"
                                                   htmlFor={`${id}rating2-25`}><i
                                                className="rating__icon rating__icon--star fa fa-star-half"></i></label>
                                            <input className="rating__input" name="rate" id={`${id}rating2-25`}
                                                   value="2.5" type="radio" onChange={this.handleChange}/>
                                            <label aria-label="3 stars" className="rating__label"
                                                   htmlFor={`${id}rating2-30`}><i
                                                className="rating__icon rating__icon--star fa fa-star"></i></label>
                                            <input className="rating__input" name="rate" id={`${id}rating2-30`}
                                                   value="3" type="radio" onChange={this.handleChange}/>
                                            <label aria-label="3.5 stars" className="rating__label rating__label--half"
                                                   htmlFor={`${id}rating2-35`}><i
                                                className="rating__icon rating__icon--star fa fa-star-half"></i></label>
                                            <input className="rating__input" name="rate" id={`${id}rating2-35`}
                                                   value="3.5" type="radio" onChange={this.handleChange}/>
                                            <label aria-label="4 stars" className="rating__label"
                                                   htmlFor={`${id}rating2-40`}><i
                                                className="rating__icon rating__icon--star fa fa-star"></i></label>
                                            <input className="rating__input" name="rate" id={`${id}rating2-40`}
                                                   value="4" type="radio" onChange={this.handleChange}/>
                                            <label aria-label="4.5 stars" className="rating__label rating__label--half"
                                                   htmlFor={`${id}rating2-45`}><i
                                                className="rating__icon rating__icon--star fa fa-star-half"></i></label>
                                            <input className="rating__input" name="rate" id={`${id}rating2-45`}
                                                   value="4.5" type="radio" onChange={this.handleChange}/>
                                            <label aria-label="5 stars" className="rating__label"
                                                   htmlFor={`${id}rating2-50`}><i
                                                className="rating__icon rating__icon--star fa fa-star"></i></label>
                                            <input className="rating__input" name="rate" id={`${id}rating2-50`}
                                                   value="5" type="radio" onChange={this.handleChange}/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="card-body form-group row">

                            <label className="col-1 col-form-label" htmlFor="comment"/>
                            <input type="text" className="col-10 form-control" name="comment" value={comment}
                                   onChange={this.handleChange} required/>
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <input className="btn btn-success col-4 offset-1" type="button" value="Modifier"
                                       onClick={this.submitForm}/>
                                <button className="btn btn-danger col-4 offset-2" onClick={() =>
                                    this.props.flip(id)}>Annuler
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>

        )
    }
}


const Comments = (props) => {
    const {commentsData, removeComment, editComment, handleSubmitUpdate} = props
    return (
        <div>
            <CommentsHeader/>
            <CommentsList commentsData={commentsData} removeComment={removeComment} editComment={editComment}
                          handleSubmitUpdate={handleSubmitUpdate}/>
        </div>
    )
}


export default Comments