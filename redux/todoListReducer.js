// types of actions
export const types = {
  ADD: 'ADD',
  REMOVE: 'REMOVE'
}

// helper functions to dispatch actions
export const actionCreators = {
  add: item => {
    return {type: types.ADD, payload: item }
  },

  remove: index => {
    return { type: types.REMOVE, payload: index }
  }
}

// initial state
const initialState = {
  todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App'],
}

// reducer
export const reducer = (state = initialState, action) {
  const {todos} = state;
  const {type, payload} = action;

  switch(type) {
    case types.ADD:
      return {
        ...state,
        todos: [payload, ...todos]
      }
    case types.REMOVE:
      return {
        ...state,
        todos: todos.filter((todo, i) => i !== payload)
      }
    default:
      return state;
  }
}


