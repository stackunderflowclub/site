'use client';

import { Vollkorn } from '@/lib/fonts';
import { TypeAnimation } from 'react-type-animation';
import { ReactSparklyText as Sparkles } from 'react-sparkly-text';

export default function Home() {
	return (
		<>
			<main
				className='p-8 py-16 pt-32 bg-5 h-[75vh] text-center text-white flex flex-col justify-center items-center gap-2 md:gap-4 lg:gap-8'
				style={{
					backgroundImage: `linear-gradient(
  225deg,
  hsl(255deg 100% 21%) 12%,
  hsl(284deg 100% 21%) 47%,
  hsl(306deg 100% 23%) 60%,
  hsl(320deg 100% 30%) 69%,
  hsl(329deg 100% 35%) 76%,
  hsl(336deg 100% 40%) 81%,
  hsl(342deg 100% 44%) 86%,
  hsl(359deg 86% 57%) 89%,
  hsl(14deg 96% 56%) 93%,
  hsl(28deg 100% 50%) 100%
)`
				}}
			>
				<h1 className={`font-black text-4xl ${Vollkorn.className}`}>
					<Sparkles>Welcome to Stack Underflow Club!</Sparkles>
				</h1>
			</main>
			<section className='p-8 py-16 pt-32 bg-5 h-[75vh] text-center bg-black text-lime-400 flex flex-col justify-center items-center gap-2 md:gap-4 lg:gap-8'>
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
						className=' text-inherit inline-block pl-1 after:text-red-500 after:font-bold'
					/>
				</p>
			</section>
		</>
	);
}
