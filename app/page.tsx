import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProjectGrid from "@/components/ProjectGrid";
import Safety from "@/components/Safety";
import Consultant from "@/components/Consultant";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <ProjectGrid />
        <Safety />
        <Consultant />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
