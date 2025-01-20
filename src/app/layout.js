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
      <link
        href="/favicon-96x96.png"
        rel="icon"
        sizes="96x96"
        type="image/png"
      />
      <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <link
        href="/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <meta content="YD portfolio" name="apple-mobile-web-app-title" />
      <link href="/site.webmanifest" rel="manifest" />
      <body className="h-dvh">
        <ThemeProvider attribute="class">
          <Header />
          <div className="pt-14">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
