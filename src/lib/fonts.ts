import {
	Open_Sans as OS,
	Source_Code_Pro as SCP,
	Vollkorn as V,
	Vollkorn_SC as VSC
} from 'next/font/google';

export const OpenSans = OS({
	subsets: ['latin'],
	variable: '--f-open-sans',
	display: 'swap',
});

export const SourceCodePro = SCP({
	subsets: ['latin'],
	variable: '--f-source-code-pro',
	weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
});

export const Vollkorn = V({
	subsets: ['latin'],
	variable: '--f-vollkorn',
	weight: ['400', '500', '600', '700', '800', '900'],
	display: 'swap',
});

export const VollkornSC = VSC({
	subsets: ['latin'],
	variable: '--f-vollkorn-sc',
	weight: ['400', '600', '700', '900'],
	display: 'swap',
});
