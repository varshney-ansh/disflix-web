import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import User from '@/js/models';
import connectDB from '@/utils/database';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
connectDB()

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "email@gmail.com", required: true },
                password: { label: "Password", type: "password", required: true }
            },
            async authorize(credentials, req) {
                const { email, password } = credentials;
                const user = await signInWithCredentials({ email, password });
                return user;
            }

        }),
    ],
    pages: {
        signIn: '/ap/signin',
        error: '/ap/signin'
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.type === 'oauth') {
                return await signInWithOAuth({ account, profile })
            }
            return true;
        },
        async jwt({ token, trigger, session }) {
            // console.log(token);
            const user = await getUserByEmail({ email: token.email });
            token.user = user;
            return token;
        },
        async session({ session, token }) {
            session.user = token.user;
            return session;
        },
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }

/* ---------------------------------------- */

async function signInWithOAuth({ account, profile }) {
    const user = await User.findOne({ email: profile.email });
    if (user) {
        return true // signin
    }

    // create account if there's no account created
    const newUser = new User({
        name: profile.name,
        email: profile.email,
        image: profile.picture,
        provider: account.provider,

    });

    await newUser.save();

    return true;
}

async function getUserByEmail({ email }) {
    const user = await User.findOne({ email }).select('-password');
    if (!user) throw new Error("Email does not exits !");

    return { ...user._doc, _id: user._id.toString() };
}

async function signInWithCredentials({ email, password }) {
    const user = await User.findOne({ email })

    if (!user) throw new Error("Email does not exits")

    const compare = await bcrypt.compare(password, user.password)
    if (!compare) {
        throw new Error("Incorrect Password")
    }

    return { ...user._doc, _id: user._id.toString() }
}