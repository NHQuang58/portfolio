import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
