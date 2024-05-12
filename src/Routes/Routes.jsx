import { createBrowserRouter } from "react-router-dom";
import Mother from "../Root/Mother";
import Login from "../Login/Login";
import Register from "../Register/Register";
import News from "../News/News";
import Destination from "../Destination/Destination";
import Contact from "../Contact/Contact";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Mother></Mother>,
      children:[
        {
            path:"/",
            element:<News></News>
        },
        {
          path:"/Login",
          element:<Login></Login>
        },
        {
          path:"/Register",
          element:<Register></Register>
        },
        {
          path:"/Destination",
          element:<Destination></Destination>
        },
        {
          path:"/Contact",
          element:<Contact></Contact>
        }
       
      ]
    },
  ]);
  export default router ;