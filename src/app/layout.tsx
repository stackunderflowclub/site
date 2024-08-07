import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { NextUIProvider } from '@nextui-org/system';
import Footer from '@/components/layout/footer';
import Nav from '@/components/layout/nav';
import { RootUrl } from '@/lib/constants';

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
	title: {
		absolute: 'Akhil Pillai',
		default: 'Akhil Pillai',
		template: '%s | Akhil Pillai'
	},
	description: "Akhil's personal website",
	openGraph: {
		type: 'website',
		locale: 'en-US',
		url: RootUrl,
		title: 'Akhil Pillai',
		description: "Akhil's personal website",
		countryName: 'United States',
		siteName: 'Akhil Pillai'
	},
	icons: [`${RootUrl}/logo.svg`]
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable
				)}
			>
				<NextUIProvider>
					<Nav />
					{children}
					<Footer />
				</NextUIProvider>
			</body>
		</html>
	);
}
