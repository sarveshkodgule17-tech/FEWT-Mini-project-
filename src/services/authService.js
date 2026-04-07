const USER_KEY = "mock_user"; // { name, email, password }

function readUser() {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export async function register({ name, email, password }) {
  const existing = readUser();
  if (existing?.email && existing.email.toLowerCase() === String(email).toLowerCase()) {
    const err = new Error("Account already exists. Please sign in.");
    err.code = "USER_EXISTS";
    throw err;
  }

  writeUser({ name, email, password });
  return { ok: true };
}

export async function login({ email, password }) {
  const user = readUser();
  if (!user) {
    const err = new Error("No account found. Please create an account first.");
    err.code = "NO_USER";
    throw err;
  }

  const emailOk = String(user.email).toLowerCase() === String(email).toLowerCase();
  const passOk = String(user.password) === String(password);
  if (!emailOk || !passOk) {
    const err = new Error("Invalid email or password.");
    err.code = "INVALID_CREDENTIALS";
    throw err;
  }

  // Frontend-only token (just to unlock protected routes)
  return { token: "mock-token" };
}

