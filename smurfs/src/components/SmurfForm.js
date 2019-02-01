import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions'

class SmurfForm extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                    name: '',
                    age: '',
                    height: '' 
            
                }
            }
         
    handleChanges = e => {
        // e.preventDefault();
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    addNewSmurf = e => {
        // e.preventDefault();
        this.props.addSmurf(this.state)
        this.setState({
                name: '',
                age: '',
                height: ''
        
        })
    }


    render() {
        return (
            <div>
                <form autoComplete="off" onSubmit={this.addNewSmurf}>

                <input 
                    value={this.state.name}
                    type='text'
                    name='name'
                    placeholder='Name'
                    onChange={this.handleChanges}
                    />

                 <input 
                    value={this.state.age}
                    type='text'
                    name='age'
                    placeholder='Age'
                    onChange={this.handleChanges}
                    />
                <input 
                    value={this.state.height}
                    type='text'
                    name='height'
                    placeholder='Height'
                    onChange={this.handleChanges}
                    />
                <button type='submit'>Add Smurf </button>
                </form>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        addingSmurf: state.addingSmurf
    }
}
 
export default connect(
    mapStateToProps,
    {addSmurf}
)(SmurfForm)