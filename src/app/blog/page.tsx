import Image from "next/image";
import Link from "next/link";
import { type GetAllPostsQuery, GetAllPostsDocument } from "@/gql/graphql";
import { getClient } from "@/lib/client";
import { getInstagramData } from "@/services";

export default async function Blog() {
	const { data } = await getClient().query<GetAllPostsQuery>({
		query: GetAllPostsDocument,
	});
	const posts = data.posts;
	// const instagramData = await getInstagramData();

	return (
		<main className="flex min-h-screen flex-col items-center gap-10 p-8">
			{/* {JSON.stringify(instagramData?.data.data)} */}

			{posts.map((post) => (
				<Link href={`/blog/${post.slug}`} key={post.id}>
					<h2 className="mb-4">{post.title}</h2>
					<Image
						className="w-4/4 block h-auto"
						src={post.coverImage.coverImagePost[0]?.coverImage.url ?? ""}
						width={1000}
						height={500}
						layout="cover"
						alt={post.title}
					/>
				</Link>
			))}
		</main>
	);
}
