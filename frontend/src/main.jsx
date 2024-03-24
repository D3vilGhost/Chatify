import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { Toaster } from "react-hot-toast";
import { SocketContextProvider } from "./context/SocketContext.jsx";
import { SearchContextProvider } from "./context/SearchContext.jsx";
import { FriendListContextProvider } from "./context/FriendListContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />
    <AuthContextProvider>
      <SocketContextProvider>
        <SearchContextProvider>
          <FriendListContextProvider>
            <App />
          </FriendListContextProvider>
        </SearchContextProvider>
      </SocketContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
