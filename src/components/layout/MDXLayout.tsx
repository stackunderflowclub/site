export default function MDXLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className='px-18 py-8 lg:px-32 lg:py-16 grid place-content-center'>
			<article
				className='p-8 min-w-[50vw] lg:max-w-[60vw] prose lg:prose-xl rounded-xl border-slate-200 border-2
		'
			>
				{children}
			</article>
		</main>
	);
}
