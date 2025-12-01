import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout";
import SplashScreen from "./pages/splashscreen";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
);
