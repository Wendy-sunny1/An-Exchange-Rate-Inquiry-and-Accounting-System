import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
  // </React.StrictMode>
);
