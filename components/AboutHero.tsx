import Link from "next/link";

const AboutHero = () => {
	return (
		<section className='py-20 px-6 lg:px-12 bg-black text-white'>
			<div className='max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-12'>
				{/* TEXT */}
				<div className='flex-1 text-center lg:text-left'>
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6'>
						Decoding Africa’s Tech, Business & Innovation Landscape
					</h1>

					<p className='text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0'>
						We analyze Africa’s startup ecosystem, digital markets,
						business trends, and regulatory shifts — bringing clear,
						data-backed storytelling to a rapidly growing innovation
						economy.
					</p>

					<Link
						// target='_blank'
						// href='https://www.instagram.com/showcaseafrica_?igsh=MWZ1N2QzZzU5Z3JiNQ=='
						href={"/"}
					>
						<button className='mt-8 bg-white text-black px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gray-200 transition-all flex items-center justify-center gap-2 mx-auto lg:mx-0'>
							Connect With Us
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};
export default AboutHero;
