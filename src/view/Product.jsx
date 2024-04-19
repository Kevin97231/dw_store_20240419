import { useEffect, useState } from "react";
import { Title } from "../components/Title";
import { useAxios } from "../hook/useAxios";
import { ProductList } from "../components/ProductList";
import { Pagination } from "../components/pagination/Pagination";

export const Product = () => {

    let initialPage = {
        _page: 1,
        _per_page: 8
    }

    const [ page, setPage ] = useState(initialPage._page)
    
    const [ perPage, setPerPage ] = useState(initialPage._per_page)

    const [ products, setProducts ] = useState([])
  
    const { get, loading } = useAxios()

    useEffect(() => {
        const endPoint = `?_page=${page}&_per_page=${perPage}`
        get(endPoint)
            .then(response => setProducts(response.data)) 
    },[page, perPage])
  
    const clickOnPaginationButton = (number) => {
        console.log('NUmber', number)
        setPage(number)
    }

    return (
    <div className="w-full">
      <Title>Mes produits</Title>
        {
            loading ? <>CHARGEMENT</> : <ProductList products={products}/>
        }
        <div className="m-auto my-5 w-fit">
            <Pagination handleClick={clickOnPaginationButton}/>
        </div>
    </div>
  );
}