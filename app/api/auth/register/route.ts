
import { RegisterFormSchema, RegisterFormType } from "@/lib/types";
import axios from "axios";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

		const body:RegisterFormType = await request.json();

		const result = RegisterFormSchema.safeParse(body)

		let zodErrors = {};

		if (!result.success) {
			result.error.issues.forEach((issue) => {
				zodErrors = {... zodErrors, [issue.path[0]]: issue.message}
			})
		}

		const hashedPassword = await hash(body.password, 10);

		const user = {
			email: body.email,
			password: hashedPassword
		}

		const response = await axios.post(`${process.env.REGISTER_API_URL}`, user);

		if (!response.data.status) {

		}
		
		return NextResponse.json(response.data);

}