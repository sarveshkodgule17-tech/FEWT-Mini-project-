export async function generateInterviewQuestions({ roleName }) {
  return {
    questions: `Mock interview pack for: ${roleName}

1) React Fundamentals
- Explain the difference between state and props.
- What are React hooks? When do you use useMemo/useCallback?

2) Practical UI/UX
- How do you make a page responsive?
- How do you approach accessibility for a form?

3) API + Error Handling
- How do you handle loading/error states in a UI?
- How would you cache API responses?

4) Project discussion
- Walk me through one project you built and what you would improve.
`,
  };
}

