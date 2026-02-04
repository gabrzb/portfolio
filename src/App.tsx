import InitialLoader from "./components/ui/Loading/InitialLoader";
import Footer from "./components/sections/Footer/Footer";
import Hero from "./components/sections/Hero/Hero";
import Navbar from "./components/sections/Navbar/Navbar";
import About from "./components/sections/About/About";
import Education from "./components/sections/Education/Education";
import Career from "./components/sections/Career/Career";
import Projects from "./components/sections/Projects/Projects";

const sections = [
  { id: "hero", Component: Hero },
  { id: "about", Component: About },
  { id: "education", Component: Education },
  { id: "career", Component: Career },
  { id: "projects", Component: Projects },
];

const loadInitialData = async () => {
  // TODO: estudar um jeito da tela de carregamento emular bem um carregamento real
  // Exemplo:
  // const response = await fetch("/api/status");
  // if (!response.ok) throw new Error("Falha ao carregar dados");
  // await response.json();
  return Promise.resolve();
};

export default function App() {
  return (
    <>
      <InitialLoader load={loadInitialData} />
      <nav>
        <Navbar />
      </nav>
      {sections.map(({ id, Component }) => (
        <section key={id} id={id}>
          <Component />
        </section>
      ))}
      <Footer />
    </>
  );
}
