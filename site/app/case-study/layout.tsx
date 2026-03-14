import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Case Study: DiamondLinks",
  description: "How AI Scout Co automated DiamondLinks' reporting and proposals in 6 weeks, eliminating a $85,000+ salary and delivering 7 new capabilities.",
  alternates: {
    canonical: "https://aiscoutco.com/case-study",
  },
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
