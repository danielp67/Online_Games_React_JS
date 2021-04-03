import React, {Component} from 'react';



class Filter extends Component {

  filterByIndexDesc = () =>{
    const byIndex = (a,b) => b.rank - a.rank
    let mapped = [...this.props.gamesData];
    mapped = mapped.sort(byIndex);
    this.props.handleChange(mapped);
  }


  filterByIndexAsc = () =>{
    const byIndex = (a,b) => a.rank - b.rank
    let mapped = [...this.props.gamesData];
    mapped = mapped.sort(byIndex);
    this.props.handleChange(mapped);
  }
  
  filterByRateAsc = () =>{
    const byRate = (a,b) => a.rate - b.rate
    let mapped = [...this.props.gamesData];
    mapped = mapped.sort(byRate);
    this.props.handleChange(mapped); 
  }

  filterByRateDesc = () =>{
    const byRate = (a,b) => b.rate - a.rate
    let mapped = [...this.props.gamesData];
    mapped = mapped.sort(byRate);
    this.props.handleChange(mapped);
  }

  filterByNameAsc = () =>{
    const byName = (a,b) => {
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
  }
  let mapped = [...this.props.gamesData];
  mapped = mapped.sort(byName);

  this.props.handleChange(mapped);  
  }

  filterByNameDesc = () =>{
    const byName = (a,b) => {
      if(a.name > b.name) { return -1; }
      if(a.name < b.name) { return 1; }
      return 0;
  }
  let mapped = [...this.props.gamesData];
  mapped = mapped.sort(byName);

  this.props.handleChange(mapped);
  }

  filterByDateAsc = () =>{
    const byDate = (a,b) => a.releaseAt - b.releaseAt
    let mapped = [...this.props.gamesData];
    mapped = mapped.sort(byDate);
    this.props.handleChange(mapped);
  }

  filterByDateDesc = () =>{
    const byDate = (a,b) => b.releaseAt - a.releaseAt
    let mapped = [...this.props.gamesData];
    mapped = mapped.sort(byDate);
    this.props.handleChange(mapped);
  }



  render() {
  
    return (
       <div className="form  mt-5">
        <form >
        Trier par :
        <div className="row">
          <div className="form-group col-2">Popularité<br/>
          <button className="btn btn-success mx-2  my-2" type="button" onClick={this.filterByIndexAsc}>↓</button>
          <button className="btn btn-danger mx-2 my-2" type="button" onClick={this.filterByIndexDesc} >↑</button>
          </div>  
          <div className="form-group col-2">Nom<br/>
          <button className="btn btn-success mx-2  my-2" type="button" onClick={this.filterByNameAsc}>↓</button>
          <button className="btn btn-danger mx-2 my-2" type="button" onClick={this.filterByNameDesc} >↑</button>
          </div>  
          <div className="form-group col-2">Date<br/>
          <button  className="btn btn-success mx-2 my-2" type="button"  onClick={this.filterByDateAsc} >↓</button>
          <button  className="btn btn-danger mx-2 my-2" type="button"  onClick={this.filterByDateDesc} >↑</button>
          </div>  
          <div className="form-group col-2">Note<br/>
          <button  className="btn btn-success mx-2 my-2" type="button" onClick={this.filterByRateAsc} >↓</button>
          <button  type="button" className="btn btn-danger mx-2 my-2" onClick={this.filterByRateDesc} >↑</button>
          </div> 
          <div className="form-group col-2">
          <button  className="btn btn-secondary mx-2 my-2" type="button" onClick={this.filterByIndexAsc} >Trier par Défaut</button>
          </div>  
          </div>
        </form>
      </div>  
    );
  }

}

export default Filter;
