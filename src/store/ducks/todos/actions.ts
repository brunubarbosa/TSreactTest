import { action } from 'typesafe-actions';
import { TodosTypes, Todo } from './types';

export const addTodo = () => action(TodosTypes.ADD_TODO);