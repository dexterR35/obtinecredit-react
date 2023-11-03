import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import About from "./components/about";
import Services from "./components/services";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Hero />
        <About />
        <Services />
      </div>
      <Footer />
    </>
  );
}

export default App;
