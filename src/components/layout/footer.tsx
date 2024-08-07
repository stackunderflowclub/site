import { RootUrl } from '@/lib/constants';
import GitHubIcon from '../icons/GitHub';
import Link from '../misc/link';

export default function Footer() {
	return (
		<footer className={`bg-5 text-center text-lg text-white px-4 pt-16 pb-12`}>
			<div className="mb-2">
				<Link
					href="https://github.com/stackunderflowclub"
					className="text-white mx-2"
					target="_blank"
				>
					<GitHubIcon size="xl" />
				</Link>
			</div>

			<p>
				Website designed and built entirely by Stack <em>Under</em>flow Club.
				<br />
				&copy; {new Date().getFullYear()}{' '}
				<a href={RootUrl} className="underline underline-offset-2">
					Stack <em>Under</em>flow Club
				</a>
				. All Rights Reserved.
			</p>
		</footer>
	);
}
