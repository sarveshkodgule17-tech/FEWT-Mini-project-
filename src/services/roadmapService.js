import { mockRoadmap } from "../mocks/data";

export async function generateRoadmap({ roleName, missingSkills }) {
  // `missingSkills` arg intentionally unused for now (frontend-only mock).
  return { roadmap: mockRoadmap(roleName) };
}

