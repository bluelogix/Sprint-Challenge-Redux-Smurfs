import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import SmurfList from './components/SmurfList';
import { getSmurfs, deleteSmurf } from './actions';
import SmurfForm from './components/SmurfForm'

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  

  componentDidMount() {
    this.props.getSmurfs();
  }

  deleteSmurf = (e, id) => {
    e.preventDefault();
    this.props.deleteSmurf(id);
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        <SmurfList smurfs={this.props.smurfs} deleteSmurf={this.deleteSmurf} />
      </div>
    );
  }
}




const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
})
export default connect(
  mapStateToProps,
  { getSmurfs , deleteSmurf }
)(App);
