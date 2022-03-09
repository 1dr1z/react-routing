import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  // const navigate=useNavigate();
  // navigate('/welcome'); PUSH
  // navigate('/welcome', {replace:true}); REPLACE
  // navigate(-1); PREVIOUS PAGE
  // navigate(1); NEXT PAGE
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to='/products/p1'>A Book</Link>
        </li>
        <li>
          <Link to='/products/p2'>A Carpet</Link>
        </li>
        <li>
          <Link to='/products/p3'>An Online course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
