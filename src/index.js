import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { PrivacyPolicy } from "./pages/privacyPolicy";
import { Contacts } from "./pages/contacts";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/CHOOSEYOURDESTINation" element={<Contacts />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);

reportWebVitals();
