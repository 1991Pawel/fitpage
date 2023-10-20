import { gql } from "@apollo/client";

import { getClient } from "../../lib/client";

import { type GetPostBySlugQuery } from "../../gql/graphql";

const GET_POST_BY_SLUG = gql`
	query GetPostBySlug($slug: String!) {
		post(where: { slug: $slug }) {
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
	const { data } = await getClient().query<GetPostBySlugQuery>({
		query: GET_POST_BY_SLUG,
		variables: { slug: "murmure-splendidus-invidia-merui-usus-flammas-clamoribus" },
	});

	const postHtml = data?.post?.blogContent?.html;

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<section>{postHtml && <div dangerouslySetInnerHTML={{ __html: postHtml }} />}</section>
		</main>
	);
}
