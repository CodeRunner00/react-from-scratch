import React from 'react';
import { connect } from 'react-redux';

const Welcome = (props) => {
  console.log('in welcome ', props);
  return (

    <div>
     <h1>Hello, {props.name}</h1>
     <button onClick={props.onToggleClick}>Toggle Name</button>
    </div>
  );
};

function mapStateToProps(state) {
  console.log('mapStateToProps ', state);
  return {
    name: state.name
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleClick: () => {
    console.log('onToggleClick');
    const action = { type: 'TOGGLE'};
    dispatch(action);
  }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Welcome);