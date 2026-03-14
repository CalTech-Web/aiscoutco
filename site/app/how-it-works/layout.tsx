import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Process | AI Scout Co",
  description: "See how AI Scout Co takes you from discovery to deployed AI systems in 5 phases. Identify your automation opportunities, then watch them get built.",
  alternates: {
    canonical: "https://aiscoutco.com/how-it-works",
  },
};

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
