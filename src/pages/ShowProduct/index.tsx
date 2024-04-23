import React, { useContext } from 'react';
import { MyContext } from '../../context/MyContext';
import {Button, Table} from 'react-bootstrap'
import {Link} from "react-router-dom"

export const ShowProduct: React.FC = React.memo(({}): JSX.Element => {
  const {products, deleteProduct} = useContext(MyContext)
  return (
    <div className="ShowProduct border border-3">
      <h2>Show Product </h2>
      <Table variant='primary'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>&times;</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((elm) => {
              return(
              <tr key={elm.id}>
                <td>{elm.name}</td>
                <td><Link to={'/productDetails/'+elm.id}>See More</Link></td>
                <td><Button onClick={() => deleteProduct(elm.id)}>&times;</Button></td>
              </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  );
});
