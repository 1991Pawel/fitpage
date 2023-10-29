import { transporter, mailOptions } from "../../../lib/nodemailer";
import { NextResponse } from "next/server";
export async function POST(request) {
	console.log(request, "REQUEST");
	const res = await transporter.sendMail({
		...mailOptions,
		subject: "test",
		text: "this is test string",
		html: "<h1>Test title</h1><p>test desc</p>",
	});

	return NextResponse.json({}, { status: 200 });
}
