import React, { Component } from 'react';
import './App.css';
import SmurfCard from './SmurfCard';
import AddSmurf from './AddSmurf';
import { connect } from 'react-redux';
import { fetchData } from '../actions';


/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    if (this.props.fetching){
      return <h2>LOADING SMURFS....</h2>
    } else {
      return (
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <AddSmurf />
          <div>{this.props.smurfs.map(smurf => {
            console.log({smurf})
            return (
              <SmurfCard 
                id={smurf.id}
                name={smurf.name}
                age={smurf.age}
                height={smurf.height}/> 
            )
          })}</div>
          
        </div>
      );
    }
    
  }
}

const mstp = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    error: state.error
  }
}
export default connect(mstp, { fetchData })(App);
