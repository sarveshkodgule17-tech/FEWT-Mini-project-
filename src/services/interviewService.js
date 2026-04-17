import { careerDatabase, getGenericInterview } from "../mocks/data";

export async function generateInterviewQuestions({ roleName }) {
  if (!roleName) return { questions: getGenericInterview("Software Professional") };

  const normalized = roleName.toLowerCase().trim();

  // Find the matching career dynamically
  const match = careerDatabase.find(c => 
    c.roleName.toLowerCase() === normalized || 
    c.aliases.some(alias => normalized.includes(alias))
  );

  if (match) {
    return { questions: match.interviewQuestions };
  }

  // Fallback to generic questions
  return { questions: getGenericInterview(roleName) };
}
