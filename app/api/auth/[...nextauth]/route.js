import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

const users = [
  { id: "1", email: "admin@example.com", password: "adminpass", name: "admin", role: "admin" },
  { id: "2", email: "author@example.com", password: "authorpass", name: "author", role: "author" },
  { id: "3", email: "consumer@example.com", password: "consumerpass", name: "consumer", role: "consumer" },
];

const authConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;

        const user = users.find(
          (u) => u.email === email && u.password === password
        );

        if (!user) return null;

        return user;
      },
    }),
  ],

  session: { strategy: "jwt" },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;        // ⭐ ADD THIS LINE
        token.role = user.role;
        token.name = user.name;
        token.email = user.email;  // (optional but good)
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;      // ⭐ ADD THIS LINE
        session.user.role = token.role;
        session.user.name = token.name;
        session.user.email = token.email; // (optional)
      }
      return session;
    },
  },

  pages: { signIn: "/signin" },
};

const handler = NextAuth(authConfig);
export { handler as GET, handler as POST };
