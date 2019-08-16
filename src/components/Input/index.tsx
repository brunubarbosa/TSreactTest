import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Todo } from '../../store/ducks/todos/types';
import { ApplicationState } from '../../store';

import * as TodosActions from '../../store/ducks/todos/actions';




function Input() {
  return (
    <form>
      <input type="text" />
      <button type="submit">Adicionar</button>
    </form>
  )
}

const mapStateToProps = (state: ApplicationState) => {
  console.log(state)
  return state
}

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators(TodosActions, dispatch)
  
export default connect(mapStateToProps, mapDispatchToProps)(Input);