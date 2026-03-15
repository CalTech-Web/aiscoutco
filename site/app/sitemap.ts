import { MetadataRoute } from "next";

const LAUNCH = new Date("2026-03-01");
const UPDATED = new Date("2026-03-14");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://aiscoutco.com";
  return [
    { url: base, lastModified: LAUNCH, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/how-it-works`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/case-study`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/discovery`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/build`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/support`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/industries`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/industries/seo-agencies`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/industries/real-estate`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/industries/professional-services`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/industries/healthcare`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/industries/ecommerce`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/ai-automation-consulting`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/small-business`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/business-process-automation`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/privacy-policy`, lastModified: LAUNCH, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms-of-service`, lastModified: LAUNCH, changeFrequency: "yearly", priority: 0.2 },
  ];
}
