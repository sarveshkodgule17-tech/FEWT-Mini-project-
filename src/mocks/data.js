export const mockDashboard = {
  targetRole: "Frontend Engineer (React)",
  completedSkills: ["HTML", "CSS", "JavaScript", "React Basics"],
  remainingSkills: ["TypeScript", "Testing", "Performance", "System Design"],
  progressPercentage: 55,
};

export const mockRecommendedCareers = [
  "Frontend Engineer (React)",
  "Full‑Stack Developer (MERN)",
  "UI Engineer",
  "Product Engineer",
];

export function mockRoadmap(roleName) {
  return `Roadmap for ${roleName}

1) Foundations
- HTML/CSS layout, responsive design, accessibility
- JavaScript fundamentals + async patterns

2) React Core
- Hooks, state, effects, memoization
- Routing patterns and protected routes

3) Production Skills
- TypeScript, testing (RTL), performance, bundling
- API integration, caching, error handling

4) Portfolio + Interviews
- Build 2–3 projects
- DSA + system design basics
`;
}

