import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import { useAuthContext } from "./context/AuthContext.jsx";
import React from "react";

export default function App() {

  const {authUser}=useAuthContext();
  
  const router=createBrowserRouter([
    {
      path:"/",
      element:(authUser ? <Navigate to="/chat"/>:<HomePage/>),
      errorElement:<Navigate to="/"/>
    },
    {
      path:"/signup",
      element:(authUser ? <Navigate to="/chat"/>:<SignUpPage/>),
    },
    {
      path:"/login",
      element:(authUser ? <Navigate to="/chat"/>:<LoginPage/>),
    },
    {
      path:"/chat",
      element:(authUser ? <ChatPage/>:<Navigate to="/"/>)
    }
  ])
  return (
    <RouterProvider router={router} ></RouterProvider>
  )
}