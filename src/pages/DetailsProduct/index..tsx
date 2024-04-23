import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../../context/MyContext";
import { IProduct, IUser } from "../../type/type";
import { Table, Card } from "react-bootstrap";

export const DetailsProduct: React.FC = React.memo((): JSX.Element => {
  const { id } = useParams();
  console.log(id);
  const { users, products } = useContext(MyContext);

  const [prod, setprod] = useState<IProduct>({} as IProduct);
  const [us, setus] = useState<IUser>({} as IUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      const x = products.find((elm) => elm.id == +id);
      if (x) {
        setprod(x);
        const y = users.find((elm) =>elm.id==x.user_id);
        if(y)
        setus(y)

      } else {
        // navigate(-1);
        navigate("/");
      }
    }
  }, [id]);


  return (
    <div className="DetailsUser border border-3">
      <h2> Details Product </h2>

      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
         {prod.description}
        </Card.Text>
        <Card.Text>{prod.count}</Card.Text>
        <Card.Text>{prod.price}</Card.Text>
        <Card.Text>{us.name} {us.surname}</Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
});
