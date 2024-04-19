import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Product } from "./view/Product";
import { ProductDetail } from "./view/ProductDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <>Homepage</>,
        },
        {
          path: "products",
          element: <Product/>,
        },
        {
          path: "products/:id",
          element: <ProductDetail/>,
        },
        {
          path: 'panier',
          element: <>mon panier</>
        }
      ],
    },
  ]);

  function Root() {
    return (
      <>
        <div className="root-container">
          <NavBar />
          <div className="outlet">
            {/* <Outlet /> une balise qui appartient à la biblio react-router-dom 
          //       -> à la place de 'outlet' s'affichera les composants liés à nos routes
          //   */}
            <Outlet />
          </div>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
