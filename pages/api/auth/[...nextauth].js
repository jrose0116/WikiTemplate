import { login } from '@/src/data/users';
import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
        secret: process.env.NEXTAUTH_URL,
        credentials: {
            username: { label: "Username", type: "text" },
            password: { label: "Password", type: "password" },
        },
        async authorize (credentials, req) {
            try {
                const { username, password } = credentials;
                const user = await login(username, password)
                if (user.success) return Promise.resolve(user)
                return Promise.resolve(null)
            }
            catch (error){
                return Promise.resolve(null)
            }
            },
        }),
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
              token.sub = user._id;
              token.username = user.username;
              token.displayName = user.displayName;
              token.role = user.role;
            }

            return Promise.resolve(token);
          },
        session: async ({session, user, token}) => {
            session.user = token
            return Promise.resolve(session)
        }
    },
});
