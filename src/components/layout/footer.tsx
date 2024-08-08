import { DiscordInviteLink, RootUrl } from '@/lib/constants';
import GitHubIcon from '../icons/GitHub';
import Link from '../misc/link';
import DiscordIcon from '../icons/Discord';

export default function Footer() {
	return (
		<footer
			className={`bg-5 text-center text-lg text-white bg-black px-4 pt-16 pb-12`}
		>
			<div className='mb-2 flex flex-row justify-center items-center gap-4'>
				<Link href='https://github.com/stackunderflowclub' external>
					<GitHubIcon size='xl' />
				</Link>
				<Link href={DiscordInviteLink} external>
					<DiscordIcon size='xl' />
				</Link>
			</div>

			<p>
				Website designed and built entirely by Stack Underflow Club.
				<br />
				&copy; {new Date().getFullYear()}{' '}
				<a href={RootUrl} className='underline underline-offset-2'>
					Stack <em>Under</em>flow Club
				</a>
				. All Rights Reserved.
			</p>
		</footer>
	);
}
