import Nav from './components/Nav';
import Hero from './components/Hero';
import Purpose from './components/Purpose';
import Build from './components/Build';
import Fitting from './components/Fitting';
import InUse from './components/InUse';
import Upkeep from './components/Upkeep';
import Team from './components/Team';
import Closing from './components/Closing';
import Footer from './components/Footer';
import useReveal from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <>
      <a className="sr-only" href="#purpose">Skip to content</a>
      <Nav />
      <main>
        <Hero />
        <Purpose />
        <Build />
        <Fitting />
        <InUse />
        <Upkeep />
        <Team />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
