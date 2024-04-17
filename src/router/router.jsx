import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../component/pages/Home/Home";
import About from "../component/pages/About/About";
import Login from "../component/pages/Login/Login";
import Register from "../component/pages/Register/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element:<Register/>
        }
      ]
    }
   
  ]);

export default router;