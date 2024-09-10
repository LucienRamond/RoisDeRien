import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./pages/navbar/Navbar";
import Band from "./pages/band/Band";
import SetList from "./pages/setlist/SetList";
import Medias from "./pages/medias/Medias";
import Concerts from "./pages/concerts/Concerts";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-800 min-h-[100vh]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/le-groupe" element={<Band />} />
          <Route path="/set-liste" element={<SetList />} />
          <Route path="/medias" element={<Medias />} />
          <Route path="/concerts" element={<Concerts />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
