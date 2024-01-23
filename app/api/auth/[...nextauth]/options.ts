import type { NextAuthOptions } from "next-auth";
import axios from "axios"
import CredentialsProvider from "next-auth/providers/credentials"

import { compare, hash } from "bcrypt"
import { RegisterFormSchema } from "@/lib/types";


type responseType = {
	status: boolean,
	message: string
	id?: string
}

export const options: NextAuthOptions = {
	session: {
		strategy: "jwt",

	},
	providers: [
		CredentialsProvider({
			id: 'login',

			credentials: {
				email: { label: "Username", type: "text", placeholder: "jsmith" },
				password: { label: "Password", type: "password" }
			},
			async authorize(credentials) {
				const response = await axios.get(`http://localhost:8080/user/${credentials?.email}`)
				const user = response.data.at(0);



				const correctPassword = await compare(credentials?.password || "" , user.password)
				
				if (correctPassword) {
					return {
						id: user.id,
						email: user.email,
					}
				}
				
				return null
	
			}
		}),
		CredentialsProvider({
			id: 'register',

			credentials: {
				email: { label: "Email", type: "text", placeholder: "Email"},
				password: { label: "Password", type: "password" },
				confirmPassword: { label: "Confirm Password", type: "password" }
			},
			async authorize(credentials) {
				
				console.log(credentials)
				const result = RegisterFormSchema.safeParse(credentials)
				
				let zodErrors = {};
		
				if (!result.success) {
					result.error.issues.forEach((issue) => {
						zodErrors = {... zodErrors, [issue.path[0]]: issue.message}
					})
				}
		
				
				const hashedPassword = await hash(credentials?.password || "", 10);
		
				const user = {
					email: credentials?.email,
					password: hashedPassword
				}
		
				const response = await axios.post(`${process.env.REGISTER_API_URL}`, user);
				
				console.log(response.data.id);
				if (response.data.status) {
					return {
						id: response.data.id,
						email: credentials?.email,
					}
				}
				
				return null

			}
		})
	],
	
	pages: {
		signIn: '/login',
		error: '/login'
	},

	callbacks: {
		session: ({ session, token}) => ({
			...session,
			user: {
				...session.user,
				id: token.sub
			}
		})
		
  }
	
}

