import React from 'react';
import { deleteSmurf } from '../actions';
import { connect } from 'react-redux';

class SmurfCard extends React.Component {
  
  onDeleteSmurf = event => {
    console.dir(this.props);
    event.preventDefault();
    this.props.deleteSmurf(this.props.id);
  }
  render(){
    return (
      <div className="smurf-card" key={this.props.id}>
        <div>Name: {this.props.name}</div>
        <div>Age: {this.props.age}</div>
        <div>Height: {this.props.height}</div>
        <button onClick={this.onDeleteSmurf}>Delete Smurf</button>
      </div>
    )
  }
}


export default connect(null, { deleteSmurf } )( SmurfCard );