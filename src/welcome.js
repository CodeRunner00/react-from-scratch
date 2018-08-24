import React from 'react';
import { connect } from 'react-redux';


const Welcome = (props) => {
  console.log('in welcome ', props);
  return (

    <div className="welcome">
     <h1>Hello, {props.name}</h1>
     <button onClick={props.onToggleClick}>Toggle Name</button>
     <form>
        <label>
          Name:
          <input type="text" value={props.name} onChangeCapture={props.handleChangeName} />
        </label>
        <input type="submit" value="Submit" />
      </form>
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
  },
   handleChangeName: (e) => {

    const action = { type: 'NEWNAME', payload: e.target.value};
    dispatch(action);
  }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Welcome);