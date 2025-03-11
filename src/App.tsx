import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Band from "./pages/band/Band";
import SetList from "./pages/setlist/SetList";
import Medias from "./pages/medias/Medias";
import Concerts from "./pages/concerts/Concerts";
import Contact from "./pages/contact/Contact";
import MainNavbar from "./pages/navbar/MainNavbar";
import Footer from "./pages/footer/Footer";
import Success from "./pages/contact/Success";

function App() {
  return (
    <div id="main-div" className="bg-red-600/50 min-h-[100vh]">
      <BrowserRouter>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/le-groupe" element={<Band />} />
          <Route path="/set-liste" element={<SetList />} />
          <Route path="/medias" element={<Medias />} />
          <Route path="/concerts" element={<Concerts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/merci" element={<Success />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
