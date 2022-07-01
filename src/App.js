import { Route, Redirect, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import NewQuotes from './pages/NewQuotes';
import QuoteDetails from './pages/QuoteDetails';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:productID'>
          <QuoteDetails />
        </Route>
        <Route path='/new-quote'>
          <NewQuotes />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
