import { Product } from "@/interfaces";
import Link from "next/link";


const Card: React.FC<Product> = ({ name, image, price, id }) => {
  
  return (
    //<Link href={`/products/${id}`}>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <p>
          <img className="p-8 rounded-t-lg" src={image} alt={name} />
        </p>
        <div className="px-5 pb-5">
          {/* <p> */}
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">{name}</h5>
          {/* </p> */}
          
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900">${price}</span>
            <p className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Detalle</p>
          </div>
        </div>
      </div>

   // </Link>
  );
};

export default Card;