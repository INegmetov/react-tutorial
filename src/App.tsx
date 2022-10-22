import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import { Product } from "./components/Product";
import { useProducts } from "./hooks/products";

function App() {
  const { products, error, isLoading } = useProducts();
  return (
    <div className="container mx-auto max-w-2xl pt5">
      {isLoading &&<Loader/>}
      {error &&<ErrorMessage error={error}/> }
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default App;
