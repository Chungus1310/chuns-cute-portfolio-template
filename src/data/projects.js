const projects = [
    {
      id: "ai-pc-tools",
      title: "AI PC Tools",
      description: "Boost your productivity with this AI-powered Windows assistant. Automate tasks, manage files, and control your PC with voice commands.",
      longDescription: "AI PC Tools is a Windows application designed to streamline your PC experience. It offers advanced file management using AI-powered organization, voice command support for hands-free control, a built-in calendar and reminder system, and integrated web search. It leverages AI to enhance system management and boost productivity.",
      technologies: ["Python", "pywinauto", "SpeechRecognition", "pyttsx3", "requests", "beautifulsoup4"],
      imageUrl: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg", // Placeholder: Computer with code
      githubUrl: "https://github.com/Chungus1310/Ai-pc-tools",
      demoUrl: "",
      type: "featured"
    },
    {
      id: "arcs-mermaid-generator",
      title: "Arcs Mermaid Generator",
      description: "Generate Mermaid diagrams effortlessly using AI. Create flowcharts, sequence diagrams, and more with simple text prompts.",
      longDescription: "Arcs Mermaid Generator simplifies the creation of Mermaid diagrams. This cross-platform Electron app uses Google's Gemini AI to generate diagrams from text descriptions. It supports multiple diagram types (flowcharts, sequence diagrams, class diagrams, etc.), offers real-time preview, and allows exporting in various formats (PNG, SVG, markdown).",
      technologies: ["TypeScript", "Electron.js", "Google Gemini API", "Mermaid.js", "React", "Vite"],
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c", // Placeholder: Abstract network diagram
      githubUrl: "https://github.com/Chungus1310/ArcsMermainGenerator",
      demoUrl: "",
      type: "featured"
    },
    {
      id: "meeza-video-audio-converter",
      title: "Meeza's Better Video Audio Converter",
      description: "A versatile tool for converting video and audio files between various formats.",
      longDescription: "This Python-based converter provides a streamlined way to convert video and audio files. It likely supports a wide range of formats and offers options for customizing output settings (resolution, bitrate, etc.).",
      technologies: ["Python", "moviepy", "pydub"],
      imageUrl: "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg", // Placeholder: Sound waves
      githubUrl: "https://github.com/Chungus1310/Meeza-s-Better-Video-Audio-Converter",
      demoUrl: "",
      type: "featured"
    },
    {
      id: "machine-learning-visualiser-mlbb",
      title: "Machine Learning Visualiser (MLBB)",
      description: "Visualize machine learning concepts and data",
      longDescription: "This project uses Python libraries like Matplotlib and scikit-learn to create visualizations of machine learning algorithms and data. It may explore applications within the context of the game Mobile Legends: Bang Bang, such as analyzing player statistics or predicting match outcomes.",
      technologies: ["Python", "scikit-learn", "matplotlib", "pandas", "numpy", "seaborn"],
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5", // Placeholder: Data visualization
      githubUrl: "https://github.com/Chungus1310/machine-learning-visualiser-mlbb-",
      demoUrl: "",
      type: "featured"
    },
    {
      id: "research-builder",
      title: "ResearchBuilder",
      description: "Automate and streamline your research process with this Python tool.",
      longDescription: "ResearchBuilder is designed to assist researchers by automating various tasks. This could include web scraping for data collection, automated literature review, data analysis and visualization, or generating reports. Further details are needed to clarify its specific functionality.",
      technologies: ["Python", "selenium", "requests", "beautifulsoup4"],
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40", // Placeholder: Research papers and laptop
      githubUrl: "https://github.com/Chungus1310/ResearchBuilder",
      demoUrl: "",
      type: "featured"
    },
    {
      id: "waifu-with-brain",
      title: "Waifu with Brain",
      description: "An AI chat companion that learns from your documents and provides context-aware responses.",
      longDescription: "Waifu with Brain is an AI chat companion powered by Google's Gemini API. It features a modern dark mode UI and can learn from documents (PDF, DOCX, TXT), allowing for a more personalized and informed chat experience. The AI provides context-aware responses based on the information it has learned.",
      technologies: ["Python", "Google Gemini API", "PyMuPDF", "python-docx", "streamlit"],
      imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8", // Placeholder: Chat interface
      githubUrl: "https://github.com/Chungus1310/Waifu-with-brain",
      demoUrl: "",
      type: "featured"
    },
      {
      id: "run-its-our-ai-overlords-algorithms",
      title: "Run Its Our AI Overlords Algorithms",
      description: "A comprehensive collection of Machine Learning and Deep Learning algorithms implemented in Python.",
      longDescription: "This repository serves as a learning resource and practical guide to implementing various Machine Learning and Deep Learning algorithms. It includes Python scripts and Jupyter notebooks, covering everything from basic regression and classification to advanced neural networks and deep learning techniques. It features practical examples with the Iris dataset and NLP preprocessing.",
      technologies: ["Python", "TensorFlow", "NumPy"],
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3", // Placeholder: Neural network
      githubUrl: "https://github.com/Chungus1310/Run-Its-Our-AI-Overlords-Algorithms",
      demoUrl: "",
      type: "other"
    },
    {
      id: "ml-playground",
      title: "ML Playground",
      description: "Experiment with machine learning models interactively using this Streamlit app.",
      longDescription: "ML Playground is an interactive web application built with Streamlit, designed for hands-on experimentation with various machine learning models. It provides ready-to-use datasets, customizable preprocessing options, parameter tuning, interactive visualizations, and model performance metrics. It also supports cross-validation and exporting trained models.",
      technologies: ["Python", "Streamlit", "scikit-learn", "pandas", "numpy", "matplotlib", "plotly"],
      imageUrl: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9", // Placeholder: Data analysis dashboard
      githubUrl: "https://github.com/Chungus1310/ML-Playground",
      demoUrl: "",
      type: "other"
    },
    {
      id: "easy-gui",
      title: "Easy GUI",
      description: "Create stylish and user-friendly GUIs in Python with ease.",
      longDescription: "Easy GUI simplifies the creation of graphical user interfaces in Python using Tkinter and ttkbootstrap. It provides pre-built themes and custom widgets, offering a simple API for rapid development. The library includes sample applications like a calculator, system info tool, and text editor, and supports dynamic UI updates and theme customization.",
      technologies: ["Python", "Tkinter", "ttkbootstrap"],
      imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
      githubUrl: "https://github.com/Chungus1310/Easy-GUI",
      demoUrl: "",
      type: "other"
    },
       {
      id: "arcs-food-app",
      title: "Arcs Food App",
      description: "Currently under development.",
      longDescription: "Further details are needed to clarify its specific functionality.",
      technologies: [],
      imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      githubUrl: "https://github.com/Chungus1310/arcs-food-app",
      demoUrl: "",
      type: "other"
    },
        {
      id: "chun-adfree-tube",
      title: "Chun Adfree Tube",
      description: "Currently under development.",
      longDescription: "Further details are needed to clarify its specific functionality.",
      technologies: ["Python", "Flask", "youtube_dl"],
      imageUrl: "https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg", // Placeholder: Video player
      githubUrl: "https://github.com/Chungus1310/Chun-Adfree-Tube",
      demoUrl: "",
      type: "other"
    },
      {
      id: "just-another-song-downloader",
      title: "Just Another Song Downloader",
      description: "Currently under development.",
      longDescription: "Further details are needed to clarify its specific functionality.",
      technologies: ["Python", "youtube_dl", "Flask", "requests"],
      imageUrl: "https://images.pexels.com/photos/2108709/pexels-photo-2108709.jpeg", // Placeholder: Music notes
      githubUrl: "https://github.com/Chungus1310/Just-another-song-downloader",
      demoUrl: "",
      type: "other"
    },
  ];
  
  export default projects;