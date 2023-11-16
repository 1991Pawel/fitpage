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
	h3: ({ children }: RenderersProps) =>
		`<h3 class="text-orange mb- font-semibold">${children}</h3>`,
	h4: ({ children }: RenderersProps) =>
		`<h4 class="text-orange mb-2 font-semibold">${children}</h4>`,
	h5: ({ children }: RenderersProps) =>
		`<h5 class="text-orange mb-2 font-semibold">${children}</h5>`,
	h6: ({ children }: RenderersProps) =>
		`<h6 class="text-orange mb-2 font-semibold">${children}</h6>`,
	p: ({ children }: RenderersProps) => `<p class="text-black">${children}</p>`,
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
		<main className="bg-white flex min-h-screen flex-col items-center justify-between p-12">
			<h1 className="text-black text-4xl font-semibold">{postTitle}</h1>
			<h2>{}</h2>
			{renderImage && (
				<Image
					className="w-4/4 block h-auto"
					src={postImageUrl}
					width={1000}
					height={500}
					layout="cover"
					alt={postTitle}
				/>
			)}
			{render && <div className="mt-20 text-2xl " dangerouslySetInnerHTML={{ __html: render }} />}
		</main>
	);
}
