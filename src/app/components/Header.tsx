"use client";

import { useLanguage } from "../context/LanguageContext";
import { Globe, Github, Linkedin, BookOpen, ExternalLink } from "lucide-react";
import Link from "next/link";

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
            href="https://josky1917.github.io/my-blog"
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
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/josky1917"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
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
