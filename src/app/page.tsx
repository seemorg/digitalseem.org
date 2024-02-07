import Container from "@/components/Container";
import { Logo, Signature } from "@/components/Icons";
import { config } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function HomePage() {
  return (
    <div
      className="text-primary-100 relative min-h-screen w-full py-16 antialiased"
      style={{
        fontFeatureSettings: '"liga","dlig"',
      }}
    >
      <Container className="flex flex-col gap-10 text-2xl font-medium leading-normal sm:text-3xl">
        <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-center sm:gap-0">
          <div className="flex items-center gap-5">
            <Logo className="h-14 w-auto flex-shrink-0" />
            <h2 className="font-sans text-2xl">{config.org}</h2>
          </div>
          <div className="flex items-center gap-10">
            <Button
              asChild
              className="text-primary-100 flex items-center gap-3 text-lg"
              size="lg"
              variant="link"
            >
              <a href={config.careersUrl}>Careers</a>
            </Button>

            <Button
              asChild
              className="text-primary-100 flex items-center gap-3 text-lg"
              size="lg"
              variant="link"
            >
              <a href={`mailto:${config.ceo.email}`}>Get In Touch</a>
            </Button>
          </div>
        </div>

        <p className="mt-10">A new era in Islamic Law Research.</p>

        <p>
          The world of Islamic law is vast and rich in knowledge but almost
          inaccessible to researchers.
        </p>

        <p>
          Limited access to physical copies requires researchers to travel to
          far-flung libraries or private collections scattered across different
          continents, from Cairo to Istanbul, from Rabat to Jakarta.
        </p>

        <p>
          The absence of a comprehensive catalogue results in wasted hours spent
          locating pertinent texts, often navigating through complex and obscure
          references.
        </p>

        <p>The process is time-consuming and frustratingly slow.</p>

        <div>
          Enter Seemore, a new project set to change the landscape in three
          ways:
        </div>

        <ul className="list">
          <li>
            Digitize thousands of legal texts and make them easily accessible
          </li>
          <li>Create a universal catalogue for Islamic law research</li>
          <li>Build tools for researchers to efficiently navigate the texts</li>
        </ul>

        <p>
          We’re a group of technologists and lawyers bringing expertise from
          Harvard, UPenn, Twitter, and Quran.com. Join us for this journey and
          stay tuned for updates.
        </p>

        {/* <div className="mt-2">
          <Signature className="w-36" />
          <p className="mt-3">{config.ceo.name}</p>
          <p>CEO, {config.org}</p>

          <Button asChild variant="link" className="text-white">
            <a href={`mailto:${config.ceo.email}`}>{config.ceo.email}</a>
          </Button>
        </div> */}

        <div className="mt-20">
          <h2>Get our monthly updates</h2>

          <div className="group relative z-0 mt-5 w-[400px] max-w-full transition-all focus-within:z-10">
            <input
              id="email"
              placeholder=" "
              className="border-primary-100 peer block w-full border bg-transparent px-6 pb-4 pt-6 text-base/6 text-white ring-4 ring-transparent transition focus:border-white focus:outline-none focus:ring-white/5"
              type="email"
              name="email"
            />
            <label
              htmlFor="email"
              className="text-primary-100 pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 transition-all duration-200 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-white peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-white"
            >
              Email
            </label>

            <button className="absolute bottom-0 right-0 top-0 flex h-full w-14 items-center justify-center bg-white text-black transition-colors hover:bg-white/90">
              <ArrowRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </Container>

      <footer className="mt-20">
        <Container>
          Seemore is a registered 501(c)3 non-profit dedicated to advancing the
          accessibility of Islamic law research.
        </Container>
      </footer>
    </div>
  );
}
