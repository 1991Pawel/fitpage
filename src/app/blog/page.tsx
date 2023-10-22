import { gql } from "@apollo/client";
import Image from "next/image";
import { type GetAllPostsQuery, GetAllPostsDocument } from "../../gql/graphql";
import { getClient } from "../../lib/client";

export default async function Blog() {
	const { data } = await getClient().query<GetAllPostsQuery>({
		query: GetAllPostsDocument,
	});
	const posts = data.posts;

	// const postHtml = data?.post?.blogContent?.html;

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div>
				{posts.map((post) => (
					<div key={post.id}>
						<h2>{post.title}</h2>
						<Image
							src={post.coverImage.coverImagePost[0]?.coverImage.url ?? ""}
							layout="fill"
							alt={post.title}
						/>
					</div>
				))}
			</div>
		</main>
	);
}
