import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { NextUIProvider } from '@nextui-org/system';
import Footer from '@/components/layout/footer';
import Nav from '@/components/layout/nav';
import { RootUrl } from '@/lib/constants';
import { OpenSans } from '@/lib/fonts';

export const metadata: Metadata = {
	title: {
		absolute: 'Stack Underflow Club',
		default: 'Stack Underflow Club',
		template: '%s | SUC'
	},
	description: 'A CHS club of coders and AI/ML enthusiasts',
	openGraph: {
		type: 'website',
		locale: 'en-US',
		url: RootUrl,
		title: 'Stack Underflow Club',
		description: 'A CHS club of coders and AI/ML enthusiasts',
		countryName: 'United States',
		siteName: 'Stack Underflow Club'
	},
	icons: [`${RootUrl}/logo.webp`]
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head />
			<body
				className={cn(
					'bg-background font-sans antialiased',
					OpenSans.className
				)}
			>
				<NextUIProvider
					style={{
						minHeight: '100vh',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'stretch'
					}}
				>
					<Nav />
					{children}
					<Footer />
				</NextUIProvider>
			</body>
		</html>
	);
}
