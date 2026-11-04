/** Rules shared by the browser form and the server. Kept free of Node-only imports. */
export const MIN_PASSWORD_LENGTH = 8;

/** Accepts a plausible address; the admin's approval is the real gate. */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim().toLowerCase());
}
