import { VFXProvider } from "react-vfx";
import { Layout } from "./layout";

function App() {
  return (
    <VFXProvider>
      <Layout />
    </VFXProvider>
  );
}

export default App;
