import React from 'react';
import { NavLink } from 'react-router-dom';

export const Menu: React.FC = React.memo((): JSX.Element => {
  return (
    <div className="Menu border border-3">
      <nav>
        <ul>
          <li><NavLink to={'/'}>Show Products</NavLink></li>
          <li><NavLink to={'/addProducts'}>add Product</NavLink></li>
          <li><NavLink to={'/showUsers'}>Show Users</NavLink></li>
          <li><NavLink to={'/addUsers'}>Add Users</NavLink></li>
        </ul>
      </nav>
    </div>
  );
});
