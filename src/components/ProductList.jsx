import React from 'react';
import Product from './Product';
import useAxios from '../hooks/useAxios';
import Spinner from './Spinner';

const ProductList = () => {
  const { data ,isLoading, error } = useAxios("https://api.escuelajs.co/api/v1/products");
    // useEffect(()=>{
    //   const getProducts = async ()=>{
    //     try {
    //       const response = await axios.get ("https://api.escuelajs.co/api/v1/products");
    //       setProducts(response.data);
    //       console.log(response.data);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    //     getProducts();
    // },[])
 if(isLoading) return <Spinner/>

 if (error) return <p>{error}</p>

  return (
    <div className="flex flex-wrap gap-10 justify-center pt-10">
    {data.map((data)=>(
     <Product product={data}/>
    ))}
    </div>
  )
}

export default ProductList