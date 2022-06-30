import { Route } from 'react-router-dom';
import NewUsers from './NewUsers';

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page </h1>
      <Route path='/welcome/new-user'>
        <p>Welcome! new user</p>
      </Route>
      <NewUsers />
    </section>
  );
};
export default Welcome;
