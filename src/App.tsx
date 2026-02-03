import "./App.css";
import InitialLoader from "./components/ui/Loading/InitialLoader";
import Footer from "./components/sections/Footer/Footer";
import Hero from "./components/sections/Hero/Hero";
import Navbar from "./components/sections/Navbar/Navbar";
import About from "./components/sections/About/About";
import Career from "./components/sections/Career/Career";
import Projects from "./components/sections/Projects/Projects";

export default function App() {
  const loadInitialData = async () => {
    // TODO: estudar um jeito da tela de carregamento ser medido por um carregamento real (fetch/axios).
    // Exemplo:
    // const response = await fetch("/api/status");
    // if (!response.ok) throw new Error("Falha ao carregar dados");
    // await response.json();
    return Promise.resolve();
  };

  return (
    <>
      <InitialLoader load={loadInitialData} />
      <nav>
        <Navbar />
      </nav>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="career">
        <Career />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
