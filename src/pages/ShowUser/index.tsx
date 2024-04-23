import React, { useContext } from 'react';
import {Button, Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { MyContext } from '../../context/MyContext';

export const ShowUser: React.FC = React.memo((): JSX.Element => {
  const {users, deleteUser} = useContext(MyContext)
  
  return (
    <div className="ShowUser border border-3">
      <h2>Show User </h2>
      <Table variant='info'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>See More</th>
            <th>&times;</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((elm) => {
              return(
              <tr key={elm.id}>
                <td>{elm.name}</td>
                <td>{elm.surname}</td>
                <td><Link to={'/userDetails/' + elm.id}>See More</Link></td>
                <td><Button onClick={() => deleteUser(elm.id)} variant='danger'>&times;</Button></td>
              </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  );
});
