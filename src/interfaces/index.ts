export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
}


export interface IloginProps {
    email: string;
    password: string;
}

export interface IloginErrors {
    email?: string;
    password?: string;

}
export interface IRegisterProps {
    email: string;
    password: string;
    name: string;
    address: string;
    phone: string;
}

export interface IRegisterErrors {
    email?: string;
    password?: string;
    name?: string;
    address?: string;
    phone?: string;
}

export interface IUserSession {
    token: string,
    user: {
        address: string,
        email: string,
        id: number,
        name: string,
        phone: string,
        orders: []
    }
}

export interface IOrder {
    id: number;
    date: Date;
    status: string;
    products: Product[]
}