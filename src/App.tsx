import { useState } from "react";
import { CreateProduct } from "./components/CreateProduct";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import { Product } from "./components/Product";
import { useProducts } from "./hooks/products";
import { IProduct } from "./model";

function App() {
  const { products, error, isLoading, addProduct } = useProducts();
  const [modal, setModal] = useState(true);
  const createHandler = (product: IProduct) =>{
    setModal(false)
    addProduct(product)
  }
  return (
    <div className="container mx-auto max-w-2xl pt5">
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title="Create new product">
          <CreateProduct onCreate= {createHandler}/>
        </Modal>
      )}
    </div>
  );
}

export default App;
