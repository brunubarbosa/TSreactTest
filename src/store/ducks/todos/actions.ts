import { action } from 'typesafe-actions';
import { TodosTypes, Todo } from './types';

export const addTodo = (todoText: string) => action(TodosTypes.ADD_TODO, todoText);
export const changeInputValue = (todoText: string) => action(TodosTypes.INPUT_VALUE, todoText);