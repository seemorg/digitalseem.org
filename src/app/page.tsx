import Footer from "@/components/layout/footer";
import Hero from "./_components/hero";
import OurVision from "./_components/our-vision";
import Projects from "./_components/projects";
import Team from "./_components/team";
import Transformation from "./_components/transformation";
import Stats from "./_components/stats";

export default function HomePage() {
  return (
    <>
      <Hero />
      <OurVision />
      <Projects />
      <Team />
      <Stats />
      <Transformation />
      <Footer />
    </>
  );
}
