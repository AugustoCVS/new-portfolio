import { About } from "./components/layout/About/about.component";
import { Contact } from "./components/layout/Contact/contact.component";
import { Header } from "./components/layout/Header/header.components";
import { Hero } from "./components/layout/Hero/hero.component";
import { Service } from "./components/layout/Service/service.component";

function App() {
  return (
    <div className="flex flex-col w-full h-full bg-white overflow-y-scroll gap-4">
      <Header />
      <Hero />
      <About />
      <Service />
      <Contact />
    </div>
  );
}

export default App;
