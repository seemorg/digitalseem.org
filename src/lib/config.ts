import { type Metadata, type Viewport } from "next";

const contactEmail = "contact@digitalseem.org";

export const siteConfig = {
  org: "Seemore Foundation",
  description:
    "We're an applied research lab pioneering Islamic knowledge access through cutting-edge AI. We're the team behind Usul AI.",
  contact: {
    email: contactEmail,
    mailto: `mailto:${contactEmail}`,
  },
  themeColor: "#273E3D",
  locale: "en_US",
  image: {
    url: "/cover.png",
    width: 900,
    height: 473,
    alt: "Seemore Cover",
  },
  url: "https://digitalseem.org",
};

export const getMetadata = ({
  title: baseTitle = siteConfig.org,
  description = siteConfig.description,
}: {
  title?: string;
  description?: string;
} = {}): Metadata => {
  const images = [siteConfig.image];
  const title =
    baseTitle === siteConfig.org
      ? baseTitle
      : `${baseTitle} | ${siteConfig.org}`;

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    icons: [{ rel: "icon", url: "/favicon.ico" }],
    openGraph: {
      type: "website",
      siteName: siteConfig.org,
      locale: siteConfig.locale,
      url: "/",
      title,
      description,
      images,
    },
    alternates: {
      canonical: "/",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
};

export const getViewport = (): Viewport => {
  return {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    themeColor: siteConfig.themeColor,
  };
};
