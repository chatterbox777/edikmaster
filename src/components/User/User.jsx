import React from "react";
import { useSelector } from "react-redux";
// import { useHistory, useParams } from "react-router-dom";

export default function User() {
  const { user } = useSelector((state) => state.user);

  return (
    <div>
      <h2>
        {user?.id ?? "User"} {user.name} {user.last_name}
      </h2>
    </div>
  );
}
