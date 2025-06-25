import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const { userid } = useParams();
  return (
    <div className="bg-blue-500 text-white text-4xl py-5 text-center">
      User: {userid}
    </div>
  );
}

export default User;
