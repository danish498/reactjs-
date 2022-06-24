import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUsers.module.css";

const AddUsers = () => {
  const addUserHandler = (event) => {
    event.preventDedault();
    console.log(event.trarget.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <Button type="submit" />
      </form>
    </Card>
  );
};

export default AddUsers;
