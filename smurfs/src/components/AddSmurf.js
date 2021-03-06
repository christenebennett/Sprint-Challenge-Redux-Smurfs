import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class AddSmurf extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    }
  }
  onInputChange = event => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [event.target.name]: event.target.value
      }
    })
  }

  addNewSmurf = event => {
    event.preventDefault();
    this.props.addSmurf(this.state.smurf);
    this.setState({
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    })
  }

  render(){
    return(
      <div className="smurf-form">
        <h3>Add a Smurf:</h3>
        <form onSubmit={this.addNewSmurf}>
          <input type="text" value={this.state.smurf.name} name="name" placeholder="name" onChange={this.onInputChange}/>
          <input type="number" value={this.state.smurf.age} name="age" placeholder="age" onChange={this.onInputChange}/>
          <input type="text" value={this.state.smurf.height} name="height" placeholder="height" onChange={this.onInputChange}/>
          <button type="submit">Add Smurf</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { addSmurf })(AddSmurf);