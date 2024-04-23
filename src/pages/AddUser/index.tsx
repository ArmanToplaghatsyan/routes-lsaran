import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { IUser } from '../../type/type';
import { MyContext } from '../../context/MyContext';
import { Button, Row, Form } from 'react-bootstrap';

export const AddUser: React.FC = React.memo((): JSX.Element => {
  const { createUser, users } = useContext(MyContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUser>();
  const save = (data: IUser): void => {
    createUser({ ...data, id: Date.now() });
    reset();
  };

  return (
    <div className="AddUser border border-3">
      <h2> Add User </h2>

      <Form onSubmit={handleSubmit(save)}>
        <Row className="mb-3">
          <br />
          <Form.Label>First name</Form.Label>
          <Form.Control
            
            type="text"
            placeholder="First name"
            {...register('name', { required: 'Invalid name' })}
          />
          {errors.name && errors.name.message}
          <br />
          <Form.Label>Last name</Form.Label>
          <Form.Control
            
            type="text"
            placeholder="Last name"
            {...register('surname', { required: 'Invalid surname' })}
          />
          {errors.surname && errors.surname.message}
          <br />
          <Form.Label>Age</Form.Label>
          <Form.Control
            
            type="text"
            placeholder="Age"
            {...register('age', { required: 'Invalid age',
              pattern: {
                value: /\d+$/,
                message: 'NaN',
              },
            })}
          />
          {errors.age && errors.age.message}
          <br />
          <Form.Label>Email</Form.Label>
          <Form.Control
            
            type="text"
            placeholder="Email"
            {...register('email', { required: 'Invalid email', pattern:{
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "not email"
            } })}
          />
          {errors.surname && errors.surname.message}
          <br />
          <br />
          <Form.Label>Salary</Form.Label>
          <Form.Control
            
            type="text"
            placeholder="Salary"
            {...register('sallary', { required: 'Invalid salary', pattern:{
              value: /\d+$/,
              message: "NaN"
            } })}
          />
          {errors.sallary && errors.sallary.message}
          <br />
          
        </Row>
        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
});
