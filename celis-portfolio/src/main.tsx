// main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import Programming from "./pages/Programming.tsx";
import Multimedia from "./pages/Multimedia.tsx";
import ProjectPage from "./pages/ProjectPage.tsx";
import JacsonsPage from "./pages/JacsonsPage.tsx";
import ThePoint from "./pages/ThePoint.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/jacsons" element={<JacsonsPage />} />
        <Route path="/thepoint" element={<ThePoint />} />
        <Route path="/multimedia" element={<Multimedia />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
