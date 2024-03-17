import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import LogInPage from "./pages/LogInPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import { useAuthContext } from "./context/AuthContext.jsx";
import React from "react";
import SignUpPage from "./pages/SignUpPage.jsx";

export default function App() {

  const {authUser}=useAuthContext();
  
  const router=createBrowserRouter([
    {
      path:"/",
      element:(authUser ? <Navigate to="/chat"/>:<LogInPage/>),
      errorElement:<Navigate to="/"/>
    },
    {
      path:"/signup",
      element:(authUser ? <Navigate to="/chat"/>:<SignUpPage/>),
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