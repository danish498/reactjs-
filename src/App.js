import { Route, Switch, Redirect } from 'react-router-dom';
import Products from './pages/Products';
import Welcome from './pages/Welcome';
import MainHeader from './Components/MainHeader';
import ProductsDetails from './pages/ProductsDetails';

function App() {
  return (
    <div>
      <MainHeader />

      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome' />
          </Route>
          <Route path='/welcome'>
            <Welcome />
          </Route>
          <Route path='/Products' exact>
            <Products />
          </Route>
          <Route path='/products/:productID'>
            <ProductsDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
