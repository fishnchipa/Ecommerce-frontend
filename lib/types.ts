
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


export type QuickLinksProps = {
	value: {page: string, content: string}[]
}

export type BannerProps = {
	width: number,
	height: number,
	image: string
}
export const ItemFormSchema = z.object({
	name: z.string().min(1),
	price: z.string(),
	category: z.string().min(1)
})

export type ItemFormType = z.infer<typeof ItemFormSchema>;

export type ItemType = {
	id: number
	name: string,
	price: string,
	category: string,
}