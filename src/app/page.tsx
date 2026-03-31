"use client";

import { useLanguage } from "./context/LanguageContext";
import { MapPin, Mail, Briefcase, GraduationCap, Award, BookOpen, Code, Cpu, Brain, Zap, Download } from "lucide-react";

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
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Nu5RCmcAAAAJ&citation_for_view=Nu5RCmcAAAAJ:UeHWp8X0CEIC",
    },
    {
      title: "Gradient Boosting Decision Tree with LSTM for Investment Prediction",
      authors: "C Yu, F Liu, J Zhu, S Guo, Y Gao, Z Yang, M Liu, Q Xing",
      venue: "Asia-Pacific Conference on Communications Technology and Computer Engineering, 2025",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Nu5RCmcAAAAJ&citation_for_view=Nu5RCmcAAAAJ:IjCSPb-OGe4C",
    },
    {
      title: "Resistive Switching Characteristics of Resistive Random Access Memory Based on a BaxSr1-xTiO3 Thin Film Grown by a Hydrothermal Method",
      authors: "J Zhu, J He, J Lu, C Ma, X Tao, W Liu, Z Feng, L Chang, Y Li, Z Hu",
      venue: "IEEE Electron Device Letters 40 (9), 1411-1414, 2019",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Nu5RCmcAAAAJ&citation_for_view=Nu5RCmcAAAAJ:9yKSN-GCB0IC",
    },
    {
      title: "Negative Differential Resistance and Multilevel Resistive Switching in BaSrTiO3 Films",
      authors: "J He, J Zhu, C Ma, J Lu, Z Hu",
      venue: "Applied Physics Letters 115 (7), 2019",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Nu5RCmcAAAAJ&citation_for_view=Nu5RCmcAAAAJ:d1gkVwhDpl0C",
    },
    {
      title: "Modeling of the Temperature Profiles and Thermoelectric Effects in Phase Change Memory Cells",
      authors: "C Ma, J He, J Lu, J Zhu, Z Hu",
      venue: "Applied Sciences 8 (8), 1238, 2018",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Nu5RCmcAAAAJ&citation_for_view=Nu5RCmcAAAAJ:2osOgNQ5qMEC",
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
        <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500 dark:text-slate-500">
          <span className="flex items-center gap-1">
            <MapPin size={16} />
            {t("Boston, MA, United States", "美国马萨诸塞州波士顿")}
          </span>
          <a href="mailto:jiezwork@gmail.com" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
            <Mail size={16} />
            jiezwork@gmail.com
          </a>
          <a href="mailto:jiez19@vt.edu" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
            <Mail size={16} />
            jiez19@vt.edu
          </a>
        </div>
        
        {/* CV Download Button */}
        <div className="mt-6">
          <a
            href="/CV_JieZhu2026.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-gradient text-white font-medium"
          >
            <Download size={20} />
            {t("Download CV", "下载简历")}
          </a>
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
              "I am a Software Development Engineer (ML) at Amazon, passionate about advancing AI technologies and building scalable systems. My research focuses on improving the efficiency and effectiveness of large language models, with particular emphasis on inference optimization and test-time scaling strategies. I have extensive experience in developing enterprise-scale systems, from HCM platforms handling millions of users to voice AI infrastructure powering Alexa experiences.",
              "我是亚马逊的软件工程师（机器学习方向），热衷于推进人工智能技术和构建可扩展系统。我的研究专注于提高大语言模型的效率和效果，特别关注推理优化和测试时扩展策略。我在开发企业级系统方面拥有丰富经验，从处理数百万用户的HCM平台到支持Alexa体验的语音AI基础设施。"
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
          {/* Amazon SDE (ML) */}
          <div className="card-hover p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Software Development Engineer (ML)
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Amazon AGI Customization Service</p>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-500 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700">
                Aug 2025 - Present
              </span>
            </div>
            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 text-sm">
              <li>{t("Develop cutting-edge Large Language Models (LLMs) and Generative AI solutions", "开发前沿的大语言模型（LLM）和生成式AI解决方案")}</li>
              <li>{t("Responsible for Nova LLM training techniques and optimization", "负责Nova LLM训练技术和优化")}</li>
              <li>{t("Implement model customization capabilities through fine-tuning and distillation", "通过微调和蒸馏实现模型定制能力")}</li>
              <li>{t("Develop multimodal LLMs leveraging heterogeneous data sources", "利用异构数据源开发多模态大语言模型")}</li>
              <li>{t("Build efficient deployment platforms for large language models", "构建大语言模型的高效部署平台")}</li>
            </ul>
          </div>

          {/* Amazon SDE II */}
          <div className="card-hover p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Software Development Engineer II
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Amazon People Experience Technology</p>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-500 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700">
                Dec 2023 - Aug 2025
              </span>
            </div>
            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 text-sm">
              <li>{t("Developed new features for the world's largest HCM system handling million-scale hiring", "开发全球最大的HCM系统新功能，处理百万级招聘量")}</li>
              <li>{t("Designed new hiring model for M&A, reducing acquisition process from weeks to hours", "设计自动并购招聘模型，将收购流程从数周缩短至数小时")}</li>
              <li>{t("Optimized hiring document process, reducing paperwork by 80%", "优化招聘文档流程，减少80%文书工作")}</li>
              <li>{t("Improved contingent worker onboarding, reducing start-date delay rate by 20%", "改善临时工入职体验，降低20%开始日期延迟率")}</li>
              <li>{t("Designed GenAI advanced hiring automation solutions", "设计GenAI高级招聘自动化解决方案")}</li>
              <li>{t("Created GenAI staffing search tool and AI chatbot for HR knowledge base", "创建生成式AI人员搜索工具和HR知识库聊天机器人")}</li>
            </ul>
          </div>

          {/* Amazon SDE */}
          <div className="card-hover p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Software Development Engineer
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Alexa Audio Voice Experience Growth</p>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-500 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700">
                May 2022 - Dec 2023
              </span>
            </div>
            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 text-sm">
              <li>{t("Developed features on Alexa Audio Voice infrastructure (Java Spring, AWS)", "在Alexa语音基础设施开发新功能（Java Spring、AWS）")}</li>
              <li>{t("Alexa Audio Onboarding Experience: 30% increase in monthly user completion rate", "Alexa音频开箱体验：月用户完成率提升30%")}</li>
              <li>{t("Alexa Audio Content Injection: Integrated with Amazon Music, Spotify, Apple", "Alexa音频内容注入：实现与多个音乐提供商集成")}</li>
              <li>{t("Designed burst traffic solution for Alexa Routines, reducing peak load by 30% and latency by 50%", "设计Alexa例程突发流量解决方案，高峰负载降低30%，延迟降低50%")}</li>
              <li>{t("Participated in LLM integration with Alexa Music Voice Experience", "参与LLM与Alexa音乐语音体验的集成")}</li>
            </ul>
          </div>

          {/* Citrix */}
          <div className="card-hover p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Software Development Engineer
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Citrix Systems - Application Layering and Cloud Service</p>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-500 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700">
                Jan 2021 - May 2022
              </span>
            </div>
            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 text-sm">
              <li>{t("Developed Citrix Image Portability Service for migrating server images to cloud platforms (Azure, GCP, AWS)", "开发Citrix镜像可移植服务，支持迁移到云平台")}</li>
              <li>{t("Built backend services with C# .Net Core, Python, PowerShell, deployed to Kubernetes", "使用C# .Net Core、Python、PowerShell开发后端服务，部署到Kubernetes")}</li>
              <li>{t("Improved Jenkins pipeline parallelism, reducing deployment time by 50%+", "改进Jenkins流水线并行结构，部署时间降低50%以上")}</li>
              <li>{t("Enhanced Terraform solution for multi-region infrastructure automation", "增强Terraform解决方案，实现多地域基础设施自动化")}</li>
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
                  M.Eng. in Computer Engineering (Machine Learning)
                </h3>
                <p className="text-slate-600 dark:text-slate-400">Virginia Polytechnic Institute and State University</p>
                <p className="text-sm text-slate-500">GPA: 3.77/4.0 | Sep 2019 - Dec 2020</p>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-500">IEEE-Eta Kappa Nu (HKN) Member</span>
            </div>
          </div>

          <div className="card-hover p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  M.S. in Microelectronics and Solid-State Electronics
                </h3>
                <p className="text-slate-600 dark:text-slate-400">Huazhong University of Science and Technology</p>
                <p className="text-sm text-slate-500">GPA: 4.0/4.0 | Sep 2016 - Jun 2019</p>
              </div>
            </div>
          </div>

          <div className="card-hover p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  B.S. in Applied Physics
                </h3>
                <p className="text-slate-600 dark:text-slate-400">University of Science and Technology of China</p>
                <p className="text-sm text-slate-500">Sep 2012 - Jun 2016</p>
              </div>
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
            <a
              key={index}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block card-hover p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400">
                {pub.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{pub.authors}</p>
              <div className="flex items-center gap-2">
                <span className="tag px-3 py-1 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">
                  {pub.venue}
                </span>
                <span className="text-xs text-slate-400">{t("Click to view on Google Scholar", "点击查看Google Scholar")}</span>
              </div>
            </a>
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
            <p className="text-slate-600 dark:text-slate-400 text-sm">VirginiaTech Northern Virginia Center, Falls Church, VA</p>
          </div>
          <div className="card-hover p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <h3 className="font-semibold text-slate-900 dark:text-white">IEEE-Eta Kappa Nu (HKN)</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Honor Society Member, Beta Lambda Chapter</p>
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
