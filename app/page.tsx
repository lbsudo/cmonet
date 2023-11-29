import AboutMe from "@/components/about/AboutMe";
import Portfolio from "@/components/portfolio/Portfolio";
import Hero from "@/components/hero/Hero";
import Credits from "@/components/credits/Credits";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <section id="home" className="flex flex-col h-auto w-full items-center justify-center gap-4 pb-8 md:pb-20">
        <Hero />
      </section>
      <section id="aboutMe" className="w-full h-auto pb-16">
        <AboutMe />
      </section>
      <section id="portfolio" className="w-full">
        <Portfolio />
      </section>
      <section id="credits" className="w-full">
        <Credits />
      </section>
      <section id="contact" className="w-full pb-16">
        <Contact />
      </section>
    </>
  );
}
