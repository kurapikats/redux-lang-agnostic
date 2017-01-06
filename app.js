import { creatStore } from 'redux';

const reducer = function(state, action) {
  // 'type' property is required
  if (action.type === "INC") {
    return state + action.payload;
  }
  if (action.type === "DEC") {
    return state - action.payload;
  }
  return state;
}

const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log("store changed", store.getState());
});

// 'type' property is required
store.dispatch({type: "INC", payload: 25});
store.dispatch({type: "DEC", payload: 4});
