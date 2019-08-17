import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Todo } from '../../store/ducks/todos/types';
import { ApplicationState } from '../../store';

import * as TodosActions from '../../store/ducks/todos/actions';


export interface StateProps {
  todos: Todo[]
}

export interface DispatchProps {
  addTodo(inputText: string): void
  changeInputValue(inputText: string): void
}

interface OwnProps {
  textValue: string
  data: ApplicationState

}

type Props = StateProps & DispatchProps & OwnProps



export const Input = ({ textValue, addTodo, changeInputValue }: Props) => {

  const handleChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    changeInputValue(event.currentTarget.value)
  }

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault()
    addTodo(textValue)
    changeInputValue('');

    
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChangeInput}  value={textValue}/>
      <button type="submit">Adicionar</button>
    </form>
  )
}

const mapStateToProps = ({todos}: ApplicationState) => {
  return todos
}

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators(TodosActions, dispatch)
  
export default connect(mapStateToProps, mapDispatchToProps)(Input as any);