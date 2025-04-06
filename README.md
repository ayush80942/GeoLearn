# 🌍 Pragati.ai – AI-Powered Skilling Platform

**Pragati.ai** is an AI-driven, multilingual, and inclusive learning platform built to empower underserved youth in India with job-ready skills, career guidance, and recruiter visibility — all in one place.  

> Developed by **Team Champion** for the **Pragati_AI_for_Impact_Hackathon_2025**

---

## 🚀 Overview

Pragati.ai bridges the gap between personalized learning and effective talent acquisition. It offers adaptive, multimodal learning experiences, real-world assessments, and seamless recruiter interaction — making it more than just a Learning Management System.

---

## ✨ Key Features

- 📚 **AI-Personalized Learning Paths** – Adaptive content based on user skills, pace, and career goals.
- 🌐 **Multilingual Support** – Content and interactions in multiple Indian languages.
- 🤖 **AI-Powered Doubt Solver & Career Counselor** – Voice and chat support with OCR-based question input.
- 📹 **YouTube Video Summarization & Curation** – Relevant learning content with AI-generated summaries and notes.
- 🧠 **AI Quiz Generator** – Smart quizzes customized to learner performance.
- 🎤 **AI Interview Simulator** – Practice interviews with feedback.
- 📡 **Real-Time Job & Opportunity Finder** – Discover jobs, internships, and events.
- 📶 **Offline Learning Support** – Access training without internet on smartphones.

---

## 🧩 Architecture Overview

- **Frontend:** Mobile-first web app with voice/image chat, OCR question handling, and multilingual UX.
- **Backend:** Microservices with AI modules for learning personalization, job recommendations, and analytics.
- **Cloud & Scaling:** AWS, Docker, VLLM for cloud-based deployment with offline fallback support.
- **Recruiter Dashboard:** Interface to discover candidates, feed skills demand, and view learner progress.

![archi_diag](https://github.com/user-attachments/assets/da92b4d6-e1ee-4044-bf77-fe7e6fae668e)


---

## 🧠 AI & Open Source Tech Stack

- 🤗 HuggingFace Transformers, LangGraph, HFsmolagents
- 📷 OpenCV, EasyOCR
- 🧮 PyTorch / TensorFlow
- ⚙️ Docker, Kubernetes, MLflow, VLLM

---

## 📊 Datasets Used

- **IAM Handwriting Dataset**
- **EdNet**
- **VCTK Corpus**
- **YouTube Data API**
- **LinkedIn Job Data**

All are publicly available or user-generated datasets.

---

## 🔌 Scalability & Accessibility

- Modular microservices for independent scaling
- Offline mode with auto-sync
- Multilingual + OCR for low-literacy regions
- Auto-scaling cloud (AWS) to manage growing users

---

## 🎥 Demo

📺 Watch the demo: [https://youtu.be/OHwE3QWmQP8](https://youtu.be/OHwE3QWmQP8)

---

## 📂 Repository Structure

```bash
Pragati.ai/
├── frontend/             # React-based learner UI
├── backend/              # FastAPI/Flask-based AI services
├── recruiter-dashboard/  # Recruiter interaction layer
├── models/               # Pretrained/fine-tuned AI models
└── README.md
