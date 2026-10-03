import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { About } from "@/components/sections/about";
import { Credentials } from "@/components/sections/credentials";
import { Research } from "@/components/sections/research";
import { Contact } from "@/components/sections/contact";
import { PageMotion } from "@/components/ui/page-motion";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <PageMotion />
      <main id="main-content">
        <Hero />
        <SelectedWork />
        <Experience />
        <Skills />
        <About />
        <Credentials />
        <Research />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
