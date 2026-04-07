import { mockRecommendedCareers } from "../mocks/data";

export async function recommendCareers(skills) {
  // `skills` arg intentionally unused for now (frontend-only mock).
  return { recommendedCareers: mockRecommendedCareers };
}

