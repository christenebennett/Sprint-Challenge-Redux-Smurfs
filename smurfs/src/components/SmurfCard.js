import React from 'react';

class SmurfCard extends React.Component {
  
  render(){
    return (
      <div className="smurf-card">
        <div>{this.props.name}</div>
        <div>{this.props.age}</div>
        <div>{this.props.height}</div>
      </div>
    )
  }
}

export default SmurfCard;