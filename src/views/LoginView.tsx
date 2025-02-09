'use client'

import { useAuth } from "@/context/AuthContext";
import { IloginErrors, IloginProps } from "@/interfaces";
import { login } from "@/mocks/auth.helpers";
import { validateLoginForm } from "@/mocks/validate";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

const LoginView = () => {
    const router = useRouter();
    const {setUserData} = useAuth();
    const initialState = {
        email: "",
        password: ""
    }

    const [dataUser, setDataUser] = useState<IloginProps>(initialState);
    const [errors, setErrors] = useState<IloginErrors>(initialState);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await login(dataUser);
        const {token, user} = response;
        setUserData({token,user})
        Cookies.set("token", token)
        alert("Se ha logueado correctamente");
        router.push("/")
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setDataUser({
            ...dataUser,
            [name]: value
        })
    }
    useEffect(() => {
        const errors = validateLoginForm(dataUser);
        setErrors(errors);
    }, [dataUser])

    return (
        <div className="flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Ingresa a nuestra Tienda!</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email-address" className="block text-lg font-medium text-gray-700">Email:</label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            value={dataUser.email}
                            placeholder="johndoe@gmail.com"
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password-address" className="block text-lg font-medium text-gray-700">Password:</label>
                        <input
                            id="password-address"
                            name="password"
                            type="password"
                            value={dataUser.password}
                            placeholder="*******"
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.password && <span className="text-red-500 text-sm mt-1">{errors.password}</span>}
                    </div>

                    <button
                        type="submit"
                        disabled={!!(errors.email || errors.password)}
                        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginView