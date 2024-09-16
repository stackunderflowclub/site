import { Separator } from '@/components/ui/separator';

export default function NotFound() {
	return (
		<main className='grid place-content-center grow h-auto'>
			<h1 className='text-3xl font-bold'>404: Not Found</h1>
			<Separator decorative orientation='horizontal' className='bg-slate-500' />
			<p className='text-lg'>The page you are looking for does not exist.</p>
		</main>
	);
}
