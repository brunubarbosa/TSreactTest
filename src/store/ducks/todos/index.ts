import { TodosState, TodosTypes } from './types';
import { Reducer } from   'redux';

const INITIAL_STATE: TodosState = {
  data: []
};

const reducer: Reducer<TodosState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodosTypes.ADD_TODO:
      return { ...state, todoText: action.payload.data };
    default:
      return state;
  }
}

export default reducer;