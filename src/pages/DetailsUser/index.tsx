import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { MyContext } from "../../context/MyContext";
import { IProduct, IUser } from "../../type/type";
import { Table } from "react-bootstrap";

export const DetailsUser: React.FC = React.memo((): JSX.Element => {
  const { id } = useParams();
  console.log(id);
  const { users, products } = useContext(MyContext);

  const [us, setUs] = useState<IUser>({} as IUser);
  const [prod, setProd] = useState<IProduct[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      const x = users.find((elm) => elm.id == +id);
      if (x) {
        setUs(x);
        setProd([...products.filter((e) => e.user_id == +id)]);
      } else {
        // navigate(-1);
        navigate("/showUsers");
      }
    }
  }, [id]);

  return (
    <div className="DetailsUser border border-3">
      <h2> Details User </h2>
      <ul className="warning">
        <li>{us.name}</li>
        <li>{us.surname}</li>
        <li>{us.age}</li>
        <li>{us.email}</li>
        <li>{us.sallary}</li>
      </ul>

      <hr />
      <Table variant="warning">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>See More</th>
          </tr>
        </thead>
        <tbody>
          {prod.map((elm) => {
            return (
              <tr key={elm.id}>
                <td>{elm.name}</td>
                <td>{elm.price}</td>
                <td>
                  <Link to={"/productDetails/" + elm.id}>See More</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
});
