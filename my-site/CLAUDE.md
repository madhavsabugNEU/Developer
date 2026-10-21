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
- Grew up in India, Dubai (lived there 5 years), and Singapore. Attended UWC South East Asia in Singapore (IB Diploma).
- Pitch: I combine data science with business thinking to turn messy data into reliable insights and tools.
- Contact: madhavsabug@gmail.com · (617) 505-2098 · linkedin.com/in/madhavsabu/ · github.com/madhavsabugNEU

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
   - I'll add the paper as a PDF later (it will go in `public/papers/`). Until then, leave a placeholder for the link.

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

## Writing style (apply to all site content)

- Write in a polished, professional tone with correct grammar and punctuation.
- Project and experience descriptions use complete sentences, not fragments. Short labels (stop subtitles, tags, buttons) can stay brief.
- Avoid slang and filler. Keep it confident but not boastful.
- Use consistent tense: present tense for ongoing work (xG, Electric Racing), past tense for finished work.
- Proofread all existing copy against these rules whenever you touch a section.

## Honesty rules (apply to all site content)

- Use real numbers only. Never invent metrics, accuracy scores, or results.
- Label course projects and team projects clearly.
- Don't list "Mathematical Foundations of AI" as coursework.
- Don't call me a "junior." I'm a second-year student.
- xG is in progress. Say so wherever it appears.
- Don't write copy that claims things not listed in this file. If something is missing, leave a clear placeholder like `[TODO: Madhav to fill in]` and tell me.

---

## Design concept (decided)

### The big idea: the Green Line

- The site is themed on Boston's Green Line, since Northeastern sits on it. Use our own green and our own style. Do NOT copy the MBTA logo, the "T" symbol, or official MBTA signage.
- Colors: Green Line green `#1a7f4b` for the branches. Navy `#1F3864` for my name, headings, and the pre-Boston journey.

### The hero (first screen), approved mockup

- Top left: my name (navy, large), a two-line pitch ("Data science + business at Northeastern." / "Turning messy data into reliable insights."), and a small monospace prompt: "pick a line to board →".
- The map, left to right:
  - **My journey before Boston:** a dotted navy line with three small stations: **India → Dubai → Singapore**.
  - **Northeastern:** a big hub station (a white circle with a thick green ring), where the line turns solid green.
  - **Four green branches** fan out to the right from Northeastern, like the real Green Line. Each one ends in a green circle badge with its letter:
    - **B** = Business Analytics
    - **C** = Comp Bio
    - **D** = Data / ML
    - **E** = All stops (Northeastern's real Green Line branch)
  - Small stop dots sit along each branch.
- Along the bottom, always visible: GitHub, LinkedIn, and Email as pill buttons, plus a filled navy Resume button.
- On phones, the map turns vertical, with the journey on top, Northeastern in the middle, and the branches dropping downward.

### Boarding a line ("Pick your route")

- Clicking a branch (the line, its label, or its badge) "boards" that line. The view moves along the branch into a line page specialized for that career type. (Do the full animation in a later step. For now, a simple transition is fine.)
- The line page shows:
  - A header with the letter badge, the line name, and "X stops from Northeastern."
  - A vertical green line with the projects as stops, top to bottom. Each stop has a name and a short subtitle.
  - **Transfer stations:** projects that appear on more than one line get a bigger dot and a "transfer" tag.
  - A "← Back to map" button and a resume button that matches the line.
- The stops on each line (first draft):
  - **B, Business Analytics:** ShelfLife (transfer) · Data Cleaning Pipeline (transfer) · El Salvador research · My Creative Factory · Knack → **Econ** resume
  - **C, Comp Bio:** Enzyme experiment · Data Cleaning Pipeline (transfer) · xG model (transfer) → **Bio** resume
  - **D, Data / ML:** xG model (transfer) · Data Cleaning Pipeline (transfer) · ShelfLife (transfer) → **CS** resume
  - **E, All stops:** every project. The resume button lets you choose any of the three versions.
- Clicking a stop opens that project's chapter (see below).

### Coursework on each line

Each line page also has a **"Coursework on this line"** panel, styled like a station timetable (a clean list or table in the transit style). Mark IB transfer credit clearly as "(IB credit)".

- **B, Business Analytics:** Financial Accounting & Reporting · Financial Management · Introduction to Marketing · Programming with Consumer Data · Introduction to Databases · Information Presentation and Visualization · Principles of Macroeconomics (IB credit) · Principles of Microeconomics (IB credit)
- **C, Comp Bio:** General Biology 1 (IB credit) · General Biology 2 (IB credit) · Foundations of Data Science · Intermediate Programming with Data · Advanced Programming with Data · Introduction to Databases
- **D, Data / ML:** Discrete Structures · Foundations of Data Science · Intermediate Programming with Data · Advanced Programming with Data · Introduction to Databases · Information Presentation and Visualization
- **E, All stops:** all coursework, including Buildings and Cities

### The Biology minor

- The C line header shows a subtitle: "B.S. in Data Science & Business · Minor in Biology." The C line's intro text should explain how I connect data science with biology.
- The minor should also appear wherever my degree is listed (the About or Education section) and in the hero tooltip or caption if there's room.
- The line choice should be in the URL hash (for example `#line-d`), so I can send a recruiter a link straight to the D line.

### Project chapters (later steps)

Each project gets its own visual world when you open its stop:
- **xG Modeling → "Matchday":** dark pitch-green, chalk pitch lines, shots plotted and colored by xG
- **Data Cleaning Pipeline → "Clean run":** cream paper and monospace text. Messy rows get struck out and come out clean.
- **ShelfLife → "Blueprint":** an ER diagram of my actual schema, with foreign-key lines drawing themselves in
- **Research (El Salvador, enzyme) → "Lab notebook":** graph paper, serif type, annotated pages
- After the projects, Experience, About, Resume, and Contact go back to the calm navy-and-white style.

### xG chapter ("Matchday"), approved design (v2)

- **Colors:** background `#0f2a1d` (dark pitch green), pitch `#123321`, chalk lines `#eaf3de` at about 30% opacity, text `#eaf3de`, secondary text `#c0dd97`, small labels `#97c459`, muted/upcoming `#5e7d68`. Amber `#fac775` for highlights (text on `#3a3410` for pills). Live red `#e24b4a`.
- **Header:** a small monospace label showing which lines this stop is on (D line · C line transfer), the title "xG Modeling in Football," the amber "In progress" pill, a one-sentence description in formal, complete sentences, and a meta line (Solo project · Jul 2026 to present · Python, pandas, scikit-learn).

**Shot map (left column on desktop, stacked on phones):**
- A **horizontal half-pitch with the goal at the top** (landscape, roughly 340×250 proportions), with accurate markings: penalty box, six-yard box, penalty arc, and halfway arc at the bottom.
- **All shots are the same small size** (radius about 4) and **colored by xG only**, using a smooth gradient from dark green (low) through light green to amber (high), at about 75% opacity. No size encoding and no outlines for goals.
- **One featured shot is annotated:** a light amber wedge from the shot to both goalposts (labeled "angle"), a dashed line to the center of the goal (labeled "distance"), and the dot itself in amber with a "this shot" label.
- **Beside the map:** a short heading, "How xG reads a shot," and two or three sentences explaining that xG depends mostly on how much of the goal the shooter can see and how far away they are. Below that, a simple gradient legend (low → high xG) and the caption "illustrative · placeholder data."
- Hovering or tapping a shot shows its details (xG, outcome, distance) in one line. Goals are revealed only on hover or tap.
- Shot data stays in the separate data file so I can swap in my real CSV.

**Match report panel (right column):** unchanged. Stat rows show "—" until real numbers arrive, with a dashed placeholder note and pill links (GitHub repo, Notebook · coming soon).

**"Live commentary" progress tracker (replaces the old "how it works" arrow strip):**
- **Top bar:** a "project progress" label on the left. On the right, a red "● LIVE" tag and the clock `72' / 90'`.
- **Match clock progress bar:** a thin bar filled to 72/90 (80%), with a faint half-time tick at 50%. Labels under it: "kickoff," "half time," and "full time = finished."
- **One-line key:** "A football match lasts 90 minutes, and each completed stage moves the clock forward 18."
- **Five rows.** Each row has a status icon, a plain step name (bold), a one-sentence description, and a small minute badge on the right:
  1. ✓ **Data collection** (18'): Gathered historical match and shot data from past seasons.
  2. ✓ **Data cleaning** (36'): Standardized coordinates and events into a consistent training dataset.
  3. ✓ **Feature engineering** (54'): Derived shot distance, angle, and game-situation features.
  4. ● **Modeling** (72', amber badge, red pulsing "live" dot, "now playing" tag): Building and iterating on a classifier in scikit-learn.
  5. ○ **Evaluation** (90', dimmed): Testing against held-out data and a distance-only baseline.
- Plain step names always come first, so the tracker makes sense to people who don't follow football.
- The pulsing live dot respects `prefers-reduced-motion` (no animation if it's on).
- **Keep the stage list and current stage in the data file.** The clock is computed as completed stages × 18. When all five are done, the clock shows 90', the LIVE tag changes to "Full time," and the "In progress" pill can be removed.

### Guardrails

- A simple nav to jump to any section must always be available.
- Motion is optional. Respect `prefers-reduced-motion`, and make sure every chapter has a clean, static version that works on phones. Content never depends on animation.
- Fast-loading. No heavy libraries unless really needed.
- Typography: a clean sans-serif for now (to be refined in polish). Monospace for small transit-style labels.
- Resume PDFs go in `public/resumes/` as `Madhav-Sabu-Resume-CS.pdf`, `Madhav-Sabu-Resume-Econ.pdf`, and `Madhav-Sabu-Resume-Bio.pdf`.

---

## Build plan (one step at a time)

1. ✅ Lock the concept and hook (done in the design chat)
2. ✅ Skeleton: one component per section (Hero, each project chapter, Experience, About, Resume, Contact), a simple nav, real content in plain styling, mobile-friendly. No theming or animation yet.
3. ✅ Hero: the transit map and "Pick your route" interaction, including the resume switching.
4. Chapters, one at a time (xG design approved, real data pending): xG (Matchday) → Data Cleaning Pipeline (Clean run) → ShelfLife (Blueprint) → Research (Lab notebook)
5. Transitions between chapters
6. Fill in and style Experience, About, Resume, and Contact
7. Polish: mobile, load speed, accessibility, reduced motion

## Waiting on Madhav (assets to add later)

Leave clear placeholders for these until I provide them. Never fill them with made-up content.

- [ ] **xG numbers:** data source, competitions and seasons, shot count, goal count, feature list, model type, test metrics (log loss, Brier score, ROC AUC), and a distance-only baseline for comparison
- [ ] **xG shot sample:** a CSV of 200 to 500 shots with x, y, outcome, and the model's predicted xG once available, plus a note on the coordinate system
- [ ] **xG extras (optional):** a calibration plot, feature importances, and a notebook link
- [ ] **Data Cleaning Pipeline:** GitHub link, a sample messy input file, and its cleaning report output (rows in, duplicates and missing values removed, outliers flagged)
- [ ] **ShelfLife schema:** the SQL `CREATE TABLE` file or a list of tables, columns, and foreign keys (for the Blueprint chapter)
- [ ] **El Salvador paper:** PDF for `public/papers/`
- [ ] **Resumes:** final CS, Econ, and Bio PDFs in `public/resumes/` (remove Mathematical Foundations of AI; make the GPA consistent)
- [ ] **Photo:** a headshot or casual photo for About
- [ ] **Electric Racing:** whether the club approved sharing Figma screenshots
- [ ] **Enzyme experiment (optional):** chart or photos
- [ ] **My Creative Factory (optional):** a video clip or still

## Current status

- Steps 1 to 3 are done, and the first version of the xG chapter is built.
- The xG chapter is updated to the v2 design. Everything it shows is in `src/data/xg.js`: the shots (mark one with `featured: true` for the angle and distance annotation), the match report values, the links, and the five stages. Change `stagesCompleted` (now 3) as work finishes; the clock, progress bar, and rows update from it. At 5, the clock shows 90', LIVE becomes "Full time," and the "In progress" pill disappears.
- Clock rule as built: while a stage is in progress, the clock shows that stage's end minute (3 done + Modeling in progress = 72'), matching the approved mockup. Confirm or change.
- After that: design the Data Cleaning Pipeline ("Clean run") chapter in the design chat.