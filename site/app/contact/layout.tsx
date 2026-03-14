import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Discovery Call | AI Scout Co",
  description: "Book a free 30 to 60 minute AI discovery call with Brandon Hopkins. Find out exactly where automation can save your business time and money.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
