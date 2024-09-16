// @ts-check
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

export default createMDX({
	options: {
		remarkPlugins: [remarkGfm]
	}
})(
	/** @type {import('next').NextConfig} */ {
		trailingSlash: true,
		pageExtensions: ['ts', 'tsx', 'md', 'mdx']
	}
);
