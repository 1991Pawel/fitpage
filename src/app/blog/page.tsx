import { gql } from "@apollo/client";
import { getClient } from "../../lib/client";
const query = gql`
	query GetAllPosts {
		post(where: { slug: "murmure-splendidus-invidia-merui-usus-flammas-clamoribus" }) {
			id
			title
			tags
			publishedAt
			blogContent {
				html
			}
		}
	}
`;

export default async function Blog() {
	const { data } = await getClient().query({ query });

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<section>
				<div dangerouslySetInnerHTML={{ __html: data.post.blogContent.html }} />
			</section>
		</main>
	);
}
