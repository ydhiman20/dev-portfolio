import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "next-themes";
export const metadata = {
  title: "Yogesh D | Developer Portfolio",
  description:
    "Welcome to my developer portfolio! Explore my projects, skills, and experience in frontend development, UI/UX design, and more.",
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
  icons: {
    icon: "/favicon.ico",
  },
  author: "Yogesh D",
  robots: "index, follow",
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
