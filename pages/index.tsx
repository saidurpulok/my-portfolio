import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Publications from '../components/Publications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Publications />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
