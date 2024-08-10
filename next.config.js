// @ts-check
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
	trailingSlash: true /**
		,
		pageExtensions: ['tsx', 'mdx']
	*/
};

const withMDX = createMDX({
	options: {
		remarkPlugins: [remarkGfm]
	}
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
