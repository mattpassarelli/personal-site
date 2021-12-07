import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SecretSanta from "./components/SecretSanta";

ReactDOM.render(
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/secretsanta" element={<SecretSanta />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>,

  document.getElementById("root")
);
