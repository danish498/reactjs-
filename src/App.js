import { Route } from 'react-router-dom';
import Products from './pages/Products';
import Welcome from './pages/Welcome';
import MainHeader from './Components/MainHeader';
import ProductsDetails from './pages/ProductsDetails';

function App() {
  return (
    <div>
      <MainHeader />

      <main>
        <Route path='/welcome'>
          <Welcome />
        </Route>
        <Route path='/Products'>
          <Products />
        </Route>
        {/* <Route path='/product-details/:productID'>
          <ProductsDetails />
        </Route> */}
      </main>
    </div>
  );
}

export default App;
