function asBulletList(items) {
  return items.map((x) => `- ${x}`).join("\n");
}

export async function getResourcesForSkills(skills = []) {
  const unique = Array.from(new Set(skills.filter(Boolean)));
  const lines = unique.length
    ? asBulletList(
        unique.map(
          (s) =>
            `${s}: Search "free ${s} course" + read official docs + build a mini project`
        )
      )
    : "- Add missing skills to get tailored resources";

  return {
    resources: `Recommended learning resources (frontend-only mock)

${lines}

Certifications (optional)
- Google / IBM / Microsoft beginner certs relevant to your path
`,
  };
}

