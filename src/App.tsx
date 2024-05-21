import { About } from "./components/layout/About/about.component";
import { Contact } from "./components/layout/Contact/contact.component";
import { Header } from "./components/layout/Header/header.components";
import { Hero } from "./components/layout/Hero/hero.component";
import { Projects } from "./components/layout/Projects/projects.component";

function App() {
  return (
    <div className="flex flex-col w-full h-full bg-white overflow-y-scroll gap-4">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
