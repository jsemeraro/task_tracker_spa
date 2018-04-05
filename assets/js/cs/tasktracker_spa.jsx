// looked at http://www.ccs.neu.edu/home/ntuck/courses/2018/01/cs4550/notes/19-spa/components.txt
// to understand the component parts

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';

import Nav from './nav';
import Tasks from './tasks';
import Users from './users';
import TaskForm from './task-form';

export default function tasktracker_spa_init(store) {
  ReactDOM.render(
    <Provider store={store}>
      <Tasktracker_Spa />
    </Provider>,
    document.getElementById('root'),
  );
}

let Tasktracker_Spa = connect((state) => state)((props) => {
  return (
    <Router>
      <div>
        <Nav />
        <div className="container">
          <Route path="/" exact={true} render={() =>
            <div>
              <TaskForm our_token={props.token} />
              <Tasks tasks={props.tasks} />
            </div>
          } />
          <Route path="/users" exact={true} render={() =>
            <Users users={props.users} />
          } />
          <Route path="/users/:user_id" render={({ match }) =>
            <Tasks tasks={_.filter(props.tasks, (pp) =>
              match.params.user_id == pp.user.id)
            } />
          } />
        </div>
      </div>
    </Router>
  );
});

