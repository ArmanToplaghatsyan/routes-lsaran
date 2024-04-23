export interface IUser{
    id: number;
    name: string;
    surname: string;
    age: number;
    email: string;
    sallary: number;
}

export interface IProduct{
    id: number;
    name: string;
    price: number;
    count: number;
    description: string;
    user_id: number;
}

