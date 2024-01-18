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
import { RegisterFormSchema, RegisterFormType } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";


export default function RegisterCard() {

	const [emailError, setEmailError] = useState(false);

	console.log("reload");
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	
	} = useForm<RegisterFormType>({
		resolver: zodResolver(RegisterFormSchema)
	});

	const onSubmit = async (data: RegisterFormType) => {
		axios.post("/api/auth/register", data).then((response) => {
			console.log(response.data);
			setEmailError(!response.data.status);
		});

		
	
	}

  return (
    <Card className="w-[25rem] border border-gray-700">
      <CardHeader>
        <CardTitle>Register</CardTitle>
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
					<div>
						<h1 className="text-md font-semibold">Password</h1>
						<input 
							className="border rounded-md px-3 py-2 ring-offset-background focus-visible:outline-none 
							focus-visible:ring-2 focus-visible:ring-ring w-full border-gray-700" 
							{...register("confirmPassword")}
							autoComplete="off"
							type="password"
						/>
					</div>
			
        </form>
				{(errors.email || emailError) && (
						<h1 className="text-red-500">Invalid Email</h1>
				)}
				{(errors.password) && (
						<h1 className="text-red-500">Invalid Password</h1>
				)}
				{(errors.confirmPassword && !errors.password) && (
						<h1 className="text-red-500">{errors.confirmPassword.message}</h1>
				)}

      </CardContent>
      <CardFooter>
        <Button form="login-form" type="submit" className="w-full" disabled={isSubmitting}>Enter</Button>
      </CardFooter>
    </Card>
  )
}