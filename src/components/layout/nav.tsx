'use client';

import Image from 'next/image';
import Link from '../misc/link';
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

export default function Nav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const Items: { name: string; href: string }[] = [
		{ name: 'Coding', href: '/dev/' },
		{ name: 'Music', href: '/music/' }
	];

	const Pathname = usePathname();

	return (
		<Navbar
			onMenuOpenChange={setIsMenuOpen}
			className="text-white bg-neutral-700/50"
		>
			<NavbarMenuToggle
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				className="sm:hidden"
			/>
			<NavbarBrand>
				<Link href="/">
					<Image
						src="/logo.svg"
						alt="Logo"
						width={40}
						height={40}
						className="rounded-lg aspect-square border-black border-2"
						priority
					/>
				</Link>
			</NavbarBrand>
			<NavbarContent justify="center" className="hidden sm:flex gap-4">
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
