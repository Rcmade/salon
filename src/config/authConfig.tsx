import NextAuth from "next-auth";
import authProvidersConfig from "@/config/authProvidersConfig";
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({}) {},
  },
  callbacks: {
    async signIn({ account }) {
      if (account?.provider !== "credentials") return true;
      return true;
    },
    async session({ session }) {
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      return token;
    },
  },

  // adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  ...authProvidersConfig,
  debug: process.env.NODE_ENV === "development",
});
