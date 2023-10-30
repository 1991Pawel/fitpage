import { type NextRequest, NextResponse } from "next/server";
import { transporter, mailOptions } from "../../../lib/nodemailer";

interface EmailData {
	subject: string;
	body: string;
}
export async function POST(request: NextRequest): Promise<Response> {
	try {
		const json: EmailData = (await request.json()) as EmailData;

		const res = await transporter.sendMail({
			...mailOptions,
			subject: json.subject,
			text: json.body,
		});
		return NextResponse.json({ message: "ok", data: res }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "error", error: error }, { status: 500 });
	}
}
