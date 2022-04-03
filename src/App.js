import { VFXProvider } from "react-vfx";
import { Layout } from "./components/layout";

function App() {
  return (
    <VFXProvider>
      <Layout />
    </VFXProvider>
  );
}

export default App;
