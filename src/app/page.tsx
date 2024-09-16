'use client';

import { SourceCodePro, Vollkorn, VollkornSC } from '@/lib/fonts';
import { TypeAnimation } from 'react-type-animation';
import { ReactMatrixAnimation as MatrixAnimation } from 'react-matrix-animation';
import { DiscordInviteLink } from '@/lib/constants';
import Link from '@/components/markup/Link';

export default function Home() {
	return (
		<>
			<main
				className='p-8 py-16 pt-32 bg-5 h-[75vh] text-center text-white flex flex-col justify-center items-center gap-2 md:gap-4 lg:gap-8 grow'
				style={{
					backgroundImage: `linear-gradient(
225deg,
hsl(240deg 100% 20%) 0%,
hsl(289deg 100% 21%) 11%,
hsl(315deg 100% 27%) 22%,
hsl(329deg 100% 36%) 33%,
hsl(337deg 100% 43%) 44%,
hsl(357deg 91% 59%) 56%,
hsl(17deg 100% 59%) 67%,
hsl(34deg 100% 53%) 78%,
hsl(45deg 100% 50%) 89%,
hsl(55deg 100% 50%) 100%
)`
				}}
			>
				<h1 className={`font-black text-4xl ${VollkornSC.className}`}>
					This is Stack Underflow Club
				</h1>
			</main>
			<section className='relative h-[75vh] text-center bg-black text-[#0f0] flex flex-col justify-center items-center gap-2 md:gap-4 lg:gap-8'>
				<div className='absolute animated w-full h-full top-0 left-0 z-10'>
					<MatrixAnimation />
				</div>
				<p
					className={`mx-8 mb-16 mt-32 z-20 text-2xl md:text-3xl md:mx-16 lg:mx-32 text-start ${SourceCodePro.className}`}
					style={{ minWidth: '28rem !important' }}
				>
					We are{' '}
					<TypeAnimation
						sequence={[
							'hackers',
							1000,
							'engineers',
							1000,
							'AI enthusiasts',
							1000,
							'developers',
							1000,
							'students',
							1000,
							'teachers',
							1000,
							'coders',
							1000,
							'Stack Underflow Club.'
						]}
						cursor={true}
						speed={{
							type: 'keyStrokeDelayInMs',
							value: 50
						}}
						className="text-inherit inline-block after:font-black after:!content-['█']"
					/>
				</p>
			</section>
			<section className='px-8 py-16 lg:px-16 h-[75vh] text-center bg- text-black flex flex-col justify-center items-center gap-2 md:gap-4 lg:gap-8'>
				<h2 className={`font-black text-4xl ${Vollkorn.className}`}>
					What do we do?
				</h2>
				<p className='text-2xl md:text-3xl lg:text-4xl'>
					We are a community of like-minded individuals who are passionate about
					technology and are always looking to learn and grow. Join us today on{' '}
					<Link
						className={`text-blurple font-medium ${Vollkorn.className}`}
						external
						href={DiscordInviteLink}
					>
						Discord
					</Link>{' '}
					and be a part of the Stack Underflow Club!
				</p>
			</section>
		</>
	);
}
