import { useSelector } from "react-redux";
import { ProductList } from "../components/ProductList";
import { Title } from "../components/Title";

export const Cart = () => {
  
    const products = useSelector(state => state.myCart.value)

    return (
    <>
      <Title>Mon panier</Title>
      <ProductList products={products} />
    </>
  );
}