import type { AuthProvider } from "@refinedev/core";

export const authProvider: AuthProvider = {
  login: async ({ email, password }) => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) return { success: true, redirectTo: "/admin" };
    const json = await res.json().catch(() => ({}));
    return {
      success: false,
      error: { message: json.error ?? "Login gagal", name: "LoginError" },
    };
  },

  logout: async () => {
    await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    return { success: true, redirectTo: "/admin/login" };
  },

  check: async () => {
    const res = await fetch("/api/auth/me", { credentials: "include" });
    if (res.ok) return { authenticated: true };
    return { authenticated: false, redirectTo: "/admin/login" };
  },

  onError: async (error) => {
    if (error?.statusCode === 401) {
      return { logout: true, redirectTo: "/admin/login" };
    }
    return {};
  },

  register: async () => ({ success: true }),
  forgotPassword: async () => ({ success: true }),
  updatePassword: async () => ({ success: true }),

  getIdentity: async () => {
    const res = await fetch("/api/auth/me", { credentials: "include" });
    if (!res.ok) return null;
    const json = await res.json();
    return { id: json.id, name: json.name, email: json.email };
  },

  getPermissions: async () => null,
};
