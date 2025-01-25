import "./globals.css";

import { ThemeProvider } from "next-themes";

import Footer from "./components/Footer";
import Header from "./components/Header";

export const metadata = {
  author: "Yogesh D",
  description:
    "Welcome to my developer portfolio! Explore my projects, skills, and experience in frontend development, UI/UX design, and more.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Yogesh D",
    "Developer Portfolio",
    "Frontend Developer",
    "React Developer",
    "UI Engineer",
    "Web Developer",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Next.js",
  ],
  robots: "index, follow",
  title: "Yogesh D | Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-dvh">
        <ThemeProvider attribute="class">
          <Header />
          <div className="pt-14 px-4 md:px-0">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
