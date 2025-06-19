import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    userId?: string;
    accessToken?: string;
    idToken?: string;
    role?: string;
  }

  interface JWT {
    userId?: string;
    accessToken?: string;
    idToken?: string;
    role?: string;
  }
}
