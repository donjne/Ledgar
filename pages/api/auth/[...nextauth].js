import NextAuth from "next-auth/next";
import EmailProvider from "next-auth/providers/email";
import GitHubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";
import GoogleProvider from "next-auth/providers/google";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import {initializeApp, getApp, getApps} from "firebase/app";
import { getFirestore, collection, query, getDocs, where, limit, doc, getDoc, addDoc, updateDoc, deleteDoc, runTransaction, } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_eFE1UrrKkKz889oAZ1xng_Htdg7Nj0I",
  authDomain: "budgetify-cf984.firebaseapp.com",
  projectId: "budgetify-cf984",
  storageBucket: "budgetify-cf984.appspot.com",
  messagingSenderId: "796533580170",
  appId: "1:796533580170:web:ee601bdaec19d3e5172873",
  measurementId: "G-V3CLDH3448"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();

export default NextAuth ( {
    adapter: FirebaseAdapter({db, collection, query, getDocs, where, limit, doc, getDoc, addDoc, updateDoc, deleteDoc, runTransaction,}),
    // Configure one or more authentication providers
    providers: [
        EmailProvider({
          server: {
            host: process.env.EMAIL_SERVER_HOST,
            port: process.env.EMAIL_SERVER_PORT,
            auth: {
              user: process.env.EMAIL_SERVER_USER,
              pass: process.env.EMAIL_SERVER_PASSWORD
            }
          },
          from: process.env.EMAIL_FROM
        }),
        GitHubProvider({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET
        }),
        TwitterProvider({
          clientId: process.env.TWITTER_CLIENT_ID,
          clientSecret: process.env.TWITTER_CLIENT_SECRET
        }),
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
      // ...add more providers here
    ],
  });