export enum TodosTypes {
  ADD_TODO = '@todos/ADD_TODO',
  INPUT_VALUE = '@todos/INPUT_VALUE'
}

export interface Todo {
  todoText: string
}

export interface TodosState {
  readonly data: Todo[],
  readonly textValue: string
}

export interface InputValue {
  text: string
}