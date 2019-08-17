import React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';

interface Props {
  textValue: string
  data: []

}

function Content({textValue, data}: Props) {
  return (
    <div>
      <ul>
        {data.map((element) =>  <li>{element}</li>)}
      </ul>
    </div>
  )
}

const mapStateToProps = ({todos}: ApplicationState) => {
  console.log(todos)
  return todos
}

export default connect(mapStateToProps)(Content as any);