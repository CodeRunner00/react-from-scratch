import { createStore } from 'redux';

const initialState = {
  name: 'Eric'
}

function toggleName(name) {
  var newName;
   if(name==="Eric") {
      newName = 'Frank';
    } else {
      newName = 'Eric'
    }

    return newName;
}



const reducer = (state = initialState, action) => {
  console.log('reducer running', action);






  switch(action.type) {

    case 'TOGGLE':
      return Object.assign({}, state, {name: toggleName(state.name)});

    case 'NEWNAME':
      return Object.assign({}, state, {name: action.payload});
     default:
      return state;
  }

}


const store = createStore(reducer);

export default store;