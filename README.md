# Surili Govindsing Reknod — Futuristic Professional Portfolio

> **"Building digital experiences that make an impact."**  
> A unique, modern, futuristic, fully responsive portfolio website for **Surili Govindsing Reknod**, a second-year Information Technology student at **R. C. Patel Institute of Technology, Shirpur, Maharashtra**.  
> Built with a **midnight navy, electric violet, neon cyan, and soft pink** color palette, glassmorphism cards, interactive particle galaxy animations, glowing micro-interactions, and recruiter-friendly presentation.

---

## 🌟 Instant Viewing (Zero-Setup)

You can view and test the portfolio immediately right in your browser without installing Node.js or any build tools:

1. Open your workspace folder: `c:\Users\HP\Desktop\Surili_Portfolix`
2. **Double-click on [`preview.html`](preview.html)** to launch the website in Google Chrome, Microsoft Edge, or any modern web browser!
3. Alternatively, launch the built-in local server:
   ```powershell
   powershell -ExecutionPolicy Bypass -File .\server.ps1 -Port 3000
   ```
   and visit `http://localhost:3000/`.

---

## 🚀 Tech Stack & Design System

* **Framework:** React 18 with TypeScript & Vite
* **Styling:** Tailwind CSS with custom theme extensions:
  * **Midnight Navy:** `#050816`, `#0A0F2C`, `#0F163D`
  * **Electric Violet:** `#8B5CF6`, `#7C3AED`, `#C4B5FD`
  * **Neon Cyan:** `#06B6D4`, `#22D3EE`, `#67E8F9`
  * **Soft Pink:** `#EC4899`, `#F472B6`, `#FB7185`
* **Typography:** Space Grotesk, Manrope, Inter & JetBrains Mono
* **Icons:** Lucide Icons (`lucide-react` / Lucide CDN)
* **Visual Effects:** Interactive 2D/3D Particle Galaxy Canvas with cursor-gravity physics, glassmorphic cards, gradient typography, and custom glowing buttons.
* **Resume Delivery:** Built-in interactive CV viewer modal and direct downloadable PDF (`public/resume.pdf`).

---

## 📂 Project Structure

```text
Surili_Portfolix/
├── preview.html                     # Instant browser-ready standalone portfolio preview
├── index.html                       # Vite root HTML template with SEO & OpenGraph meta tags
├── package.json                     # Project dependencies & build scripts
├── vite.config.ts                   # Vite configuration
├── tailwind.config.js               # Theme configuration (Navy, Violet, Cyan, Pink)
├── tsconfig.json                    # TypeScript compiler configuration
├── server.ps1                       # Zero-dependency PowerShell HTTP preview server
├── resume.pdf                       # Real downloadable resume PDF
├── public/
│   ├── favicon.svg                  # Custom "SR" gradient brand favicon
│   ├── resume.pdf                   # Downloadable formatted PDF document
│   └── resume-placeholder.pdf       # Alternate resume asset
└── src/
    ├── main.tsx                     # React DOM root entry
    ├── App.tsx                      # Master layout & active section scroll spy
    ├── index.css                    # Tailwind directives, mesh backgrounds & glassmorphism
    ├── types/
    │   └── index.ts                 # TypeScript interfaces (PersonalDetails, Project, Skills, etc.)
    ├── data/
    │   └── portfolioData.ts         # ⭐️ CENTRAL DATA FILE — Edit your details here!
    └── components/
        ├── Navbar.tsx               # Sticky nav, section spy, mobile drawer & "Let's Talk" CTA
        ├── Hero.tsx                 # Particle galaxy canvas, headline, bio, metrics & CTAs
        ├── About.tsx                # Personal journey, hobbies (coding & cooking), education timeline
        ├── Skills.tsx               # Categorized cards with interactive filter pills
        ├── Projects.tsx             # Academic project spotlight, workflow diagram & modal specs
        ├── Certifications.tsx       # CodeChef Java & C certificates, honors & CodeChef card
        ├── CareerGoals.tsx          # Target companies (Microsoft, Google, Amazon, Samsung) & roadmap
        ├── Contact.tsx              # Form with client validation, 1-click copy & direct email
        ├── Footer.tsx               # Brand summary, social links, dynamic year & back-to-top
        └── ResumeModal.tsx          # Full structured CV dialog with print & download actions
```

---

## 📋 Personal & Academic Information Configured

* **Name:** Surili Govindsing Reknod
* **Professional Title:** Information Technology Student | Aspiring Software Engineer
* **College:** R. C. Patel Institute of Technology, Shirpur, Maharashtra
* **Hometown Location:** Chhatrapati Sambhajinagar, Maharashtra
* **Email:** [surelireknod@gmail.com](mailto:surelireknod@gmail.com)
* **Phone:** [+91 8262007814](tel:8262007814)
* **GitHub:** [https://github.com/SuriliReknod18](https://github.com/SuriliReknod18)
* **LinkedIn:** [https://www.linkedin.com/in/surili-reknod-5a689842a...](https://www.linkedin.com/in/surili-reknod-5a689842a?utm_source=share_via&utm_content=profile&utm_medium=member_android)
* **CodeChef Profile:** [https://www.codechef.com/users/surilireknod](https://www.codechef.com/users/surilireknod)
* **Academic Record:**
  * **First-Year B.Tech CGPA:** 7.26 / 10 (RCPIT Shirpur)
  * **Higher Secondary Certificate (12th):** 84.67% (Distinction)
  * **Secondary School Certificate (10th):** 90.20% (Top 10% Distinction)
* **Certifications:** CodeChef Java Programming Certification, CodeChef C Programming Certification
* **Featured Project:** Online Student Leave Application System (digitizing leave requests & faculty approvals)
* **Hobbies:** Coding & algorithm practice, cooking & culinary experimentation
* **Target Companies:** Microsoft, Google, Amazon, Samsung (Software Development Engineer)

---

## ✏️ How to Customize Your Details

All personal details, project descriptions, skills, and links are cleanly isolated in **[`src/data/portfolioData.ts`](src/data/portfolioData.ts)**:

1. **Updating Your CodeChef ID:**
   Open `src/data/portfolioData.ts` and update `codechefId` and `codechef` to your exact handle.
2. **Updating Your PDF Resume:**
   Place your finalized resume file into `public/resume.pdf`. The download buttons in the hero, navbar, and resume modal will immediately download your file.

---

## 🛠️ Running with Node.js & Vite (When Installed)

When Node.js is installed on your machine:

```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server
npm run dev

# 3. Build optimized production bundle
npm run build
```

---

## 🌐 Deploying to Vercel or Netlify

### Option 1: Vercel (Recommended)
1. Push this folder to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete futuristic portfolio website"
   git branch -M main
   git remote add origin https://github.com/SuriliReknod18/portfolio.git
   git push -u origin main
   ```
2. Log in to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository. Vercel auto-detects Vite (`npm run build`, `dist` folder).
4. Click **Deploy**!

### Option 2: Netlify
1. Log in to [netlify.com](https://netlify.com).
2. Drag and drop the folder or connect via GitHub.
3. Build command: `npm run build`, Publish directory: `dist`.
