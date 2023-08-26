//import Camisetas from "./components/pages/Camisetas";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home"
import Calcas from "./components/pages/Calcas"
import Camisetas from "./components/pages/Camisetas"
import Sapatos from "./components/pages/Sapatos"

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Calcas" element={<Calcas />} />
              <Route path="/Camisetas" element={<Camisetas />} />
              <Route path="/Sapatos" element={<Sapatos />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
