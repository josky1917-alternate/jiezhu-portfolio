import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Jie Zhu | Software & ML Engineer",
  description: "Jie Zhu - Software Engineer and Machine Learning Engineer at Amazon. Research interests in AI, LLMs, Inference Deployment, and Test-Time Optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 min-h-screen">
        <LanguageProvider>
          <Header />
          <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
