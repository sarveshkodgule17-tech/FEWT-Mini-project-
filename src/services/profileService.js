const PROFILE_KEY = "mock_profile"; // { name, email, targetRole, skills: [] }
const USER_KEY = "mock_user"; // from authService

function safeParse(raw) {
  try {
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export async function getProfile() {
  const profile = safeParse(localStorage.getItem(PROFILE_KEY));
  if (profile) return profile;

  const user = safeParse(localStorage.getItem(USER_KEY));
  return {
    name: user?.name || "Student",
    email: user?.email || "student@example.com",
    targetRole: "",
    skills: [],
  };
}

export async function saveProfile({ targetRole, skills }) {
  const current = await getProfile();
  const next = {
    ...current,
    targetRole: targetRole ?? current.targetRole,
    skills: Array.isArray(skills) ? skills : current.skills,
  };
  localStorage.setItem(PROFILE_KEY, JSON.stringify(next));
  return next;
}

