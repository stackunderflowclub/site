import { getAllPostSlugs, PostFrontmatter } from '@/lib/posts';

export default function Article({
	frontmatter,
	children
}: {
	frontmatter: PostFrontmatter;
	children: React.ReactNode;
}) {
	return (
		<>
			<h1>{frontmatter.title}</h1>
			{children}
		</>
	);
}

export async function generateStaticParams() {
	const posts = (await getAllPostSlugs()).map(slug => ({ slug }));
}
