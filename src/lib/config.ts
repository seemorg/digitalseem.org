import { type Metadata, type Viewport } from "next";

export const siteConfig = {
  org: "Seemore",
  description:
    "In a world where Islamic Law research is a challenge, Seemore is building tools to make it accessible. A new era where knowledge is within reach, research is efficient, and navigating vast legal texts is seamless.",
  ceo: {
    name: "Abdellatif Abdelfatah",
    email: "abdellatif@digitalseem.org",
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
