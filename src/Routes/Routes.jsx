import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";

import Tropic from "../Components/Tropic/Tropic";
import Quiz from "../Components/Quiz/Quiz";
import Blog from "../Components/Blog";
import Statistics from "../Components/Statistics";
// import Tropic from "../Components/Tropic/Tropic";
// import ErrorPage from "./ErrorPage";
// import Tropics from "../Components/Tropic/Tropics";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
     
      children: [

        {
            path:'/',
            element: <Home></Home>

        },
       {
        path: "/tropics",
        element: <Tropic></Tropic>
       },

       {
        path: "/quiz/:id",
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element: <Quiz></Quiz>,
      },

      {
        path: "/blog",
        element: <Blog></Blog>
      },

      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      }


      ]
    },
  ]);

  export default router;