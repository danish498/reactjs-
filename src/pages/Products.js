import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section>
      <h1>Products details</h1>
      <ul>
        <li>
          <Link to='/products/p1'>A Mobile Phone</Link>
        </li>
        <li>
          <Link to='/products/p2'>A laptop</Link>
        </li>
        <li>
          <Link to='/products/p3'>Books</Link>
        </li>
        <li>
          <Link to='/products/p4'>Reactjs tutorials</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
