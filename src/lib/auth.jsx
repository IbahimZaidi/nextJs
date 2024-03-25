import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

// { handlers, auth, signIn, signOut }
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: "6fc48cfd7adcb74254fe",
      clientSecret: "26bb3f4798657cd27018f7bc860d62ef330c58e6",
    }),
  ],
});
