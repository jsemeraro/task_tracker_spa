// followed from Nat Tuck's lecture notes
import React from 'react';
import { Link } from 'react-router-dom';

function User(params) {
  return (<p className="user"><b>{params.user.name}'s</b> <Link to={"/users/" + params.user.id}>tasks</Link></p>);
}

export default function Users(params) {
  let users = _.map(params.users, (uu) => (<User key={uu.id} user={uu} />));
  return (
    <div className="user-div col-6 offset-5">
      { users }
    </div>
  );
}
