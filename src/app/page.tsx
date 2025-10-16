import Footer from "@/components/layout/footer";
import Hero from "./_components/hero";
import OurMission from "./_components/our-mission";
import Projects from "./_components/projects";
import Team from "./_components/team";
import Transformation from "./_components/transformation";
import Stats from "./_components/stats";
import Navbar from "@/components/layout/navbar";

export default function HomePage() {
  return (
    <>
      <Hero />
      <OurMission />
      <Projects />
      <Team />
      <Stats />
      <Transformation />
      <Footer />
      <Navbar variant="overlay" />
    </>
  );
}
