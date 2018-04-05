import React from 'react';
import { Card, CardBody } from 'reactstrap';

export default function Task(params) {
  let task = params.task;
  return (
    <Card>
      <CardBody>
        <div>
          <p>Assigned to <b>{task.user.name}</b></p>
          <p>{task.title}</p>
          <p>{task.descrip}</p>
        </div>
      </CardBody>
    </Card>
  );
}