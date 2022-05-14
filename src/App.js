import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { VFXProvider } from "react-vfx";
import { Layout } from "./layout";
import { PrivacyPolicy } from "./pages/privacyPolicy";
import { Contacts } from "./pages/contacts";

function useScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function App() {
  useScrollToTop();
  return (
    <Routes>
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/CHOOSEYOURDESTINation" element={<Contacts />} />
      <Route path="*" element={<VFXProvider><Layout /></VFXProvider>} />
    </Routes>
  );
}

export default App;
