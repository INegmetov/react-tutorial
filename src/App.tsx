import React from "react";
import { Product } from "./components/Product";
import { products } from "./data/products";

function App() {
  // return <h1>Hello React!!!</h1>;
  // return e('h1', {},'Hello from js')
  return (
    <div className="container mx-auto max-w-2xl pt5">
      {products.map(product => <Product product={product} key={product.id}/>)}
    </div>
  );
}

export default App;

