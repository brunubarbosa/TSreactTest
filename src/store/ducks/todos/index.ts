import { TodosState, TodosTypes } from './types';
import { Reducer } from   'redux';

const INITIAL_STATE: TodosState = {
  data: [],
  textValue: ''
};

const reducer: Reducer<TodosState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodosTypes.ADD_TODO:
      return { ...state, data: [...state.data, action.payload] };
    case TodosTypes.INPUT_VALUE:
      return { ...state, textValue: action.payload };
    default:
      return state;
  }
}

export default reducer;