import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { MyRoutes } from './component/MyRoutes';
import { Menu } from './component/Menu';
import { IProduct, IUser } from './type/type';
import { MyContext } from './context/MyContext';

function App() {
  const [users, setUser] = useState<IUser[]>([
    {
      id: 1,
      name: 'Levon',
      surname: 'Avetisyan',
      age: 16,
      email: 'test@1.test.com',
      sallary: 1000,
    },
    {
      id: 2,
      name: 'Sargis',
      surname: 'Avinyan',
      age: 17,
      email: 'test@2.test.com',
      sallary: 2000,
    },
    {
      id: 3,
      name: 'Nare',
      surname: 'Ayunc',
      age: 18,
      email: 'test@3.test.com',
      sallary: 3000,
    },
    {
      id: 4,
      name: 'Milena',
      surname: 'Ohanyan',
      age: 19,
      email: 'test@4.test.com',
      sallary: 4000,
    },
    {
      id: 5,
      name: 'Ani',
      surname: 'Anyan',
      age: 20,
      email: 'test@5.test.com',
      sallary: 5000,
    },
  ]);

  const [products, setProduct] = useState<IProduct[]>([
    {
      id: 1,
      name: 'First',
      price: 1000,
      count: 5,
      description: 'It`s the first product',
      user_id: 1,
    },
    {
      id: 2,
      name: 'Second project',
      price: 2000,
      count: 4,
      description: 'Here is the next one',
      user_id: 2,
    },
    {
      id: 3,
      name: 'Second project',
      price: 3000,
      count: 3,
      description: 'Now u see the third project',
      user_id: 3,
    },
    {
      id: 4,
      name: 'Forth project',
      price: 4000,
      count: 2,
      description: 'So it`s the last one',
      user_id: 4,
    },
    {
      id: 5,
      name: 'Fifth project',
      price: 5000,
      count: 1,
      description: 'The last or fifth product, my congratilations',
      user_id: 5,
    },
  ]);

  const createUser = (data: IUser): void => {
    setUser([...users, data]);
  };

  const createProduct = (data: IProduct): void => {
    setProduct([...products, data]);
  };

  const deleteUser = (id: number): void => {
    setUser([...users.filter((elm) => elm.id != id)]);
    setProduct([...products.filter((elm) => elm.user_id != id)]);
  };

  const deleteProduct = (id: number): void => {
    setProduct([...products.filter((elm) => elm.id != id)]);
  };

  return (
    <div className="App">
      <MyContext.Provider
        value={{
          deleteProduct,
          deleteUser,
          createProduct,
          createUser,
          users,
          products,
        }}
      >
        <Menu></Menu>
        <MyRoutes></MyRoutes>
      </MyContext.Provider>
    </div>
  );
}

export default App;
