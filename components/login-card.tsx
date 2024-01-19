"use client"

import { Button } from "@/components/ui/button";
import { 
	Card, 
	CardContent, 
	CardDescription, 
	CardFooter, 
	CardHeader, 
	CardTitle 
} from "@/components/ui/card";
import { LoginFormSchema, LoginFormType } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";


export default function LoginCard() {
	const router = useRouter();
	const [submitError, setSubmitError] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }

	} = useForm<LoginFormType>({
		resolver: zodResolver(LoginFormSchema)
	});

	const onSubmit = async (data: LoginFormType) => {
		const response = await signIn("login", {
			email: data.email,
			password: data.password,
			redirect: false,
			
		})
		
		if (response?.ok) {
			router.push("/")
			router.refresh()
		} else {
			setSubmitError(true)
		}
	}

  return (
    <Card className="w-[25rem] border border-gray-700">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter Email and Password to Login</CardDescription>
      </CardHeader>
      <CardContent >
        <form className="flex flex-col gap-y-5" onSubmit={handleSubmit(onSubmit)} id="login-form">
					<div className="w-full">
						<h1 className="text-md font-semibold">Email</h1>
						<input 
							className="border rounded-md px-3 py-2 ring-offset-background focus-visible:outline-none 
							focus-visible:ring-2 focus-visible:ring-ring w-full border-gray-700" 
							{...register("email")}
						/>
					
					</div>
					<div>
						<h1 className="text-md font-semibold">Password</h1>
						<input 
							className="border rounded-md px-3 py-2 ring-offset-background focus-visible:outline-none 
							focus-visible:ring-2 focus-visible:ring-ring w-full border-gray-700" 
							{...register("password")}
							autoComplete="off"
							type="password"
						/>
					</div>
        </form>
				{(errors.email || errors.password || submitError) && (
						<h1 className="text-red-500">Invalid email or password</h1>
					)}
      </CardContent>
      <CardFooter>
				<div className="flex flex-col w-full items-end gap-y-2">
        	<Button form="login-form" type="submit" className="w-full" disabled={isSubmitting}>Enter</Button>
					<Link className="text-sm font-semibold hover:text-gray-600" href="/register">Register for an account?</Link>
				</div>
				
      </CardFooter>
    </Card>
  )
}