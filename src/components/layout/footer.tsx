import Container from "../ui/container";
import { siteConfig } from "@/lib/config";
import NewsletterForm from "./newsletter-form.client";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="border-secondary/10 pb-8 pt-8 sm:pt-12 lg:pt-16">
          <div className="border-t border-secondary/10 pt-8">
            <div>
              <h3 className="text-sm/6 font-semibold text-gray-900">
              Subscribe to our newsletter
              </h3>
              <p className="mt-2 text-sm/6 text-gray-600">
              Receive updates and announcements.
              </p>
            </div>

            <NewsletterForm className="mt-6 sm:flex sm:max-w-md" />
          </div>
          <div className="mt-8 border-t border-secondary/10 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex gap-x-6 md:order-2">
              <a
                href={siteConfig.contact.mailto}
                className="text-secondary hover:text-gray-800 hover:underline"
              >
                Contact Us
              </a>
            </div>

            <p className="mt-8 text-sm/6 text-secondary md:order-1 md:mt-0">
              Seemore Foundation is a 501(c)3 pending non-profit.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
