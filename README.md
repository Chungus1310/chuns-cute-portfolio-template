# Chun's Cute Portfolio Template ✨

A modern, pink-themed portfolio template built with React and Tailwind CSS, perfect for developers showcasing their work with style! 🌸

## Take a Peek! 

### Live Demo Video
Check out our comprehensive demo on YouTube: 
[Portfolio Template Walkthrough](https://www.youtube.com/watch?v=3MFW3nE8WpI)

## Features 

* **Pretty & Customizable**: Soft, pink aesthetic you can personalize 🎨
* **Responsive Design**: Looks great on all devices 📱
* **Smooth Animations**: Powered by Framer Motion ✨
* **Project Showcase**: Beautiful cards and detailed pages 🌟
* **Skills Visualization**: Attractive skills display 📊
* **Decorative Effects**: Snowfall and bubble animations ❄️
* **Contact Section**: Easy collaboration 🤝
* **Modern Design**: Elegant glass morphism elements 🌈

## Project Structure

```
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── AboutPage.js
│   │   ├── ProjectCard.js
│   │   └── ... 
│   ├── data/
│   │   └── projects.js
│   └── ...
├── backend/
│   ├── main.py
│   └── requirements.txt
└── tailwind.config.js
```

## Getting Started 

### Requirements

* Node.js (v14+)
* npm or yarn
* Python 3.8+
* Uvicorn

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Chungus1310/chuns-cute-portfolio-template.git
   cd chuns-cute-portfolio-template
   ```

2. Set up Frontend:
   ```bash
   npm install
   ```

3. Set up Backend:
   ```bash
   python -m venv venv
   source venv/bin/activate
   pip install -r backend/requirements.txt
   ```

4. Start Backend Server:
   ```bash
   cd backend
   uvicorn main:app --reload
   ```

5. Start Frontend:
   ```bash
   npm start
   ```

## Customization

### Personal Details
Edit `AboutPage.js` to update:
* Profile picture
* Bio
* Skills
* Contact info

### Projects
Modify `projects.js`:

```javascript
{
  id: "project-id",
  title: "Project Name",
  description: "Short description",
  technologies: ["Tech1", "Tech2"],
  imageUrl: "image-url",
  githubUrl: "github-repo-url"
}
```

## Technologies

* React
* Tailwind CSS
* FastAPI
* Uvicorn
* Framer Motion

## Contributing

1. Fork the repo
2. Create a feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

## License

MIT License

## Contact

Created by [Chun](https://github.com/Chungus1310)

---

Enjoy the template! ⭐
