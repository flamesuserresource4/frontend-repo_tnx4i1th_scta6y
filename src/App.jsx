import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black selection:bg-blue-200/60 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
