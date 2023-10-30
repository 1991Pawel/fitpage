interface EmailData {
	email: string;
	message: string;
	subject: string;
}
export const sendContactForm = async (data: EmailData) => {
	try {
		const request = await fetch("/api/contact", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		});
		if (request.status === 200) {
			alert("wyślany");
		} else {
			throw new Error("błąd");
		}
	} catch (error) {
		throw new Error("błąd");
	}
};
