import React from "react";
import axios from "axios";

export const User = () => {
  const [users, setUsers] = React.useState([]);

  const requestUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response);

    setUsers(response.data);
  };

  React.useEffect(() => {
    requestUsers();
  }, []);
  return (
    <div>
      {users.map((user) => (
        <div data-testid="user-item">{user.name}</div>
      ))}
    </div>
  );
};
