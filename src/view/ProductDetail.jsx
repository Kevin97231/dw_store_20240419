import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAxios } from "../hook/useAxios";
import { ProductCard } from "../components/ProductCard";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/cartSlice";

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { get, loading } = useAxios();

  const dispatch = useDispatch();

  useEffect(() => {
    // get(`/${id}`).then((response) => {
    //     setProduct(response);
    //     console.log(response);
    //   });
    const fetchData = async () => {
      const response = await get(`/${id}`);
      setProduct(response);
    };
    fetchData();
  }, []);

  return (
    <>
      { 
        loading ? <p>CHARGEMENT</p> 
        :
        <div>
          <ProductCard product={product}/>
          <button className="m-5 btn btn-bordered" onClick={() => dispatch(addProduct(product))}>Ajouter à mon panier</button>
        </div>  
      }
    </>
  );
};
