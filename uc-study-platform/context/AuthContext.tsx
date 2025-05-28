"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";

export type User = {
  employee_no: string;
  email: string;
  name: string;
  role_name: string;
} | null;

type AuthContextType = {
  user: User;
  setUser: (u: User) => void;
  login: (u: User) => Promise<boolean>;
  logout: () => void;
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({
  children,
  initialUser = null,
}: {
  children: ReactNode;
  initialUser?: User;
}) {
  const [user, setUser] = useState<User>(initialUser);
  const router = useRouter();

  const login = async (u: User) => {
    setUser(u);
    router.replace("/dashboard");
    return true;
  };
  const logout = () => {
    setUser(null);
    router.replace("/login");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
}
