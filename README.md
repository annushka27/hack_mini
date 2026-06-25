# AcademiaCRM - AI-Powered B2B Academia Sales CRM

AcademiaCRM is a premium, feature-rich B2B Customer Relationship Management (CRM) system designed for educational service providers, bootcamps, and technical training companies. It helps sales representatives and managers track university partnerships, automate follow-up actions, draft personalized outreach templates using AI, and forecast conversions through detailed analytics.

---

## 🌟 Key Features

### 1. 🚀 SaaS landing style "About" Page
* **Freshworks-Inspired Hero**: Features a modern, split-layout SaaS landing page design containing a live floating window mockup of the B2B Academia CRM's interface.
* **Interactive AI Score Estimator Widget**: Guests can play with enrollment strength and interest parameters using real-time sliders to calculate a simulated university priority rating instantly.
* **Responsive Tabbed panels**: Seamless transitions between **Benefits**, **Capabilities**, and **Developer Stack** sections with custom animated mint-green underlines and hover effects.

### 2. 🤖 AI Lead Intelligence Portal
* **Predictive Priority Scoring**: The AI scoring algorithm evaluates institution enrollment capacities, sector types, and program alignments to rank leads (from 0 to 100).
* **Next Best Action Generators**: Provides step-by-step diagnostic actions dynamically tailored to the university's current pipeline phase.
* **AI Outreach Assistant**: Instantly composes highly personalized cold email templates utilizing customizable tone controls (Professional, Collaborative, Persuasive) and context instructions.

### 3. 📊 Interactive Dashboard & Live Analytics
* **Visual Metric Cards**: Displays tracked counts for Total Institutions, Active Leads, Meetings Booked, Proposals Sent, and Closed Deals.
* **Chart.js Graphics**: Custom status distribution doughnut charts, monthly conversion trends, and horizontal bar sales funnels with custom green themes.
* **Reports & Data Wizard**: Allows exporting university rows instantly to spreadsheet-friendly CSV format. Enables spreadsheet copy-pasting to quickly validate and batch import university leads.

### 4. 📂 Institution Lead Management
* **Kanban Pipeline Board**: Drag-and-drop B2B leads between pipeline columns (New Lead ➔ Contacted ➔ Meeting Scheduled ➔ Proposal Sent ➔ Negotiation ➔ Closed Won) with automated follow-up creation.
* **Interactive Schedules & Calendar**: Tracks and schedules meetings, links meetings to active institutional leads, and marks follow-up logs on a monthly grid.

### 5. 👤 Profile & Avatar Customizer
* **Custom Avatars**: Supports instant switching between premium preset vector avatars.
* **Local DP File Uploads**: Convert selected local image files into Base64 Data URLs via the `FileReader` API for persistent rendering.

---

## 🛠️ Technology Stack

* **Structure**: HTML5 Semantic markup
* **Styling**: Vanilla CSS3 custom variables & responsive CSS grid layouts
* **Logic**: Vanilla ES6 JavaScript SPA state routing (No heavy external frameworks)
* **Visualizations**: Chart.js Library
* **Icons & Typography**: FontAwesome Icons, Outfit (Headings) & Inter (Body) Google Fonts
* **Persistence**: Browser `localStorage` (Preserves lead states, tasks, and avatar uploads securely across reloads without a server backend)

---

## 💻 Local Setup & Running Instructions

Since AcademiaCRM runs as a client-side Single Page Application (SPA), it needs a basic local web server to run correctly and prevent CORS issues.

1. **Clone or download** this repository.
2. **Open your terminal** in the workspace folder containing the files:
   ```bash
   cd c:/Users/anush/OneDrive/Desktop/project
   ```
3. **Run a local development server** (e.g., using `npx http-server`):
   ```bash
   npx -y http-server -p 8080
   ```
4. **Access the application** at:
   * **[http://localhost:8080/](http://localhost:8080/)**
   * View the landing page directly at **[http://localhost:8080/?view=about](http://localhost:8080/?view=about)**
