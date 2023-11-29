import AboutMe from "@/components/about/AboutMe";
import Portfolio from "@/components/portfolio/Portfolio";
import Hero from "@/components/hero/Hero";
import Credits from "@/components/credits/Credits";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <section className="flex flex-col h-auto w-full items-center justify-center gap-4 pb-8 md:pb-20">
        <Hero />
      </section>
      <section className="w-full h-auto pb-16">
        <AboutMe />
      </section>
      <section className="w-full">
        <Portfolio />
      </section>
      <section className="w-full">
        <Credits />
      </section>
      <section className="w-full pb-16">
        <Contact />
      </section>
    </>
  );
}
