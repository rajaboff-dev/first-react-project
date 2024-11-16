import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./cards/ProductCard";
import AddProductModal from "./AddProductModal";

export default function Cards() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  console.log(products);
  const handleAddProduct = (product) => {
    setProducts((prev) => {
      return [...prev, product];
    });
  };

  const handleEditProduct = (editedProductCallback) => {
    setProducts((prev) => {
      let tempProduct = [...prev]
      tempProduct[editedProductCallback.id - 1] = editedProductCallback
      return tempProduct
    });
  }
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };
  return (
    <>
      <AddProductModal handleAddProduct={handleAddProduct} />
      <div className="grid grid-cols-3 w-full place-items-center gap-5">
        {products &&
          products.map((product, index) => {
            return (
              <ProductCard
                product={product}
                key={index}
                handleDeleteProduct={handleDeleteProduct}
                handleEditProduct = {handleEditProduct}
              />
            );
          })}
      </div>
    </>
  );
}
