import React, {Fragment, Component} from 'react';
import Form from './Form';
import Task from './Task';

export default function Dashboard() {
  return (
    <div>
    <Fragment>
        <Form/>
        <Task/>
    </Fragment>
    </div>
  )
}
