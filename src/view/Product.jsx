import { useEffect, useState } from "react";
import { Title } from "../components/Title";
import { useAxios } from "../hook/useAxios";
import { ProductList } from "../components/ProductList";

export const Product = () => {
    const [ products, setProducts ] = useState([])
  
    const { get, loading } = useAxios()

    useEffect(() => {
        const endPoint = `?_page=1&_per_page=8`
        get(endPoint)
            .then(response => setProducts(response.data))
    },[])
  
    return (
    <div className="w-full">
      <Title>Mes produits</Title>
        {
            loading ? <>CHARGEMENT</> : <ProductList products={products}/>
        }
    </div>
  );
}