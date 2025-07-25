# 📄 AI-Resume-Analyzer

AI-Resume-Analyzer is a modern web application that helps users upload and analyze resumes using AI-powered scoring and visualizations.  
Built with **React**, **TypeScript**, and **Vite**, it provides an intuitive interface and modular components to make resume analysis seamless and user-friendly.

---

## ✨ Features

- 📂 Upload PDF resumes easily
- 📊 AI-driven resume analysis and scoring
- 🧠 ATS (Applicant Tracking System) compatibility checks
- 📈 Visual score gauges, badges, and summaries
- 🧩 Clean and modular React component architecture
- ⚡ Fast build with Vite and TypeScript
- 🧰 Modern tooling: Docker, ESLint, and more

---

## 🛠️ Tech Stack

- React + TypeScript
- Vite
- React Router
- Custom components: Accordion, ScoreBadge, ScoreGauge, FileUploader, etc.
- Utility libraries for PDF processing and image handling
- Docker for containerization

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Abhay-0103/AI-Resume-Analyzer.git
cd AI-Resume-Analyzer
```

```
# Install dependencies
npm install
```

### Usage
# Start the development server
```
npm run dev
Then open your browser and go to:
```

### arduino
```
http://localhost:5173
```

### Docker
To build and run the app in Docker:
```
docker build -t ai-resume-analyzer .
docker run -p 5173:5173 ai-resume-analyzer
```

### Project Structure
```
app/
 ├── components/        # Reusable UI components (Navbar, ScoreGauge, etc.)
 ├── lib/               # Utility libraries (PDF/image handlers, etc.)
 ├── routes/            # App routes (home, upload, resume, etc.)
 ├── app.css            # Global styles
 └── root.tsx           # Root app component
constants/              # Static data/constants
public/                 # Static assets (favicon, pdf.worker, etc.)
vite.config.ts          # Vite configuration
package.json            # Project metadata & scripts
Dockerfile              # Docker configuration
```

### Contributing
Contributions and suggestions are welcome!
Feel free to open issues or pull requests.


Made with ❤️ by Abhay Singh
