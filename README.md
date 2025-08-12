# AI Research Paper Analysis Tool

A powerful web application that uses AI to analyze research papers, extract key insights, and provide interactive Q&A capabilities.

## 🚀 Features

- **PDF Upload & Analysis**: Upload research papers in PDF format for AI-powered analysis
- **Intelligent Extraction**: Automatically extracts title, abstract, problem statement, methodology, and key findings
- **Interactive Chat**: Ask questions about the paper and get intelligent responses
- **User Authentication**: Secure login system with user data collection
- **Responsive Design**: Beautiful, modern interface that works on all devices
- **Real-time Processing**: Fast AI analysis with visual feedback

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **PDF Processing**: PDF.js
- **AI Integration**: Google Gemini AI
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (version 16 or higher)
- npm or yarn package manager
- Google Gemini AI API keys

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/kapayashwanth/airesearchpaper.git
cd airesearchpaper
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add your API keys:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## 🚀 Usage

1. **Login**: Enter your name, email, and password to access the application
2. **Upload PDF**: Drag and drop or select a research paper in PDF format
3. **AI Analysis**: The system will automatically extract and analyze key information
4. **Review Insights**: Browse through extracted sections like abstract, methodology, findings
5. **Ask Questions**: Use the chat interface to ask specific questions about the paper
6. **Interactive Q&A**: Get detailed responses based on the paper's content

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ChatInterface.tsx
│   ├── ExtractedInfo.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── LoginForm.tsx
│   └── PDFUploader.tsx
├── services/           # API services
│   └── geminiService.ts
├── types.ts           # TypeScript type definitions
├── App.tsx           # Main application component
├── main.tsx         # Application entry point
└── index.css       # Global styles
```

## 🔑 API Configuration

The application uses Google Gemini AI for document analysis and chat functionality. You'll need to:

1. Get API keys from Google AI Studio
2. Configure the keys in the `geminiService.ts` file
3. Set up proper rate limiting and error handling

## 🌐 Deployment

The application is deployed on Netlify and can be accessed at:
[https://airesearchpaper.netlify.app](https://airesearchpaper.netlify.app)

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**KAPA YASHWANTH**
- Department of Computer Science and Engineering
- Amrita Vishwa Vidyapeetham, Nagercoil Campus
- Email: [Kapayashwanth8@gmail.com](mailto:Kapayashwanth8@gmail.com)
- LinkedIn: [linkedin.com/in/yashwanth-kapa](https://www.linkedin.com/in/yashwanth-kapa)

## 🙏 Acknowledgments

- Google Gemini AI for powerful document analysis capabilities
- React and TypeScript communities for excellent documentation
- Tailwind CSS for beautiful styling utilities
- Framer Motion for smooth animations

## 📞 Support

If you have any questions or need support, please reach out:
- Email: Kapayashwanth8@gmail.com
- LinkedIn: [Yashwanth Kapa](https://www.linkedin.com/in/yashwanth-kapa)

---

⭐ If you found this project helpful, please give it a star on GitHub!