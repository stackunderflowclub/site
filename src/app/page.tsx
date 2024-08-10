'use client';

import { TypeAnimation } from 'react-type-animation';

export default function Home() {
	return (
		<>
			<main className='p-8 py-16 pt-32 bg-5 h-[75vh] text-center text-black flex flex-col justify-center items-center gap-2 md:gap-4 lg:gap-8'>
				<h1 className='font-black text-4xl '>
					Welcome to Stack Underflow Club!
				</h1>
			</main>
			<section className='p-8 py-16 pt-32 bg-5 h-[75vh] text-center text-black flex flex-col justify-center items-center gap-2 md:gap-4 lg:gap-8'>
				<p className='text-2xl md:text-3xl p-8 md:px-16 lg:px-32 xl:px-64'>
					We are{' '}
					<TypeAnimation
						sequence={[
							'hackers',
							1000,
							'engineers',
							1000,
							'developers',
							1000,
							'students',
							1000,
							'Stack Underflow Club.'
						]}
						cursor={true}
						className='text-2xl md:text-3xl text-black inline-block pl-1 after:text-red-500 after:font-bold'
					/>
				</p>
			</section>
		</>
	);
}
