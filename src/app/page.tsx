"use client";

import { useLanguage } from "./context/LanguageContext";
import { MapPin, Mail, Briefcase, GraduationCap, Award, BookOpen, Code, Cpu, Brain, Zap } from "lucide-react";

export default function HomePage() {
  const { t } = useLanguage();

  const researchAreas = [
    { icon: Brain, label: t("Artificial Intelligence", "人工智能"), color: "from-pink-500 to-rose-500" },
    { icon: Cpu, label: t("Machine Learning", "机器学习"), color: "from-blue-500 to-cyan-500" },
    { icon: Code, label: t("Large Language Models", "大语言模型"), color: "from-purple-500 to-violet-500" },
    { icon: Zap, label: t("Inference Deployment", "推理部署"), color: "from-amber-500 to-orange-500" },
    { icon: Award, label: t("Test-Time Optimization", "测试时优化"), color: "from-emerald-500 to-teal-500" },
  ];

  const publications = [
    {
      title: "Plan and Budget: Effective and Efficient Test-Time Scaling on Large Language Model Reasoning",
      authors: "J Lin, X Zeng, J Zhu, S Wang, J Shun, J Wu, D Zhou",
      venue: "ICLR 2026",
      link: "#",
    },
    {
      title: "HALLUGUARD: Demystifying Data-driven and Model-driven Hallucination in Large Vision-Language Models",
      authors: "J Zhu et al.",
      venue: "CVPR 2026",
      link: "#",
    },
    {
      title: "Gradient Boosting Decision Tree with LSTM for Investment Prediction",
      authors: "C Yu, F Liu, J Zhu, S Guo, Y Gao, Z Yang, M Liu, Q Xing",
      venue: "Asia-Pacific Conference on Communications Technology and Computer Engineering, 2025",
      link: "#",
    },
    {
      title: "Negative Differential Resistance and Multilevel Resistive Switching in BaSrTiO3 Films",
      authors: "J He, J Zhu, C Ma, J Lu, Z Hu",
      venue: "Applied Physics Letters 115 (7), 2019",
      link: "#",
    },
    {
      title: "Resistive Switching Characteristics of Resistive Random Access Memory Based on a BaxSr1-xTiO3 Thin Film",
      authors: "J Zhu, J He, J Lu, C Ma, X Tao, W Liu, Z Feng, L Chang, Y Li, Z Hu",
      venue: "IEEE Electron Device Letters 40 (9), 1411-1414, 2019",
      link: "#",
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <div className="inline-block p-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6">
          <div className="w-32 h-32 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-4xl font-bold text-slate-500">
            JZ
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-4 gradient-text">Jie Zhu</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-2">
          {t("Software Engineer & Machine Learning Engineer", "软件工程师 & 机器学习工程师")}
        </p>
        <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-6">
          @ Amazon
        </p>
        <div className="flex justify-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span className="flex items-center gap-1">
            <MapPin size={16} />
            {t("United States", "美国")}
          </span>
          <span className="flex items-center gap-1">
            <Mail size={16} />
            jie.zhu@example.com
          </span>
        </div>
      </section>

      {/* About Section */}
      <section className="gradient-border">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
              <Briefcase size={18} />
            </span>
            {t("About Me", "关于我")}
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {t(
              "I am a Software Engineer and Machine Learning Engineer at Amazon. I am passionate about advancing AI technologies and building scalable systems. My research focuses on improving the efficiency and effectiveness of large language models, with particular emphasis on inference optimization and test-time scaling strategies.",
              "我是亚马逊的软件工程师和机器学习工程师。我热衷于推进人工智能技术和构建可扩展系统。我的研究专注于提高大语言模型的效率和效果，特别关注推理优化和测试时扩展策略。"
            )}
          </p>
        </div>
      </section>

      {/* Research Interests */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
            <Brain size={18} />
          </span>
          {t("Research Interests", "研究方向")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="card-hover p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center"
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${area.color} flex items-center justify-center text-white`}>
                <area.icon size={24} />
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{area.label}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* Experience Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white">
            <Briefcase size={18} />
          </span>
          {t("Work Experience", "工作经历")}
        </h2>
        <div className="space-y-6">
          <div className="card-hover p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {t("Software Engineer & Machine Learning Engineer", "软件工程师 & 机器学习工程师")}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Amazon</p>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-500 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700">
                {t("Present", "至今")}
              </span>
            </div>
            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
              <li>{t("Design and development of key features for Amazon SageMaker Inference", "Amazon SageMaker 推理的关键功能设计与开发")}</li>
              <li>{t("Reinforcement fine-tuning for Amazon Nova models", "Amazon Nova 模型的强化微调")}</li>
              <li>{t("Large language model optimization and deployment", "大语言模型优化与部署")}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white">
            <GraduationCap size={18} />
          </span>
          {t("Education", "教育背景")}
        </h2>
        <div className="space-y-4">
          <div className="card-hover p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {t("Ph.D. / Master's in Computer Engineering", "计算机工程 博士/硕士")}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">Virginia Tech</p>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-500">IEEE-Eta Kappa Nu (HKN) Member</span>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Publications Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white">
            <BookOpen size={18} />
          </span>
          {t("Publications", "发表论文")}
        </h2>
        <div className="space-y-4">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="card-hover p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {pub.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{pub.authors}</p>
              <div className="flex items-center gap-2">
                <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">
                  {pub.venue}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a
            href="https://scholar.google.com/citations?user=Nu5RCmcAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-gradient text-white font-medium"
          >
            <BookOpen size={18} />
            {t("View All Publications on Google Scholar", "在 Google Scholar 查看所有论文")}
          </a>
        </div>
      </section>

      {/* Honors & Awards */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center text-white">
            <Award size={18} />
          </span>
          {t("Honors & Awards", "荣誉奖项")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card-hover p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <h3 className="font-semibold text-slate-900 dark:text-white">Student Spotlight</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Sanghani Center for AI & Data Analytics</p>
          </div>
          <div className="card-hover p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <h3 className="font-semibold text-slate-900 dark:text-white">IEEE-Eta Kappa Nu (HKN)</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Honor Society Member</p>
          </div>
        </div>
      </section>

      {/* Blog CTA */}
      <section className="gradient-border">
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{t("Visit My Blog", "访问我的博客")}</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            {t(
              "Check out my blog for more insights on AI, machine learning, and software engineering.",
              "查看我的博客，了解更多关于人工智能、机器学习和软件工程的见解。"
            )}
          </p>
          <a
            href="https://josky1917.github.io/my-blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full btn-gradient text-white font-semibold text-lg"
          >
            <BookOpen size={20} />
            {t("Read My Blog", "阅读博客")}
          </a>
        </div>
      </section>
    </div>
  );
}
