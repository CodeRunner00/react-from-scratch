import React from 'react';
import { connect } from 'react-redux';

const Welcome = (props) => {

  return (

     <h1>Hello, {props.name}</h1>
  );
};

function mapStateToProps(state) {
  console.log('mapStateToProps ', state);
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Welcome);