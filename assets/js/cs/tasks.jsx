// followed from Nat Tuck's lecture notes
import React from 'react';
import Task from './task';

export default function Tasks(params) {
  let tasks = _.map(params.tasks, (pp) => (<Task key={pp.id} task={pp} />));
  return (
    <div className="tasks-div">
      { tasks }
    </div>
  );
}
