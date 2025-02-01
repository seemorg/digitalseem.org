import Footer from "@/components/layout/footer";
import Hero from "./hero";
import OurVision from "./our-vision";
import Projects from "./projects";
import Team from "./team";
import Transformation from "./transformation";

export default function NewPage() {
  return (
    <>
      <Hero />
      <OurVision />
      <Projects />
      <Team />
      <Transformation />
      <Footer />
    </>
  );
}
