import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Work from "@/components/sections/Work";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

// Blog isn't ready to show yet — flip this on when it is.
const SHOW_BLOG = false;

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Work />
                {SHOW_BLOG && <Blog />}
                <Contact />
            </main>
            <Footer />
        </>
    );
}
