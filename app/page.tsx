"use client"
import { useEffect } from "react";
import AboutMe from "@/components/about/AboutMe";
import Portfolio from "@/components/portfolio/Portfolio";
import Hero from "@/components/hero/Hero";
import Credits from "@/components/credits/Credits";
import Contact from "@/components/contact/Contact";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Home() {

  const [refHome, inViewHome] = useInView({
    triggerOnce: true,
  });

  const [refAboutMe, inViewAboutMe] = useInView({
    triggerOnce: true,
  });

  const [refPortfolio, inViewPortfolio] = useInView({
    triggerOnce: true,
  });

  const [refCredits, inViewCredits] = useInView({
    triggerOnce: true,
  });

  const [refContact, inViewContact] = useInView({
    triggerOnce: true,
  });

  const controlsHome = useAnimation();
  const controlsAboutMe = useAnimation();
  const controlsPortfolio = useAnimation();
  const controlsCredits = useAnimation();
  const controlsContact = useAnimation();

  useEffect(() => {
    if (inViewHome) {
      controlsHome.start("visible");
    }
  }, [controlsHome, inViewHome]);

  useEffect(() => {
    if (inViewAboutMe) {
      controlsAboutMe.start("visible");
    }
  }, [controlsAboutMe, inViewAboutMe]);

  useEffect(() => {
    if (inViewPortfolio) {
      controlsPortfolio.start("visible");
    }
  }, [controlsPortfolio, inViewPortfolio]);

  useEffect(() => {
    if (inViewCredits) {
      controlsCredits.start("visible");
    }
  }, [controlsCredits, inViewCredits]);

  useEffect(() => {
    if (inViewContact) {
      controlsContact.start("visible");
    }
  }, [controlsContact, inViewContact]);


  return (
    <>
      <motion.div
        ref={refHome}
        animate={controlsHome}
        initial="hidden"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 }
        }}
        className="pb-20"

      >
        <Hero />
      </motion.div>
      <motion.div
        ref={refAboutMe}
        animate={controlsAboutMe}
        initial="hidden"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 }
        }}
        className="pb-8"
        id="aboutMe"
      >
        <AboutMe />
      </motion.div>
      <motion.div
        ref={refPortfolio}
        animate={controlsPortfolio}
        initial="hidden"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 }
        }}
        className="pb-8"
        id="portfolio"
      >
        <Portfolio />
      </motion.div>
      <motion.div
        ref={refCredits}
        animate={controlsCredits}
        initial="hidden"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 }
        }}
        className="pb-8"
        id="credits"
      >
        <Credits />
      </motion.div>
      <motion.div
        ref={refContact}
        animate={controlsContact}
        initial="hidden"
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 }
        }}
        className="pb-8"
        id="contact"
      >
        <Contact />
      </motion.div>    </>
  );
}

