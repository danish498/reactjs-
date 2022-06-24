import { useState } from "react";
import "./App.css";
import AddUsers from "./Components/Users/AddUsers";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  // console.log(usersList);
  const adduserHandler = (uName, uAge) => {
    setUsersList((pervUserList) => {
      return [
        ...pervUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUsers onAddUser={adduserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
