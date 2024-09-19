// @ts-check
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeWidont from 'rehype-widont';

export default createMDX({
	options: {
		rehypePlugins: [rehypeSlug, rehypeWidont],
		remarkPlugins: [remarkGfm]
	}
})(
	/** @type {import('next').NextConfig} */ {
		trailingSlash: true,
		pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
		experimental: {
			mdxRs: false
		}
	}
);
