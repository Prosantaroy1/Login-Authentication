import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../component/pages/Home/Home";
import About from "../component/pages/About/About";

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
        }
      ]
    },
  ]);

export default router;