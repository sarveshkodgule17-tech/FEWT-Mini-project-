import { careerDatabase, getGenericRoadmap } from "../mocks/data";

export async function generateRoadmap({ roleName }) {
  if (!roleName) return { roadmap: getGenericRoadmap("Software Professional") };

  const normalized = roleName.toLowerCase().trim();

  // Find the matching career dynamically using aliases or exact name
  const match = careerDatabase.find(c => 
    c.roleName.toLowerCase() === normalized || 
    c.aliases.some(alias => normalized.includes(alias))
  );

  if (match) {
    return { roadmap: match.roadmapText };
  }

  // Fallback if not found in database
  return { roadmap: getGenericRoadmap(roleName) };
}
