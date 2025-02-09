'use client'
import React from 'react';
import { Formik, Field, Form, ErrorMessage} from 'formik';
import { validateRegisterForm } from '@/mocks/validate';
import { register } from '@/mocks/auth.helpers';
import { useRouter } from 'next/navigation';

const RegisterView = () => {
    const router = useRouter();
    
    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-semibold text-center mb-6">Registrarse - vs</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    name: '',
                    address: '',
                    phone: ''
                }}
                onSubmit={async (values) => {
                    await register(values);
                    // alert("Usuario registrado con exito");
                    router.push("/login");
                }}
                validate={validateRegisterForm}
            >
            {({ errors, isValid }) => (
                <Form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <Field type="text" id="email" name="email" placeholder="John@gmail.com" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <ErrorMessage name="email" component="div" className="text-sm text-red-600" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                        <Field type="password" id="password" name="password" placeholder="********" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <ErrorMessage name="password" component="div" className="text-sm text-red-600" />
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                        <Field type="text" id="name" name="name" placeholder="John Doe" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <ErrorMessage name="name" component="div" className="text-sm text-red-600" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
                        <Field type="text" id="address" name="address" placeholder="Posadas, Misiones, Argentina" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <ErrorMessage name="address" component="div" className="text-sm text-red-600" />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone:</label>
                        <Field type="text" id="phone" name="phone" placeholder="+54376545" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <ErrorMessage name="phone" component="div" className="text-sm text-red-600" />
                    </div>

                    <div className="text-center">
                        <button disabled={!isValid} type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50">
                            Crear Cuenta
                        </button>
                    </div>
                </Form>
            )}
            </Formik>
        </div>
    )
}

export default RegisterView;
