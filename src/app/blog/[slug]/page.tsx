import Image from "next/image";
import { getClient } from "@/lib/client";
import { type GetPostBySlugQuery, GetPostBySlugDocument } from "@/gql/graphql";
export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
	const { data } = await getClient().query<GetPostBySlugQuery>({
		query: GetPostBySlugDocument,
		variables: { slug: params.slug },
	});

	return {
		title: data?.post?.title,
		description: `${data?.post?.seoDescription}`,
		alternates: {
			canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog/${params.slug}`,
		},
	};
};
export default async function BlogPost({ params }: { params: { slug: string } }) {
	const { data } = await getClient().query<GetPostBySlugQuery>({
		query: GetPostBySlugDocument,
		variables: { slug: params.slug },
	});

	const postHtml = data?.post?.blogContent?.html;

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-12">
			<Image
				className="w-4/4 block h-auto"
				src={data.post?.coverImage.url ?? ""}
				width={1000}
				height={500}
				layout="cover"
				alt={data?.post?.title ?? ""}
			/>
			<section>{postHtml && <div dangerouslySetInnerHTML={{ __html: postHtml }} />}</section>
		</main>
	);
}
