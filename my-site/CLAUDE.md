# CLAUDE.md: Madhav Sabu portfolio site

This file is the project briefing. Read it at the start of every session.
The design work happens in a separate Claude.ai chat; decisions made there get copied in here.
If anything in this file conflicts with a request, ask before acting.

---

## How to work with me

- I'm not a web developer and I'm not trying to learn React. Explain what you changed in plain English, in 2 to 4 sentences, with no jargon.
- Work in small steps. Only do the step I ask for. Don't jump ahead to later steps in the plan.
- After each change, tell me exactly what to look at in the browser (localhost) to check it.
- Ask before running `git commit` or `git push`. When I say yes, write a short, clear commit message.
- Don't add new npm packages unless they're really needed. If you want to add one, tell me why first.
- Keep the code organized so each section and each project chapter is its own component file.
- When a step is done, update the "Current status" section at the bottom of this file.

## Tech setup

- Vite + React (created with `npm create vite@latest my-site -- --template react`)
- Deployed on Vercel from the GitHub repo `my-site` (pushing to `main` auto-deploys)
- Run locally with `npm run dev`

---

## Purpose and audience

- Personal portfolio for co-op recruiters and hiring managers. It gets linked on my resume, LinkedIn, and applications, and submitted for portfolio-required roles (for example, MIT Senseable City Lab).
- Target roles: Spring 2027 co-ops (January to June 2027) in data science, data analytics, data engineering, AI/ML, computational biology, and finance-adjacent analytics.
- Recruiters spend under a minute on a site. The first screen must show who I am, what I build, and how to contact me, without scrolling.

## Who I am

- Madhav Sabu (he/him), second-year student at Northeastern University, Boston, MA
- B.S. in Data Science & Business, Concentration in Marketing Analytics, Minor in Biology. Expected graduation May 2029.
- GPA 3.74/4.0. Dean's List (Fall 2025, Spring 2026).
- Roots in India and Singapore. Attended UWC South East Asia (IB Diploma).
- Pitch: I combine data science with business thinking to turn messy data into reliable insights and tools.
- Contact: madhavsabug@gmail.com · linkedin.com/in/madhavsabu/ · github.com/madhavsabugNEU
- Don't write my phone number into the site's pages. It's okay for it to appear in the resume PDFs (decided 2026-10-21).

## Skills (list only these)

- Languages: Python (strongest), SQL. Java and C# are basic, so don't feature them prominently.
- Libraries and tools: pandas, NumPy, scikit-learn, Streamlit, Jupyter Notebook, Git/GitHub, Excel, MySQL, Figma, DaVinci Resolve
- Skills: machine learning, data analysis, data cleaning, data visualization, database design, REST APIs, UI/UX design

## Relevant coursework

Discrete Structures, Introduction to Databases, Intermediate Programming with Data, Foundations of Data Science, Advanced Programming with Data, Information Presentation and Visualization, Programming with Consumer Data, Financial Accounting & Reporting, Financial Management, Introduction to Marketing, Buildings and Cities.
IB transfer credit: General Biology 1 and 2, Principles of Macroeconomics and Microeconomics.

## Projects

1. **xG Modeling in Football** (Jul 2026 to present, solo, IN PROGRESS)
   - Python, pandas, scikit-learn
   - Collected and cleaned historical match and shot data into a training dataset. Building and iterating on an ML model that predicts goal probability from shot location, angle, and situational features.
   - GitHub: https://github.com/madhavsabugNEU/xG-model-football
   - Always mark it as in progress. Never invent accuracy numbers or results.

2. **ShelfLife** (Jan to Apr 2026, five-person team, CS 3200 Database Design course project)
   - MySQL, Flask, Streamlit, Docker, Python
   - Course materials marketplace for Northeastern students, with buyer, seller, data analyst, and admin roles.
   - My contributions: designed the relational schema (linked tables, foreign keys), generated mock data for testing, found and fixed data integrity issues such as missing price-history records, and helped debug the Streamlit analytics dashboard.
   - GitHub: https://github.com/madhavsabugNEU/26S-ShelfLife-GroupProject
   - Demo video (embed it): https://www.youtube.com/watch?v=jpNh5U-58YQ
   - Always describe it as a team project and highlight only my parts.

3. **Data Cleaning Pipeline** (DS 3500 course project, Fall 2026)
   - Python, pandas, YAML, argparse, logging
   - Configurable command-line pipeline that loads CSV, JSON, and YAML files, validates required columns and numeric fields, removes duplicates, missing values, and outliers (IQR and z-score), and generates a cleaning report. Modular `src/` package design.
   - Label it as a course project built from an assignment spec.

4. **Economic Impact of El Salvador's Gang Crackdown** (Mar to Nov 2024, independent research)
   - 4,000-word research paper analyzing up to 23 years of World Bank, IMF, ILO, and CEPAL data across 4 indicators (GDP growth, foreign investment, unemployment, wellbeing).
   - Finding: reported economic gains couldn't be attributed to the policy, partly because of misleading statistics (for example, unemployment fell partly because mass arrests shrank the labor force).
   - Frame it as independent research. Never call it published or college research.

5. **Enzyme Activity Experiment** (independent lab research, high school)
   - 30-trial experiment on how salinity affects trypsin activity, measured with a colorimeter and analyzed with standard deviation and Pearson correlation (r = −0.43, a weak negative correlation).
   - Strength: I identified why the data was unreliable and how I'd fix it.

6. **Sentiment Analysis Classifier** (Jun to Jul 2023, team of 4)
   - Python, pandas, Jupyter. Classified IMDB movie reviews as positive or negative.
   - No code access, so mention it only briefly (if at all) and don't link anything.

## Experience

- **Northeastern Electric Racing, Software Product Team Member** (Jan 2026 to present): designed high-fidelity Figma mockups for features of the team's main data dashboard, gathered user feedback and iterated on designs, and presented concepts to club leadership for board approval. Don't show Figma screenshots unless I say the club approved it.
- **Knack, Peer Tutor** (Feb to Jun 2026): tutored financial accounting (ACCT 1201) and Excel-based calculations. 5-star rating across student reviews.
- **My Creative Factory, Product & Client Management Intern** (Jun to Jul 2024, Singapore): turned requirements from 4 clients into customized deliverables, did competitive analysis for internal reports, and produced and edited client marketing videos in DaVinci Resolve.

## Leadership and activities

Smith and Kennedy Hall Vice President · Kappa Theta Pi (Technology Fraternity) · Resident Student Association · Badminton team captain (UWCSEA) · Special Olympics technical officer (coordinated logistics and coached badminton athletes)

## Interests

Badminton, football (soccer) analytics, biking, exploring new music.

## Honesty rules (apply to all site content)

- Use real numbers only. Never invent metrics, accuracy scores, or results.
- Label course projects and team projects clearly.
- Don't list "Mathematical Foundations of AI" as coursework.
- Don't call me a "junior." I'm a second-year student.
- xG is in progress. Say so wherever it appears.
- Don't write copy that claims things not listed in this file. If something is missing, leave a clear placeholder like `[TODO: Madhav to fill in]` and tell me.

---

## Design concept (decided)

### The big idea: a transit line through the page

- The hero is a transit map of my path: India → Singapore → UWCSEA → Northeastern → projects.
- As you scroll, the line runs down the page. Each project is a "station" that opens a chapter with its own visual world:
  - **xG Modeling → "Matchday":** dark pitch-green, chalk pitch lines, shots plotted and colored by xG. The line becomes the pitch touchline.
  - **Data Cleaning Pipeline → "Clean run":** cream paper and monospace text. Messy rows (typos, duplicates, NaN, outliers) get struck out and come out clean. The line becomes the data stream.
  - **ShelfLife → "Blueprint":** an ER diagram of my actual schema, with foreign-key lines drawing themselves in.
  - **Research (El Salvador, enzyme) → "Lab notebook":** graph paper, serif type, papers shown as annotated pages and labeled specimens. The line becomes a pencil line.
- After the projects, the line returns to navy for Experience, About, Resume, and Contact, so the page ends calm and professional.

### The hook: "Pick your route" (first screen)

- On the first screen, visitors choose one of three lines:
  - **Data / ML line** → highlights xG, Data Cleaning Pipeline, ShelfLife → resume button downloads the **CS** resume
  - **Business Analytics line** → highlights ShelfLife, Data Cleaning Pipeline, El Salvador research, plus the My Creative Factory and Knack experience → **Econ** resume
  - **Comp Bio line** → highlights the Enzyme experiment, Data Cleaning Pipeline, xG (as ML experience) → **Bio** resume
  - (This mapping is a first draft. We'll refine it.)
- Choosing a line highlights its stations on the map, reorders or emphasizes the matching project chapters, and switches the resume download to the matching version.
- With no line chosen, the page shows everything and the resume button offers all three versions.
- The first screen must work without choosing a line: name, one-line pitch, GitHub, LinkedIn, email, and a resume button are always visible.

### Guardrails

- A simple nav to jump to any section must always be available.
- Motion is optional. Respect `prefers-reduced-motion`, and make sure every chapter has a clean, static version that works on phones. Content never depends on animation.
- Fast-loading. No heavy libraries unless really needed.
- Brand color: navy `#1F3864` (matches my resume). Typography to be decided in a later step.
- Resume PDFs go in `public/resumes/` as `Madhav-Sabu-Resume-CS.pdf`, `Madhav-Sabu-Resume-Econ.pdf`, and `Madhav-Sabu-Resume-Bio.pdf`. The PDFs may include my phone number.

---

## Build plan (one step at a time)

1. ✅ Lock the concept and hook (done in the design chat)
2. Skeleton: one component per section (Hero, each project chapter, Experience, About, Resume, Contact), a simple nav, real content in plain styling, mobile-friendly. No theming or animation yet.
3. Hero: the transit map and "Pick your route" interaction, including the resume switching.
4. Chapters, one at a time: xG (Matchday) → Data Cleaning Pipeline (Clean run) → ShelfLife (Blueprint) → Research (Lab notebook)
5. Transitions between chapters
6. Fill in and style Experience, About, Resume, and Contact
7. Polish: mobile, load speed, accessibility, reduced motion

## Current status

- Step 1 is done.
- Step 2 (skeleton) is done. Sections live in `src/components/`, project chapters in `src/components/chapters/`, and shared links (contact info, resume paths) in `src/data/links.js`. Plain styling in `src/index.css`.
- All three resume PDFs are in `public/resumes/`.
- Sentiment Analysis Classifier appears as a one-line "Earlier project" in About (no link).
- Next up: Step 3 (Hero: transit map and "Pick your route").
