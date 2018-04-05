// followed Nat's lecture notes 
import React from 'react';
import { Card, CardBody } from 'reactstrap';

export default function Task(params) {
  let task = params.task;
  console.log(task);
  let complete = "No";
  if (task.complete) {
    complete = "Yes";
  }
  return (
    <Card className="col-6 offset-3">
      <CardBody>
        <div className="text-center">
          <p>Assigned to <b>{task.user.name}</b></p>
          <p><i>Title</i>: {task.title}</p>
          <p><i>Description of Task</i>: {task.descrip}</p>
          <p><i>Completed?</i>: {complete}</p>
          <p><i>Estimated Work Time</i>: {task.work_time}</p>
        </div>
      </CardBody>
    </Card>
  );
}