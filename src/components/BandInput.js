// Add BandInput component
import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    name: ''
  };

  handleOnChange =(event) => {
    this.setState({name: event.target.value});
};

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.add(this.state.name);
    this.setState({
      name: ''
    })
  };


  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event)}>
          <label htmlFor="bandname">Please enter band name</label>
          <input
            name="bandname"
            type="text"
            onChange={this.handleOnChange}
            value={this.state.name}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput;
