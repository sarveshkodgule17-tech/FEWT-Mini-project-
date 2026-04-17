export const mockDashboard = {
  targetRole: "Frontend Engineer (React)",
  completedSkills: ["HTML", "CSS", "JavaScript", "React Basics"],
  remainingSkills: ["TypeScript", "Testing", "Performance", "System Design"],
  progressPercentage: 55,
};

export const careerDatabase = [
  {
    roleName: "Frontend Engineer (React)",
    aliases: ["frontend", "front end", "react developer", "ui engineer", "web developer"],
    relevantSkills: ["html", "css", "javascript", "react", "typescript", "redux", "tailwind"],
    roadmapText: `Roadmap for Frontend Engineer (React)

1) Foundations
- HTML/CSS layout, responsive design, accessibility
- JavaScript fundamentals + async patterns (Promises, Async/Await)

2) React Core
- Hooks, state, effects, memoization (useMemo, useCallback)
- Routing patterns and protected routes (React Router)

3) Production Skills
- TypeScript integration
- Testing (Jest, React Testing Library)
- Performance optimization & bundling (Webpack, Vite)

4) Portfolio + Next Steps
- Build 2–3 complex interactive web apps
- Practice UI problem solving and DOM manipulation`,
    interviewQuestions: `Mock interview pack for: Frontend Engineer (React)

1) React Fundamentals
- Explain the difference between state and props.
- What are React hooks? When do you use useMemo vs useCallback?
- How does the virtual DOM work?

2) Practical UI/UX
- How do you make a page responsive without media queries?
- How do you approach accessibility (a11y) for a modal?

3) API + Error Handling
- How do you handle loading/error states in a UI?
- What are some strategies for caching API responses? (e.g. React Query)

4) Project discussion
- Walk me through one React project you built and what you would improve.`
  },
  {
    roleName: "Backend Developer (Node.js)",
    aliases: ["backend", "back end", "node developer", "server side", "api engineer"],
    relevantSkills: ["nodejs", "express", "javascript", "mongodb", "sql", "rest", "graphql", "docker"],
    roadmapText: `Roadmap for Backend Developer (Node.js)

1) Backend Basics
- HTTP protocol, REST APIs, JSON
- Node.js fundamentals (Event Loop, Modules, File System)

2) Server Framework & Databases
- Building APIs with Express.js
- Relational (SQL, PostgreSQL) vs NoSQL (MongoDB) databases
- Mongoose or Sequelize ORMs

3) Security & Authentication
- JWT, Sessions, Cookies
- Securing APIs against common threats (CORS, Rate Limiting, XSS, SQLi)

4) Scaling & Deployment
- Docker containerization
- CI/CD pipelines
- Microservices architecture introduction`,
    interviewQuestions: `Mock interview pack for: Backend Developer (Node.js)

1) Node.js Core
- Can you explain how the Node.js Event Loop works?
- What is the difference between process.nextTick() and setImmediate()?

2) API Design
- What are the principles of a RESTful API?
- How would you handle versioning in your APIs?

3) Databases
- When would you choose MongoDB over PostgreSQL?
- Explain database indexing and its impact on performance.

4) System Design
- How would you design a URL shortener service?
- Discuss rate-limiting strategies for your API.`
  },
  {
    roleName: "Data Scientist",
    aliases: ["data science", "data analyst", "machine learning", "ml engineer", "ai"],
    relevantSkills: ["python", "sql", "machine learning", "statistics", "data analysis", "pandas", "tableau", "math"],
    roadmapText: `Roadmap for Data Scientist

1) Mathematics & Statistics
- Linear algebra, calculus, probability
- Statistical significance, hypothesis testing, A/B testing

2) Programming & Data Wrangling
- Python basics, Jupyter Notebooks
- Pandas, NumPy for data manipulation
- Data visualization (Matplotlib, Seaborn, Tableau)

3) Machine Learning
- Scikit-Learn: Classification, Regression, Clustering
- Model evaluation (Precision, Recall, ROC-AUC)
- Feature engineering and hyperparameter tuning

4) Production & Advanced (Optional)
- Deep Learning basics (PyTorch, TensorFlow)
- Deploying models as APIs (FastAPI/Flask)`,
    interviewQuestions: `Mock interview pack for: Data Scientist

1) Programming & Tools
- How do you handle missing values in a Pandas DataFrame?
- Write a SQL query to find the 2nd highest salary from an Employee table.

2) Statistics
- Explain the concept of the Central Limit Theorem.
- What is a p-value, and how is it used in hypothesis testing?

3) Machine Learning
- What is the difference between supervised and unsupervised learning?
- Explain the bias-variance tradeoff.
- How does a Random Forest algorithm fundamentally work?

4) Scenario
- Given a dataset of user behavior, how would you design a model to predict customer churn?`
  },
  {
    roleName: "UI/UX Designer",
    aliases: ["ui", "ux", "designer", "product designer", "user interface", "user experience"],
    relevantSkills: ["figma", "sketch", "wireframing", "prototyping", "user research", "css", "adobe", "design thinking"],
    roadmapText: `Roadmap for UI/UX Designer

1) UI Design Foundations
- Color theory, typography, spacing (8px grid)
- Visual hierarchy and layout principles
- Learning standard tools (Figma, Adobe XD)

2) UX & User Research
- Empathy maps, user personas, user journeys
- Conducting user interviews and surveys
- Information architecture

3) Wireframing & Prototyping
- Low-fidelity sketches to high-fidelity mockups
- Interactive prototyping in Figma

4) Hand-off & Collaboration
- Understanding basic HTML/CSS to communicate with developers
- Creating design systems and component libraries`,
    interviewQuestions: `Mock interview pack for: UI/UX Designer

1) Design Process
- Walk me through your design process from concept to final handoff.
- How do you conduct user research before starting a design?

2) Tooling & Techniques
- How do you structure your Figma files for a large project?
- Explain the concept of a Design System. Have you built one?

3) Problem Solving
- What would you do if users are dropping off at the checkout page of an e-commerce app?
- How do you balance business constraints with user needs?

4) Portfolio Review
- Walk me through a portfolio piece you are most proud of.`
  }
];

export const mockRecommendedCareers = [
  "Frontend Engineer (React)",
  "Backend Developer (Node.js)",
  "Data Scientist",
  "UI/UX Designer"
];

export function getGenericRoadmap(roleName) {
  return `Roadmap for ${roleName}

1) Fundamentals
- Understand the core concepts and basic tools relevant to ${roleName}.
- Follow industry-standard crash courses and documentation.

2) Deep Dive
- Build beginner-level projects to apply theoretical knowledge.
- Focus on best practices and design patterns.

3) Real-World Application
- Build a complex portfolio project.
- Integrate third-party tools or APIs.

4) Interview Prep
- Study common interview questions for ${roleName}.
- Practice soft skills and project presentation.`;
}

export function getGenericInterview(roleName) {
  return `Mock interview pack for: ${roleName}

1) Core Competency
- Explain the fundamental principles of ${roleName}.
- What are the most common challenges in this field?

2) Past Experience
- Walk me through a difficult project you completed.
- What was your biggest failure and what did you learn?

3) Situational
- How do you handle disagreements with colleagues regarding a technical/design decision?
- How do you prioritize your tasks when facing multiple tight deadlines?`;
}
