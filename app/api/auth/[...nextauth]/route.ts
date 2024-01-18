import axios from "axios"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: 'Credentials',

			credentials: {
				username: { label: "Username", type: "text", placeholder: "jsmith" },
				password: { label: "Password", type: "password" }
			},
			async authorize(credentials) {
				
				axios.get(`http://localhost:8080/user/${credentials?.username}`).then((response) => {
					return response.data
				});
	
				return null;
			}
		})
	]
})

export { handler as GET, handler as POST }