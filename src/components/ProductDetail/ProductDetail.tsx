import { Product } from "@/interfaces";
import styles from "./ProductDetail.module.css";

interface ProductDetailProps {
    product: Product;
}

const ProductDetail = ({product}:ProductDetailProps) => {
    const {name, price, image, description} = product;

    return (
        <article >
            <h1>{name}</h1>
            <div className={styles.productDetail}>
                <img src={image} alt={name} />
                <div className={styles.info}>
                    <p>{description}</p>
                    <div className={styles.widget}>
                        <button>Add to Cart</button>
                        <p>{price}</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProductDetail;