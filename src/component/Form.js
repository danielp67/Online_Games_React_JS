import React, {Component} from 'react'
import {ThemeContext} from './ThemeContext';


class Form extends Component {
  initialState = {
      gameId : this.props.gameId,
      author: '',
      comment: '',
      rate: '0',
      createAt :'',
    }

  state = this.initialState
 
  
  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({ [name]: value })
    let date = new Date();
    date.setHours( date.getHours() + 2 )
    let n = date.toISOString().slice(0, 19).replace('T', ' ');
    this.setState({createAt: n})
  }

  submitForm = (event) => {
    this.handleChange(event);
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
  

  render() {
    const { author, comment } = this.state;
    
    return (
      <ThemeContext.Consumer  >
              {({theme}) => (
      <div style={{backgroundColor: theme.divBackground}} className="card p-3 mb-5">
      <form >
      <legend className="text-center">Nouveau commentaire :</legend>
        <div className="form-group row">
        <label className="col-2 col-form-label" htmlFor="author">Author</label>
        <input type="text"  className="col-3 form-control" name="author" id="author" value={author} onChange={this.handleChange} required/>

        <label className="col-2 ml-3 text-right col-form-label" htmlFor="rate">Rate</label>
       
          <div className="col-3 mt-1 pl-1 half-stars-example" >
              <div className="rating-group">
                  <input className="rating__input rating__input--none" name="rate" id="rating2-0" value="0"  type="radio" onChange={this.handleChange} />
                  <label aria-label="0 stars" className="rating__label" htmlFor="rating2-0">&nbsp;</label>
                  <label aria-label="0.5 stars" className="rating__label rating__label--half" htmlFor="rating2-05"><i className="rating__icon rating__icon--star fa fa-star-half"></i></label>
                  <input className="rating__input" name="rate" id="rating2-05" value="0.5"  type="radio" onChange={this.handleChange}/>
                  <label aria-label="1 star" className="rating__label" htmlFor="rating2-10"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
                  <input className="rating__input" name="rate" id="rating2-10" value="1"  type="radio" onChange={this.handleChange}/>
                  <label aria-label="1.5 stars" className="rating__label rating__label--half" htmlFor="rating2-15"><i className="rating__icon rating__icon--star fa fa-star-half"></i></label>
                  <input className="rating__input" name="rate" id="rating2-15" value="1.5" type="radio" onChange={this.handleChange}/>
                  <label aria-label="2 stars" className="rating__label" htmlFor="rating2-20"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
                  <input className="rating__input" name="rate" id="rating2-20" value="2" type="radio" onChange={this.handleChange}/>
                  <label aria-label="2.5 stars" className="rating__label rating__label--half" htmlFor="rating2-25"><i className="rating__icon rating__icon--star fa fa-star-half"></i></label>
                  <input className="rating__input" name="rate" id="rating2-25" value="2.5" type="radio" onChange={this.handleChange}/>
                  <label aria-label="3 stars" className="rating__label" htmlFor="rating2-30"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
                  <input className="rating__input" name="rate" id="rating2-30" value="3" type="radio" onChange={this.handleChange}/>
                  <label aria-label="3.5 stars" className="rating__label rating__label--half" htmlFor="rating2-35"><i className="rating__icon rating__icon--star fa fa-star-half"></i></label>
                  <input className="rating__input" name="rate" id="rating2-35" value="3.5" type="radio" onChange={this.handleChange}/>
                  <label aria-label="4 stars" className="rating__label" htmlFor="rating2-40"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
                  <input className="rating__input" name="rate" id="rating2-40" value="4" type="radio" onChange={this.handleChange}/>
                  <label aria-label="4.5 stars" className="rating__label rating__label--half" htmlFor="rating2-45"><i className="rating__icon rating__icon--star fa fa-star-half"></i></label>
                  <input className="rating__input" name="rate" id="rating2-45" value="4.5" type="radio" onChange={this.handleChange} />
                  <label aria-label="5 stars" className="rating__label" htmlFor="rating2-50"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
                  <input className="rating__input" name="rate" id="rating2-50" value="5" type="radio" onChange={this.handleChange} />
              </div>
          </div>

        </div>


        <div className="form-group row">
        <label className="col-3 col-form-label" htmlFor="comment">Comment</label>
        <input type="text" className="col-8 form-control" name="comment" id="comment" value={comment} onChange={this.handleChange} required/>
        </div>


        <div className="form-group row">
          <input className="btn btn-success offset-5 col-2" type="button" value="Envoyer" onClick={this.submitForm} />
        </div>
      </form>
      </div>
      )}
      </ThemeContext.Consumer>
    );
  }


}

export default Form;
