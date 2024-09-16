import type { MDXComponents } from 'mdx/types';
import Link from './components/markup/Link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		h1: props => <h1 className='text-4xl font-bold mt-8 mb-4' {...props} />,
		a: props => (
			<Link href={props.href!} {...props}>
				{props.children}
			</Link>
		)
	};
}
