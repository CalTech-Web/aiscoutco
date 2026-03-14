import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Brandon Hopkins | AI Scout Co",
  description: "Work directly with Brandon Hopkins, founder and AI consultant. Expert in autonomous AI agents, workflow automation, and API integrations for businesses.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
