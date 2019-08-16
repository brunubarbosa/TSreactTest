export enum TodosTypes {
  ADD_TODO = '@todos/ADD_TODO'
}

export interface Todo {
  todoText: string
}

export interface TodosState {
  readonly data: Todo[]
}