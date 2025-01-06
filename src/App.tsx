
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="relative bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Certifications />
          <Projects />
          <Contact />
        </main>
        <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <p>&copy; {new Date().getFullYear()} anthosh Ganesh. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;