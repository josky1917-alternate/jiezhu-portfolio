"use client";

import { useLanguage } from "../context/LanguageContext";
import { Globe, BookOpen, ExternalLink } from "lucide-react";
import Link from "next/link";

// Custom SVG icons for GitHub and LinkedIn
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedInSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <Link href="/" className="text-xl font-bold gradient-text">
          Jie Zhu
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          {/* Blog Link */}
          <a
            href="https://my-blog-gamma-opal.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
          >
            <BookOpen size={18} />
            <span className="link-underline">{t("Blog", "博客")}</span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/jie-zhu-3991111a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInSvg />
            </a>
            <a
              href="https://github.com/josky1917"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="https://scholar.google.com/citations?user=Nu5RCmcAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-400 transition-colors"
              aria-label="Google Scholar"
            >
              <BookOpen size={20} />
            </a>
            <a
              href="https://orcid.org/0000-0003-2759-4112"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-green-600 dark:text-slate-400 dark:hover:text-green-400 transition-colors"
              aria-label="ORCID"
            >
              <ExternalLink size={20} />
            </a>
          </div>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all"
          >
            <Globe size={16} />
            {language === "en" ? "中文" : "EN"}
          </button>
        </div>
      </nav>
    </header>
  );
}
