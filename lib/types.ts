
import { z } from "zod";

export const LoginFormSchema = z.object({
	email: z.string().min(1).email(),
	password: z.string().min(1)
})

export type LoginFormType = z.infer<typeof LoginFormSchema>;


export const RegisterFormSchema = z.object({
	email: z.string().min(1).email(),
	password: z.string().min(1),
	confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"]
	})

export type RegisterFormType = z.infer<typeof RegisterFormSchema>;

