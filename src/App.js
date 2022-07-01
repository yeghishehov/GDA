import { useEffect } from "react";
import {
  Routes, Route, useLocation, Navigate,
} from "react-router-dom";
import { Layout } from "./layout";
import { PrivacyPolicy } from "./pages/privacyPolicy";
import { Contacts } from "./pages/contacts";
import { Course } from "./pages/course";

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
      <Route path="/" element={<Layout />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/CHOOSEYOURDESTINation" element={<Contacts />} />
      <Route path="/course/:id" element={<Course />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
