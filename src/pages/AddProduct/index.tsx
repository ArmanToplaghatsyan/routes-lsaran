import React, { useContext } from "react";
import { Button, Row, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MyContext } from "../../context/MyContext";
import { IProduct } from "../../type/type";

export const AddProduct: React.FC = React.memo((): JSX.Element => {
  const { products, createProduct, users } = useContext(MyContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProduct>();
  const save = (data: IProduct): void => {
    createProduct({ ...data, id: Date.now() });
    reset()
  };

  return (
    <div className="AddProduct border border-3">
      <h2>Add Product </h2>
      <Form onSubmit={handleSubmit(save)}>
        <Row>
          <br />
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name"
            {...register("name", { required: "invalid name" })}
          ></Form.Control>
          {errors.name && <p>{errors.name.message}</p>}
          <br />

          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="price"
            {...register("price", {
              required: "invalid price",
              pattern: {
                value: /\d+$/,
                message: "NaN",
              },
            })}
          ></Form.Control>
          {errors.price && <p>{errors.price.message}</p>}
          <br />
          <Form.Label>Count</Form.Label>
          <Form.Control
            type="text"
            placeholder="count"
            {...register("count", {
              required: "invalid count",
              pattern: {
                value: /\d+$/,
                message: "NaN",
              },
            })}
          ></Form.Control>
          {errors.count && <p>{errors.count.message}</p>}
          <br />
        </Row>
        <br />
        <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="description"
            {...register("description", { required: "invalid description" })}
          ></Form.Control>
          {errors.description && <p>{errors.description.message}</p>}
          <br />

          <select className="form-control" {...register("name", {required: "Enter username"})}>
            {
              users.map((elm) => {
                return(
                <option key={elm.id} value={elm.name}>
                  {elm.name} {elm.surname}
                </option>
                )
              })
            }
          </select>
          {errors.name && <p>{errors.name.message}</p>}
          <br />
        <Button type="submit" variant="dark">Save</Button>
      </Form>
      <br />
    </div>
  );
});
