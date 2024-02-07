import { type Metadata, type Viewport } from "next";

export const config = {
  org: "Seemore",
  description:
    "In a world where Islamic Law research is a challenge, Seemore is building tools to make it accessible. A new era where knowledge is within reach, research is efficient, and navigating vast legal texts is seamless.",
  ceo: {
    name: "Abdellatif Abdelfatah",
    email: "abdellatif@digitalseem.org",
  },
  themeColor: "#AA4A44",
  locale: "en_US",
  image: {
    url: "/cover.png",
    width: 1280,
    height: 720,
    alt: "Seemore Cover",
  },
  careersUrl: "/careers",
  url: "https://digitalseem.org",
};

export const getMetadata = (): Metadata => {
  const title = config.org;
  const description = config.description;
  const images = [config.image];

  return {
    title,
    description,
    metadataBase: new URL(config.url),
    icons: [{ rel: "icon", url: "/favicon.ico" }],
    openGraph: {
      type: "website",
      siteName: config.org,
      locale: config.locale,
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
    themeColor: config.themeColor,
  };
};
