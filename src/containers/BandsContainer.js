import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import {addBand} from "../reducers/manageBand";

class BandsContainer extends Component {

  handleAdd = (name) => {
    this.props.addBand(name);
  };

  render()
  {
    console.log('this.props.bands', this.props.bands);
    const bands = this.props.bands.map((band, index) =>
      ( <li
          key={index}
        >{band.name}</li>
      ));
    return(
      <div>
        <BandInput add={this.handleAdd}/>
        {/*BandsContainer*/}
        <ul>
          {bands}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    bands: state.bands
  }
};

const mapDispatchToProps = (dispatch) => ({
  addBand: band => dispatch(addBand(band))
});

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
