import NewsletterForm from "./newsletter-form";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-10 text-[hsl(4,53%,90%)] [&_a]:text-white [&_a]:underline [&_strong]:text-white">
        <h1>A new era in Islamic Law research.</h1>

        <p>
          For centuries, Islamic Law has been a cornerstone of legal, social,
          and ethical guidance across diverse communities around the globe.
          However, the vast repositories of knowledge within the tradition have
          remained inaccessible due to the <strong>physical limitations</strong>{" "}
          of texts and the <strong>scattered nature</strong> of resources.
        </p>

        <p>
          Researchers have to travel to far-flung libraries or private
          collections scattered across different continents. And when they do
          get their hands on these texts, they are confronted with an even
          greater challenge: the absence of{" "}
          <strong>advanced research tools</strong>.
        </p>

        <p>
          Researchers have to manually go through volumes of texts to find
          specific references or legal rulings. The process is{" "}
          <strong>time-consuming</strong> and{" "}
          <strong>frustratingly slow</strong>.
        </p>

        <p>We’re here to change this.</p>

        <p>
          We’re transforming Islamic Law research by <strong>digitizing</strong>{" "}
          thousands of classical texts, <strong>organizing</strong> them for
          easy navigation, and <strong>developing</strong> powerful search tools
          and algorithms. By doing so, we hope to unlock new insights and make
          the field accessible to researchers worldwide.
        </p>

        <p>
          We’re a group of <strong>technologists</strong> and{" "}
          <strong>lawyers</strong> bringing expertise from Harvard, UPenn,
          Twitter, and Quran.com to solve this problem.
        </p>

        <p>
          Join us along this journey by subscribing to updates below, following
          our work on{" "}
          <a href="https://github.com/seemorg" target="_blank">
            GitHub
          </a>
          , and if you’re up for sharing some feedback:{" "}
          <a href="mailto:early-access@digitalseem.org" target="_blank">
            request early access
          </a>{" "}
          to our first product.
        </p>
      </div>

      <div className="mt-20">
        <NewsletterForm />
      </div>
    </div>
  );
}
