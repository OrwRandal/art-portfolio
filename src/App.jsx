import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FanArt from './pages/FanArt';
import Originals from './pages/Originals';
import Portraits from './pages/Portraits';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/originals" element={<Originals />} />
          <Route path="/fanArt" element={<FanArt />} />
          <Route path="/portraits" element={<Portraits />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
