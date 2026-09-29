export const portfolioData = {
  personal: {
    name: "SHARAU",
    title: "AI / ML ENGINEER",
    location: "Pune, India",
    timeZone: "Asia/Kolkata",
    edition: "EDITION 01 // 2026",
    heroHeadline: "Building Intelligent Systems with Code & Creativity.",
    heroSubheadline: "MCA Data Science student building AI/ML, Generative AI, automation and intelligent applications that solve real-world problems.",
    statusCompact: "VU Pune · MCA '27",
    statusSub: "BCA · MIT-WPU '25",
    profileSectionNumber: "01 — PROFILE",
    profileHeading: "Building Intelligent Systems for Real-World Problems",
    profileBody: [
      "I’m an MCA Data Science student focused on building practical AI/ML solutions across Generative AI, machine learning, intelligent automation, and Graph ML.",
      "My experience spans end-to-end ML pipelines, predictive analytics, NLP, recommendation systems, AI agents, RAG workflows, and data-driven applications. I enjoy taking a problem from data and experimentation through to a usable, deployable solution.",
      "My technical toolkit includes Python, SQL, LangChain, FastAPI, n8n, Power Automate, PyTorch, TensorFlow, Streamlit, and AWS."
    ],
    currentlyExploring: [
      "AI/ML Engineering",
      "Generative AI",
      "AI Agents",
      "Data Science",
      "Intelligent Automation"
    ],
    socials: {
      github: "https://github.com/sharau09",
      linkedin: "https://www.linkedin.com/in/sharau-jagtap/",
      email: "sharayujagtapo9@gmail.com",
    },
    images: {
      hero: "/sharau-photo.png",
      manifesto: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
    }
  },

  whatIDo: [
    {
      num: "01",
      title: "MACHINE LEARNING",
      subtitle: "Predictive Modeling & Statistical Systems",
      description: "Building automated end-to-end ML pipelines, predictive analytics models, feature engineering pipelines, and graph neural networks tuned for measurable accuracy and real-world deployment.",
      capabilities: [
        "End-to-End Pipeline Automation & Cross-Validation",
        "Predictive Modeling & Regression Analysis (R² = 0.84)",
        "Multi-Class Classification & Categorization (82% Accuracy)",
        "Feature Engineering & Hyperparameter Optimization",
        "Graph ML & Relational Topology Analysis (PaySim, NetworkX)"
      ],
      tagline: "High-accuracy models solving concrete domain problems."
    },
    {
      num: "02",
      title: "GENERATIVE AI",
      subtitle: "Agentic Systems & Retrieval-Augmented Generation",
      description: "Developing autonomous reasoning agents, production LangChain workflows, and domain-grounded RAG architectures that intelligently query knowledge bases and auto-resolve operational workflows.",
      capabilities: [
        "RAG Workflows over Internal Technical Documentation",
        "Autonomous AI Agents with Webhook Actions",
        "LangChain Framework Integration & Prompt Engineering",
        "NLP & Semantic Search Pipelines",
        "Self-Correcting Tool Calling & Multi-Agent Logic"
      ],
      tagline: "Translating cognitive AI capabilities into active operational assistants."
    },
    {
      num: "03",
      title: "AI AUTOMATION",
      subtitle: "Intelligent Workflows & Backend Services",
      description: "Bridging intelligent algorithms into deployable systems. Connecting APIs, webhooks, FastAPI endpoints, and workflow orchestrators like n8n and Power Automate to resolve tasks without friction.",
      capabilities: [
        "Autonomous Ticket Resolution (60%+ Deflection) & Escalation",
        "n8n & Power Automate Workflow Automation",
        "FastAPI & Flask REST Service Architecture",
        "Webhook Trigger & Event Mesh Integration",
        "Interactive Interfaces with Streamlit & Power BI"
      ],
      tagline: "Self-operating pipelines eliminating repetitive operational overhead."
    }
  ],

  projects: [
    {
      id: "nexus-ai",
      figure: "FIG. 01",
      title: "NEXUS AI",
      subtitle: "Autonomous AI Operations & Agentic Intelligence Platform",
      summary: "An autonomous AI operations platform integrating real-time microservice telemetry, diagnostic RAG over post-mortem knowledge bases, and multi-agent remediation workflows.",
      technologies: ["Python", "FastAPI", "RAG", "AI Agents", "LangChain"],
      category: "AIOps & Foundation Agents",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85",
      github: "https://github.com/sharau09/NEXUS-AI",
      demo: "https://github.com/sharau09/NEXUS-AI",
      overview: "NEXUS AI provides an autonomous control plane for distributed cloud environments: ingesting telemetry streams, diagnosing anomalous root causes via semantic retrieval, and orchestrating autonomous remediation agents with human oversight.",
      architecture: [
        "FastAPI Microservice Core: High-throughput asynchronous backend streaming operational telemetry.",
        "Diagnostic RAG Engine: Semantic retrieval querying system documentation, post-mortems, and runbooks.",
        "Remediation Mesh: Agentic action triggers automating incident triage and routing."
      ],
      metrics: [
        { label: "Core Architecture", value: "FastAPI + RAG" },
        { label: "Automation", value: "Multi-Agent" },
        { label: "Repository", value: "sharau09/NEXUS-AI" }
      ]
    },
    {
      id: "ai-enterprise-intelligence",
      figure: "FIG. 02",
      title: "AI Enterprise Intelligence Platform",
      subtitle: "Predictive Trends, KPI Explanations & LLM Insights",
      summary: "Developed an AI-powered business intelligence platform integrating forecasting, anomaly detection, NLP, and LLM-driven insights to predict business trends, explain KPIs, and recommend data-driven actions.",
      technologies: ["Python", "SQL", "Power BI", "Machine Learning", "Streamlit"],
      category: "Machine Learning & Analytics",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
      github: "https://github.com/sharau09/AI_Enterprise_Intelligence_Platform",
      demo: "https://github.com/sharau09/AI_Enterprise_Intelligence_Platform",
      overview: "Developed an AI-powered business intelligence platform integrating forecasting, anomaly detection, NLP, and LLM-driven insights to predict business trends, explain KPIs, and recommend data-driven actions.",
      architecture: [
        "SQL Data Layer: Scalable relational stores orchestrating multi-attribute business datasets.",
        "Forecasting & Anomaly Core: Machine learning algorithms detecting behavioral shifts and projecting demand trends.",
        "Presentation Mesh: Combined Power BI visualizations and Streamlit interfaces delivering executive telemetry."
      ],
      metrics: [
        { label: "Focus", value: "Forecasting & Anomalies" },
        { label: "Insights", value: "LLM-Driven KPIs" },
        { label: "Repository", value: "sharau09/AI_Enterprise" }
      ]
    },
    {
      id: "graph-shield-ai",
      figure: "FIG. 03",
      title: "GraphShieldAI",
      subtitle: "Graph ML Fraud Detection & Network Risk Scoring",
      summary: "Built a graph-based fraud detection pipeline using PaySim with 100K+ transactions, generating customer risk scores and detecting suspicious fraud rings through network topology analysis.",
      technologies: ["Python", "NetworkX", "PyTorch Geometric", "Graph ML", "Streamlit"],
      category: "Graph Machine Learning",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=85",
      github: "https://github.com/sharau09/GraphShieldAI",
      demo: "https://github.com/sharau09/GraphShieldAI",
      overview: "GraphShieldAI frames financial ledgers as heterogeneous graphs to unmask collusive fraud rings and synthetic identity schemes that evade traditional tabular scoring.",
      architecture: [
        "Graph Construction: NetworkX dynamic assembler transforming 100K+ PaySim records into relational nodes and edges.",
        "Representation Learning: PyTorch Geometric GCN/GAT layers embedding topological context.",
        "Risk Telemetry: Interactive Streamlit interface computing instant account risk metrics and graph visualizations."
      ],
      metrics: [
        { label: "Data Scope", value: "100K+ PaySim Txns" },
        { label: "Framework", value: "PyTorch Geometric" },
        { label: "Repository", value: "sharau09/GraphShieldAI" }
      ]
    },
    {
      id: "mental-health-ai",
      figure: "FIG. 04",
      title: "Mental Health AI",
      subtitle: "Empathetic Natural Language Stress Classification",
      summary: "Built an AI-powered risk prediction system using NLP, TF-IDF, Scikit-learn and behavioral data, enabling real-time stress classification through Streamlit.",
      technologies: ["Python", "NLP", "Scikit-learn", "TF-IDF", "Streamlit"],
      category: "Natural Language Processing",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=85",
      github: "https://github.com/sharau09/mental-health-ai",
      demo: "https://github.com/sharau09/mental-health-ai",
      overview: "An ethical clinical NLP system built to identify linguistic markers of stress, anxiety, and distress across conversational text, enabling timely supportive intervention.",
      architecture: [
        "Text Preprocessing: TF-IDF vectorization with distress lexicon weighting and sentiment scoring.",
        "Scikit-learn Classifier: Tuned classification models evaluated for high sensitivity.",
        "Streamlit Dashboard: Real-time user interface providing instant stress risk stratification."
      ],
      metrics: [
        { label: "Model", value: "Scikit-learn & TF-IDF" },
        { label: "Latency", value: "Real-time Streamlit" },
        { label: "Repository", value: "sharau09/mental-health-ai" }
      ]
    },
    {
      id: "ai-pothole-detection",
      figure: "FIG. 05",
      title: "AI Pothole Detection System",
      subtitle: "Computer Vision & Deep Learning Road Hazard Detection",
      summary: "A real-time computer vision system built to detect and classify road hazards and potholes from image and video streams, assisting municipal infrastructure maintenance.",
      technologies: ["Python", "Computer Vision", "OpenCV", "Deep Learning", "PyTorch"],
      category: "Computer Vision",
      image: "https://images.unsplash.com/photo-1515260268569-9271009adfdb?auto=format&fit=crop&w=1200&q=85",
      github: "https://github.com/sharau09/AI-Pothole-Detection-System",
      demo: "https://github.com/sharau09/AI-Pothole-Detection-System",
      overview: "Road degradation causes severe vehicular damage and transit accidents. This deep learning system automates road inspection by analyzing video feeds and flagging road damage with spatial coordinates.",
      architecture: [
        "Vision Preprocessing: OpenCV frame extraction, contrast normalization, and region-of-interest masking.",
        "Deep Neural Detector: Convolutional architecture trained to accurately segment and classify pothole contours.",
        "Reporting Pipeline: Automated logging of detected hazards with severity ratings and timestamps."
      ],
      metrics: [
        { label: "Domain", value: "Computer Vision" },
        { label: "Processing", value: "OpenCV + PyTorch" },
        { label: "Repository", value: "sharau09/AI-Pothole-Detection-System" }
      ]
    },
    {
      id: "operational-performance-analytics",
      figure: "FIG. 06",
      title: "Operational Performance Analytics Dashboard",
      subtitle: "KPI Telemetry & Process Efficiency Intelligence",
      summary: "An enterprise analytics dashboard built to monitor key operational metrics, identify process bottlenecks, and empower decision-makers with real-time interactive business intelligence.",
      technologies: ["Python", "Power BI", "SQL", "DAX", "Data Analytics"],
      category: "Business Intelligence & Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
      github: "https://github.com/sharau09/Operational-Performance-Analytics-Dashboard",
      demo: "https://github.com/sharau09/Operational-Performance-Analytics-Dashboard",
      overview: "Provides end-to-end visibility into operational efficiency: synthesizing disparate data streams into unified DAX measures, automated KPI scorecards, and interactive drill-downs.",
      architecture: [
        "Data Integration: SQL pipelines harmonizing transactional data across departmental silos.",
        "Analytical Modeling: Custom DAX calculations for throughput, cycle time, and variance.",
        "Power BI Visuals: Interactive executive reports with dynamic filtering and trend projections."
      ],
      metrics: [
        { label: "Interface", value: "Power BI + DAX" },
        { label: "Data Source", value: "Relational SQL" },
        { label: "Repository", value: "sharau09/Operational-BI" }
      ]
    },
    {
      id: "web-scraping-project",
      figure: "FIG. 07",
      title: "Web Scraping Project",
      subtitle: "Automated Data Extraction & Ingestion Pipeline",
      summary: "An automated data extraction framework designed to scrape, clean, and structure high-volume web datasets with rate-limiting, proxy rotation, and schema validation.",
      technologies: ["Python", "BeautifulSoup", "Selenium", "Requests", "Data Pipeline"],
      category: "Data Engineering",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=85",
      github: "https://github.com/sharau09/Web_Scraping_Project",
      demo: "https://github.com/sharau09/Web_Scraping_Project",
      overview: "Web Scraping Project provides automated data collection for analytics pipelines: handling dynamic JavaScript rendering, parsing nested schemas, and formatting raw text into analytical tabular datasets.",
      architecture: [
        "Extraction Engine: Python Requests and Selenium handling static and dynamic webpage targets.",
        "Parser Core: BeautifulSoup parsing DOM trees and extracting structured entity records.",
        "Export Layer: Automated cleaning, validation, and export to CSV/JSON/SQL formats."
      ],
      metrics: [
        { label: "Tools", value: "BS4 + Selenium" },
        { label: "Target", value: "Dynamic Web Data" },
        { label: "Repository", value: "sharau09/Web_Scraping" }
      ]
    }
  ],

  skills: [
    {
      category: "PROGRAMMING & DATA",
      description: "Core programming languages and analytical libraries for data manipulation and modeling.",
      items: [
        { name: "Python" },
        { name: "SQL" },
        { name: "Pandas" },
        { name: "NumPy" }
      ]
    },
    {
      category: "MACHINE LEARNING",
      description: "Supervised & unsupervised modeling, deep learning architectures, and feature engineering.",
      items: [
        { name: "Machine Learning" },
        { name: "Feature Engineering" },
        { name: "Predictive Analytics" },
        { name: "TensorFlow" },
        { name: "PyTorch" }
      ]
    },
    {
      category: "GENERATIVE AI",
      description: "Large language models, prompt orchestration, and autonomous agent frameworks.",
      items: [
        { name: "Generative AI" },
        { name: "LangChain" },
        { name: "Prompt Engineering" },
        { name: "AI Agents" }
      ]
    },
    {
      category: "AI ENGINEERING",
      description: "High-performance API gateways, microservices, containerization, and cloud infrastructure.",
      items: [
        { name: "FastAPI" },
        { name: "REST APIs" },
        { name: "Flask" },
        { name: "Docker" },
        { name: "AWS" }
      ]
    },
    {
      category: "AUTOMATION",
      description: "End-to-end workflow automation engines and enterprise webhook meshes.",
      items: [
        { name: "n8n" },
        { name: "Power Automate" },
        { name: "Zapier" },
        { name: "Make (Integromat)" },
        { name: "Webhooks" }
      ]
    },
    {
      category: "TOOLS",
      description: "Version control and AI-assisted development environments.",
      items: [
        { name: "Git" },
        { name: "Cursor AI" }
      ]
    }
  ],

  experience: [
    {
      role: "Machine Learning Intern",
      company: "Cognifyz Technologies",
      period: "Sep 2025 – Mar 2026",
      type: "Part-time, Remote",
      overview: "Spearheaded end-to-end machine learning pipelines covering automated data preprocessing, predictive modeling, and personalized recommendation systems.",
      achievements: [
        "Automated an end-to-end ML pipeline covering data preprocessing, feature engineering and cross-validation.",
        "Built a regression model with R² = 0.84 on 12,000+ records.",
        "Built a multi-class cuisine classifier achieving 82% accuracy.",
        "Built a content-based recommendation system using cuisine and price-based curation.",
        "Reduced manual recommendation effort by 60%."
      ]
    }
  ],

  education: [
    {
      degree: "MCA — Master of Computer Applications",
      institution: "Vishwakarma University, Pune",
      period: "2025–2027 · Ongoing",
      shortFormat: "MCA '27",
      status: "Ongoing"
    },
    {
      degree: "BCA — Bachelor of Computer Applications",
      institution: "MIT World Peace University, Pune",
      period: "2022–2025",
      shortFormat: "BCA '25",
      status: "Completed"
    }
  ],

  certifications: [
    {
      title: "AI & Machine Learning Data Science Bootcamp",
      organization: "Udemy",
      verificationUrl: "https://www.udemy.com/certificate/UC-a0eb1ca4-6b80-4803-afa8-af7a350ad0e3/",
      description: "Comprehensive bootcamp covering end-to-end Machine Learning, Deep Learning, Statistical Modeling, and practical Data Science pipelines."
    },
    {
      title: "Microsoft Azure",
      organization: "Microsoft / LinkedIn",
      verificationUrl: "https://www.linkedin.com/in/sharau-jagtap/overlay/Certifications/43304469/treasury/?profileId=ACoAAD08CaUBHo1qcNxGPWyflHohTKM9otJWcfA",
      description: "Cloud computing fundamentals, Azure infrastructure, cloud storage, and AI solution deployment on Microsoft Azure."
    },
    {
      title: "Generative AI",
      organization: "LinkedIn Learning / Verified Treasury",
      verificationUrl: "https://www.linkedin.com/in/sharau-jagtap/overlay/Certifications/43618465/treasury/?profileId=ACoAAD08CaUBHo1qcNxGPWyflHohTKM9otJWcfA",
      description: "Foundation models, LLM architectures, prompt engineering strategies, and generative AI application development."
    }
  ],

  whyBuildWithMe: [
    {
      number: "01",
      title: "CURIOUS BY DEFAULT",
      subtitle: "Relentless Algorithmic Exploration",
      description: "Technology does not stand still, and neither do I. Whether dissecting generative models, optimizing vector retrieval, or exploring graph neural networks, I bring relentless curiosity and rigorous experimentation to every technical challenge."
    },
    {
      number: "02",
      title: "BUILD FOR REAL PROBLEMS",
      subtitle: "Measurable Impact Over Vanity Claims",
      description: "An algorithm is only as valuable as the real-world problem it solves. I focus on measurable outcomes—delivering regression models with verified R² metrics, classification pipelines that automate manual effort, and self-resolving support agents."
    },
    {
      number: "03",
      title: "FROM IDEA TO IMPLEMENTATION",
      subtitle: "End-to-End Delivery",
      description: "I enjoy taking a challenge from raw data and exploratory analysis through to a usable, deployable system—architecting APIs with FastAPI, automating webhooks with n8n, and building interactive frontends with Streamlit."
    }
  ]
};
