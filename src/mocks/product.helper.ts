import { Product } from "@/interfaces";

const APIURL = process.env.NEXT_PUBLIC_API_URL

export async function getProductsDB(): Promise<Product[]> {
    try {
        const response = await fetch(`${APIURL}/products`)
        const products: Product[] = await response.json();
        return products;
    }catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("An unexpected error occurred");
    }
};

export async function getProductsById(id: string): Promise<Product> {
    try {
        const products: Product[] = await getProductsDB();
        const productFiltered = products.find((product) => product.id.toString() === id)
        if(!productFiltered) throw new Error("Producto no encontrado")
        return productFiltered;
    }catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("An unexpected error occurred");
    }
};