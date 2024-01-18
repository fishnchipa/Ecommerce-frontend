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
import { useForm } from "react-hook-form";


export default function LoginCard() {

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }

	} = useForm<LoginFormType>({
		resolver: zodResolver(LoginFormSchema)
	});

	const onSubmit = (data: LoginFormType) => {
		console.log(data);
	}

  return (
    <Card className="w-[25rem] border border-gray-700">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Enter Email and Password to Register</CardDescription>
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
				{(errors.email || errors.password) && (
						<h1 className="text-red-500">Invalid email or password</h1>
					)}
      </CardContent>
      <CardFooter>
        <Button form="login-form" type="submit" className="w-full" disabled={isSubmitting}>Enter</Button>
      </CardFooter>
    </Card>
  )
}