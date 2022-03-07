let state = [];

let reducer = (state=[],action) => {
    if (action.type === 'NEW_ORDER') {
        let newState = [ ...state, action.payload];
        return newState;
    }
    return state;
}

// action

let action = {type: 'NEW_ORDER', payload: 'coffee'}

let store = Redux.createStore(reducer);

store.dispatch(action);
console.log(store.getState());