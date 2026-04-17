import { careerDatabase, mockRecommendedCareers } from "../mocks/data";

export async function recommendCareers(skillsArray = []) {
  if (!skillsArray || skillsArray.length === 0) {
    return { recommendedCareers: mockRecommendedCareers };
  }

  const normalizedInput = skillsArray.map(s => s.toLowerCase().trim());
  
  // Score careers based on matching skills
  const scoredCareers = careerDatabase.map(career => {
    let score = 0;
    career.relevantSkills.forEach(skill => {
      // If the user's input skill matches or is closely related to the career's relevant skills
      normalizedInput.forEach(input => {
        if (skill.includes(input) || input.includes(skill)) {
          score += 1;
        }
      });
    });
    return { name: career.roleName, score };
  });

  // Sort by highest score descending
  scoredCareers.sort((a, b) => b.score - a.score);

  // If score is 0 for all, return generic defaults
  if (scoredCareers[0].score === 0) {
    return { recommendedCareers: mockRecommendedCareers };
  }

  // Get the names of the careers that had matching scores
  const topMatches = scoredCareers
    .filter(c => c.score > 0)
    .map(c => c.name);

  // If we found fewer than 4 matches, pad it from the defaults
  const results = Array.from(new Set([...topMatches, ...mockRecommendedCareers])).slice(0, 4);

  return { recommendedCareers: results };
}
