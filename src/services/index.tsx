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
		}
	} catch (error) {
		throw new Error("błąd");
	}
};

export const getInstagramData = async () => {
	try {
		const res = await fetch(`http://localhost:3000/api/instagram`);
		const data: unknown = await res.json();
		return data;
	} catch (error) {
		throw error;
	}
};
