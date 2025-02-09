
const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function createOrder(products: number[], token: string) {
    try {
        const response = await fetch(`${APIURL}/orders`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: token
            },
            body: JSON.stringify({
                products
            })
        })
        alert("Buy Succesfully")
        return response.json();
    }catch (error: any) {
        alert("An Error ocurred")
        throw new Error(error)
    }
};

export async function getOrders(token: string) {
    try {
        const response = await fetch(`${APIURL}/users/orders`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: token
            }
        })
        return response.json();
    }catch (error: any) {
        throw new Error(error)
    }
};