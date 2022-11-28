import Adduser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";

function App() {
  const [usersList, setUserslist] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserslist((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <Adduser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
