import Image from "next/image";
import {type ElementNode } from '@graphcms/rich-text-types';
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

interface RenderersProps  {
children:string
}
const renderers = {
  h1: ({ children }:RenderersProps) => `<h1 class="text-4xl font-bold text-gray-800 my-6 bg-gray-100 p-4 rounded">${children}</h1>`
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
	const postImageAlt = data?.post?.title;
	const renderImage = postImageUrl && postImageAlt;
	const content = data.post?.blogContent?.json as ContentType; 
	const render =  astToHtmlString({content,renderers});

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-12">
			{renderImage && (
			<Image
				className="w-4/4 block h-auto"
				src={postImageUrl}
				width={1000}
				height={500}
				layout="cover"
				alt={postImageAlt}
			/>
			)}
				{render && <div dangerouslySetInnerHTML={{ __html: render }} />}
	
		</main>
	);
}
