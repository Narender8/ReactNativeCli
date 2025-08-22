import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { loginApi } from "./auth";
import { saveToken, getToken, clearToken } from "./secureStore";

type AuthContextType = {
  token: string | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("AuthContext not found");
  return ctx;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Restore token on app start
  useEffect(() => {
    const restore = async () => {
      const stored = await getToken();
      setToken(stored ?? null);
      setLoading(false);
    };
    restore();
  }, []);

  const value = useMemo<AuthContextType>(() => ({
    token,
    loading,
    signIn: async (email, password) => {
      const tk = await loginApi(email, password);
      if (!tk) throw new Error("No token returned");
      await saveToken(tk);
      setToken(tk);
    },
    signOut: async () => {
      await clearToken();
      setToken(null);
    }
  }), [token, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
