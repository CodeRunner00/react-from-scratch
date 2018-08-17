import { createStore } from 'redux';

const initialState = {
  name: 'Eric'
}

const reducer = (state = initialState, action) => {
  console.log('reducer running', action);

    var newName;

    if(state.name==="Eric") {
      newName = 'Frank';
    } else {
      newName = 'Eric'
    }

  switch(action.type) {

    case 'TOGGLE':
      return Object.assign({}, state, {name: newName});

     default:
      return state;
  }

}


const store = createStore(reducer);

export default store;