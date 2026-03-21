import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CartPage from "../pages/books/CartPage";
import Checkout from "../pages/Checkout";
import SingleBook from "../pages/books/SingleBook";

const  router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/",
                    element:  <Home />,
                },
                {
                    path: "/about",
                    element: <div>About</div>,
                },
                {
                    path:"/orders",
                    element: <div>Orders</div>,
                },
                {
                    path: "/login",
                    element: <Login />,
                },
                {
                    path: "/register",
                    element: <Register />,
                },
                {
                    path: "/cart",
                    element: <CartPage />,
                },
                {
                    path: "/checkout",
                    element: <Checkout />,
                },
                {
                    path:"/book/:id",
                    element: <SingleBook />
                }
                

            ]
        }
    ]
)

export default router;