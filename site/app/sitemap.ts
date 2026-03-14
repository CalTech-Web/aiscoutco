import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://aiscoutco.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/how-it-works`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/case-study`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/discovery`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/build`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/support`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms-of-service`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ];
}
