import axios from "axios";
import React, { useEffect, useState } from "react";
import { Product } from "./components/Product";
import { IProduct } from "./model";

function App() {

  const [products, setProducts] = useState<IProduct[]>([])
 
  async function fetchProducts() {
    const response = await axios.get<IProduct[]>(
      "https://fakestoreapi.com/products?limit=5"
    );
    setProducts(response.data)
    console.log(response);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto max-w-2xl pt5">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default App;
