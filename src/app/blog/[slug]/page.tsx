import Image from "next/image";
import { type ElementNode } from "@graphcms/rich-text-types";
import { astToHtmlString } from "@graphcms/rich-text-html-renderer";
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

interface RenderersProps {
	children: string;
}
const renderers = {
	h2: ({ children }: RenderersProps) =>
		`<h2 class="text-orange font-semibold mb-5">${children}</h2>`,
};

export default async function BlogPost({ params }: { params: { slug: string } }) {
	const { data } = await getClient().query<GetPostBySlugQuery>({
		query: GetPostBySlugDocument,
		variables: { slug: params.slug },
	});

	interface ContentType {
		children: Array<ElementNode>;
	}

	const postImageUrl = data.post?.coverImage?.url;
	const postTitle = data?.post?.title;
	const renderImage = postImageUrl && postTitle;
	const content = data.post?.blogContent?.json as ContentType;
	const render = astToHtmlString({ content, renderers });

	return (
		<main className=" flex min-h-screen flex-col items-center justify-between bg-white p-12">
			<div className="container mx-auto">
				<h1 className="text-4xl font-semibold text-black">{postTitle}</h1>
				{renderImage && (
					<Image
						className="w-full"
						src={postImageUrl}
						width={1000}
						height={500}
						layout="cover"
						alt={postTitle}
					/>
				)}
				{render && (
					<div
						className="prose lg:prose-xl mt-20 text-2xl"
						dangerouslySetInnerHTML={{ __html: render }}
					/>
				)}
			</div>
		</main>
	);
}
