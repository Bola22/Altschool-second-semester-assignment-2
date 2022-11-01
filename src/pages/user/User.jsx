import React from "react";
import useFetch from "../../hooks/useFetch";
import { Link, useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  const { data } = useFetch();
  // const userData = data.find((val) => val.login.uuid === userId);
  const userData = data?.filter(val => val.login.uuid === userId);
  console.log(userData)
  return (
    <div>
      <div className="usersProfile">
        <h1 className="title">User Profile</h1>
        <Link to={-1} className="btn" style={{ marginBottom: "50px" }}>
          Back
        </Link>
         

        


      </div>
    </div>
  );
}

export default User;
