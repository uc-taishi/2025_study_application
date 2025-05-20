export interface MasterUser {
  email: string;
  name: string;
  password: string;
  role: "admin" | "user";
}

export const USERS: MasterUser[] = [
];

export function findUser(email: string, password: string): MasterUser | null {
  return USERS.find((u) => (u.email === email && u.password === password)) ?? null;
}