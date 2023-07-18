import './App.css';
import './Responsive.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Test from './components/Test';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <section className='outerbody'>
        <Header />
        <Hero />
        <Services />
        <WhyUs />
        <Test />
        <Contact />
        <Footer />
      </section>
    </>
  );
}

export default App;
