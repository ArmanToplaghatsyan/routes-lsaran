import React from "react";
import { IProduct, IUser } from "../type/type";

interface IData{
    users: IUser[];
    products: IProduct[];
    createUser: Function;
    deleteUser: Function ;
    createProduct: Function ;
    deleteProduct: Function ;

}

export const MyContext = React.createContext<IData>({} as IData)