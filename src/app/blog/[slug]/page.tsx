import { getClient } from "@/lib/client";
import { type GetPostBySlugQuery, GetPostBySlugDocument } from "@/gql/graphql";

export default async function BlogPost({ params }: { params: { slug: string } }) {
	const { data } = await getClient().query<GetPostBySlugQuery>({
		query: GetPostBySlugDocument,
		variables: { slug: params.slug },
	});

	const postHtml = data?.post?.blogContent?.html;

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<section>{postHtml && <div dangerouslySetInnerHTML={{ __html: postHtml }} />}</section>
		</main>
	);
}
