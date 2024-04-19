import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAxios } from "../hook/useAxios";
import { ProductCard } from "../components/ProductCard";

export const ProductDetail = () => {
  
    const { id } = useParams();
    const [ product, setProduct ] = useState({})
    const { get, loading } = useAxios()

    useEffect(() => {
        // get(`/${id}`).then((response) => {
        //     setProduct(response);
        //     console.log(response);
        //   });

        const fetchData = async () => {
            const response = await get(`/${id}`);
            setProduct(response)
        }
        fetchData()
    }, [])

    return (
    <>
      Les détails de mon produit: 

        <ProductCard product={product}/>

    </>
  );
}