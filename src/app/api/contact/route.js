import { transporter, mailOptions } from "../../../lib/nodemailer";
import { NextResponse } from "next/server";
export async function POST(request) {
	const json = await request.json();

	const res = await transporter.sendMail({
		...mailOptions,
		subject: json.subject,
		text: json.body,
	});
	return NextResponse.json({}, { status: 200 });
}
