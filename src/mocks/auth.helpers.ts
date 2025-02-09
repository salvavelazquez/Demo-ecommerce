import { IloginProps, IRegisterProps } from "@/interfaces"

const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function register(userData: IRegisterProps) {
    try {
        const response = await fetch(`${APIURL}/users/register`, {
            method:'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(response.ok) {
            alert("Usuario registrado con exito");
            return response.json()
        } else {
            alert("Falló el registro del nuevo usuario")
        }
    }catch (error: any) {
        alert("catch: Falló el registro del nuevo usuario")
        throw new Error(error)
    }
};

export async function login(userData: IloginProps) {
    try {
        const response = await fetch(`${APIURL}/users/login`, {
            method:'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(response.ok) {
            return response.json()
        } else {
            alert("Falló el login del usuario")
        }
    }catch (error: any) {
        alert("catch: Falló el login del usuario")
        throw new Error(error)
    }
};