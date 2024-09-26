import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = React.useState([]);

  const requestUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    setUsers(response.data);
  };

  React.useEffect(() => {
    requestUsers();
  }, []);

  return (
    <div data-testid="users-page">
      {users?.map((user) => (
        <Link key={user.id} to={`/users/${user.id}`} data-testid="user-item">
          {user.name}
        </Link>
      ))}
    </div>
  );
};
