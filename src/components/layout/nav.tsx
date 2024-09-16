'use client';

import Image from 'next/image';
import Link from '../markup/Link';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle
} from '@nextui-org/navbar';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Vollkorn } from '@/lib/fonts';
import GitHubIcon from '../icons/GitHub';
import DiscordIcon from '../icons/Discord';
import { DiscordInviteLink } from '@/lib/constants';

interface NavItem {
	name: string;
	href: string;
}

export default function Nav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const Items: NavItem[] = [];

	const Pathname = usePathname();

	return (
		<Navbar
			onMenuOpenChange={setIsMenuOpen}
			className='text-white bg-neutral-900/75 grow-0'
		>
			<NavbarMenuToggle
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				className='sm:hidden'
			/>
			<NavbarBrand>
				<Link
					href='/'
					className='flex flex-row gap-2 items-center justify-start'
				>
					<Image
						src='/logo.webp'
						alt='Logo'
						width={40}
						height={40}
						className='rounded-lg aspect-square border-black border-2'
						priority
					/>
					<span
						className={`text-lg lg:text-xl font-semibold ${Vollkorn.className}`}
					>
						Stack Underflow Club
					</span>
				</Link>
			</NavbarBrand>
			<NavbarContent justify='center' className='hidden sm:flex gap-4'>
				{Items.map(item => (
					<NavbarItem isActive={Pathname === item.href} key={item.name}>
						<Link
							href={Pathname === item.href ? '#' : item.href}
							className={`block ${Pathname === item.href ? 'text-white' : 'text-neutral-900'}`}
						>
							{item.name}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarContent justify='end'>
				<NavbarItem>
					<Link
						external
						href='https://github.com/stackunderflowclub'
						className='block'
					>
						<GitHubIcon />
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link external href={DiscordInviteLink} className='block'>
						<DiscordIcon />
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				{Items.map(item => (
					<NavbarMenuItem isActive={Pathname === item.href} key={item.name}>
						<Link
							href={Pathname === item.href ? '#' : item.href}
							className={`block w-full text-xl rounded-2xl p-2 ${Pathname === item.href ? 'bg-neutral-900 text-white' : ''}`}
						>
							{item.name}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
