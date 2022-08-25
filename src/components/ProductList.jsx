import React, {useEffect} from "react";
import Product from "./Product";
import useAxios from "../hooks/useAxios";
import Spinner from "./Spinner";
import { useProductContext } from "../context/ProductContext";

const ProductList = () => {
  // const { data, isLoading, error } = useAxios(
  //   "https://api.escuelajs.co/api/v1/products"
  // );
    const { data, isLoading, error } = useAxios(
      "https://fakestoreapi.com/products"
    );

   const { products, setProducts } = useProductContext();
  // useEffect(()=>{
  //   const getProducts = async ()=>{
  //     try {
  //       const response = await axios.get ("https://api.escuelajs.co/api/v1/products");
  //       setProducts(response.products);
  //       console.log(response.products);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //     getProducts();
  // },[])

  useEffect(() => {
    setProducts(data);
  }, [data]);

  if (isLoading) return <Spinner />;

  if (error) return <p>{error}</p>;

  
  return (
    <div className="flex flex-wrap gap-10 justify-center pt-10">
      {products?.map((data) => (
        <Product product={data} />
      
      ))}
    </div>
  );
};

export default ProductList;
