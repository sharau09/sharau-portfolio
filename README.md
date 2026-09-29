# SHARAU — AI / ML Engineer Portfolio

A premium editorial luxury-fashion personal portfolio website for **Sharau (AI / ML Engineer & MCA Data Science candidate)**. Inspired by high-fashion editorial layouts (*Kinfolk*, *Cereal*, *Vogue* meets modern AI systems engineering), featuring warm ivory/cream backgrounds, charcoal dark-mode sections, espresso/bronze accents, elegant serif typography, asymmetric layouts, and interactive case study modals.

---

## Technical Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS with bespoke luxury tokens & typography
- **Icons**: Lucide React
- **Cloud Backend**: Firebase & Cloud Firestore (dual-mode: connects to Firestore when credentials are provided; falls back gracefully to structured local archiving with real-time UI feedback)
- **Deployment Ready**: Netlify (`netlify.toml` and `public/_redirects` configured)

---

## Project Structure

```
sharau-portfolio/
├── index.html                   # HTML entry point with luxury Google Fonts
├── netlify.toml                 # Netlify SPA routing and build configuration
├── package.json                 # Dependencies & scripts
├── tailwind.config.js           # Ivory, espresso, charcoal tokens & serif font pairings
├── vite.config.js               # Vite bundler configuration with code-splitting
├── public/
│   ├── _redirects               # Netlify client-side routing fallback
│   ├── favicon.svg              # Monogram 'S' luxury favicon
│   └── sharau-photo.png         # Sharau personal professional hero portrait
└── src/
    ├── main.jsx                 # Application mount
    ├── App.jsx                  # Main editorial flow & notification manager
    ├── index.css                # Global typography, paper texture, scrollbars
    ├── data/
    │   └── portfolioData.js     # Centralized content strictly audited against resume
    ├── services/
    │   └── firebase.js          # Firestore client & local archive fallback handler
    └── components/
        ├── Navbar.jsx           # Masthead with live IST clock & navigation index (01 PROFILE ...)
        ├── Hero.jsx             # Cover spread with professional portrait & VU Pune status
        ├── About.jsx            # 01 — PROFILE (Typography-focused, no decorative photos)
        ├── WhatIDo.jsx          # 02 — FOCUS (Machine Learning, GenAI, AI Automation)
        ├── SelectedWork.jsx     # 03 — WORK (4 Projects from resume with alternating spreads)
        ├── ProjectModal.jsx     # Immersive case study drawer with architecture & metrics
        ├── Skills.jsx           # 04 — SKILLS (6 Categories strictly from resume)
        ├── Experience.jsx       # 05 — CAREER (Cognifyz Technologies ML internship achievements)
        ├── Education.jsx        # 06 — ACADEMIA (VU Pune MCA '27 & MIT-WPU BCA '25)
        ├── Certifications.jsx   # 07 — CREDENTIALS (IBM, Bootcamp, Tata Group via Forage)
        ├── CertificateModal.jsx # Certificate verification view
        ├── WhyBuildWithMe.jsx   # 08 — MANIFESTO (High-contrast charcoal section)
        ├── Contact.jsx          # 09 — INQUIRY ("LET'S CREATE SOMETHING INTELLIGENT" form)
        ├── Toast.jsx            # Luxury notification toast
        └── Footer.jsx           # 10 — Colophon, coordinates, copyright & top jump
```

---

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## Connecting Firebase (Optional)

The contact form is pre-configured for **Cloud Firestore**.

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Fill in your Firebase project credentials from the [Firebase Console](https://console.firebase.google.com/):
   ```env
   VITE_FIREBASE_API_KEY=your_actual_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```
3. Submissions will automatically persist to the `portfolio_inquiries` collection in Firestore.
4. If you omit credentials, the site automatically saves inquiries to structured local storage with visual toast confirmation.

---

## Deploying to Netlify via GitHub

1. Initialize a git repository if needed:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Sharau luxury editorial AI/ML portfolio"
   ```
2. Push to your GitHub repository:
   ```bash
   git remote add origin https://github.com/your-username/sharau-portfolio.git
   git push -u origin main
   ```
3. In [Netlify](https://app.netlify.com/):
   - Click **Add new site** > **Import an existing project**.
   - Select your GitHub repository.
   - Netlify will automatically detect `netlify.toml` (Build command: `npm run build`, Publish directory: `dist`).
   - If using Firebase, add your `VITE_FIREBASE_*` variables under **Site configuration > Environment variables**.
   - Click **Deploy site**.
