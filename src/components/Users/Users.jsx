import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { usersActionCreators } from "../../store/actionCreators";

export default function Users({ users, loading }) {
  const router = useHistory();
  const dispatch = useDispatch();
  function setUser(user) {
    dispatch(usersActionCreators.setUserActionCreator({ user }));
    router.push(`/user/${user.id}`);
  }
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        users.map((user) => (
          <li
            key={user.id}
            onClick={() => setUser(user)}
          >{`${user.id} ${user.last_name} ${user.name}`}</li>
        ))
      )}
    </>
  );
}
