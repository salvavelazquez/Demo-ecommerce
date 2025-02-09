
import React from "react";
import Card from "../Card/Card";
import { getProductsDB } from "@/mocks/product.helper";
import Link from "next/link";

const CardList =  async () => {
    const products = await getProductsDB();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {
                products &&
                products?.map((product) => {
                    return (
                        <Link key={product.id} href={`/products/${product.id}`}>
                            <Card key={product.id} {...product} />
                        </Link>
                    )
                })
            }
        </div>
    )
};

export default CardList;