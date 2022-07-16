import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import Work from "./pages/Work";

function App() {
  return (
    <div className="bg-dark-background">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
