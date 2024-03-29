import { createStore, Store } from 'redux';
import rootReducer from './ducks/rootReducer';
import { TodosState } from './ducks/todos/types';


export interface ApplicationState {
  todos: TodosState,
  textValue: string
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
