import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
    return (
        <div className="min-h-screen bg-brand-navy text-brand-light">
            <Navbar />
            <Hero />
            <div className="max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
            <Skills />
            <div className="max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
            <Projects />
            <div className="max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
            <AboutMe />
            <Footer />
            <ScrollToTop />
        </div >
    );
}

export default App;