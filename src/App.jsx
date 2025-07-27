// src/App.jsx
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import DeliverySection from './components/DeliverySection';
import MetodosDePago from './components/MetodosDePago';
import QuienesSomos from './components/QuienesSomos';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
import CuidadosFlores from './components/CuidadosFlores';



function App() {
  return (
    <>
      <GlobalStyles />

      <Header />

      <main>
        <section id="inicio">
        </section>

        <section id="hero">
          <Hero />
        </section>

        <section id="catalogo">
          <ProductGrid />
        </section>

        <section id="despachos">
          <DeliverySection />
        </section>

        <section id="metodos-pago">
          <MetodosDePago />
        </section>
        
        <section id="cuidados-flores">
          <CuidadosFlores />
        </section>

        <section id="quienes-somos">
          <QuienesSomos />
        </section>

        <section id="footer">
          <Footer />
        </section>
      </main>

      <ScrollToTop />

    </>
  );
}



export default App;