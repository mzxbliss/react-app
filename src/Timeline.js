import React, {Component} from 'react';
import fire from './fire';

class List extends Component {
  state = {
    table: fire.database().ref('list'),
    rows: [],
    name:"",
    email:"",
    location:""
  }

  componentDidMount(){
    this.state.table.on('value', (response) => {
      let objects = response.val();
      let rows = [];
      for(let key in objects) {
        let row = objects[key];
        row.key = key;
        rows.push(row);
      }
      this.setState({rows});
    });
  }

  handleChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  }

  add = (event) => {
    event.preventDefault();
    if(this.state.name){
      let row = {
        location: this.state.location
      }
      this.state.table.push(row);
      this.setState({name:""});
    }
  }

  delete = (row) => {
    this.state.table.child(row.key).remove();
  }

  render(){
    let rows = this.state.rows.map(row =>
      <li key={row.key} className="list-group-item">
        {row.name} said {row.location}
        <button onClick={clickEvent => this.delete(row)} className="btn btn-danger float-right">
          <i className="fa fa-trash"></i>
        </button>
      </li>
    );

    return (
      <div>
      <div className="container emp-profile">
        <form className="form-control">
        <label><b>Post a recommendation</b></label>
        <p></p>
          <input className="form-control" type="text"
            name="name"
            placeholder="Type your name here"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input className="form-control" type="text"
            name="email"
            placeholder="Type you e-mail here"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <input className="form-control" type="text"
            name="location"
            placeholder="Type your recommendation here"
            onChange={this.handleChange}
            value={this.state.location}
          />
          <button onClick={this.add} className="btn btn">
            <i className="fa fa-plus"></i>
          </button>
        </form>
        <ul className="list-group mb-3">
        <p></p>
        <p></p>
        <label className="center"><b>What is Emma like?</b></label>
        <p></p>
          {rows}
        </ul>
      </div>
      </div>
    );
  }
}

export default List;
