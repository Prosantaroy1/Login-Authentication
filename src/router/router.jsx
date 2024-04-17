import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../component/pages/Home/Home";
import About from "../component/pages/About/About";
import Login from "../component/pages/Login/Login";
import Register from "../component/pages/Register/Register";
import PrivetRouter from "./PrivetRouter";


const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: "/",
    element: <PrivetRouter><Main /></PrivetRouter>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },

    ]
  }


]);

export default router;