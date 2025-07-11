import React from 'react'
import { useRoutes } from "react-router-dom";
import Layout from './Layout/Layout';
import Products from './products/Products';
import Posts from './posts/Posts';
import User from './user/User';
import Recipes from './recipes/Recipes';
import Card from './card/Card';

const MainRouters = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Products />,
        },
        {
          path: "/posts",
          element: <Posts />,
        },
        {
          path: "/user",
          element: <User />,
        },
        {
          path: "/recipes",
          element: <Recipes />,
        },
        {
          path: "/card",
          element: <Card />,
        },
          {
          path: "/wishlist",
          element: <Card />,
        },
      ],
    },
  ]);
}

export default MainRouters