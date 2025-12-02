import { Icon } from "@iconify/react/dist/iconify.js";
import { pod } from "@/assets";
import Image from "next/image";

const OurStory = () => {
	return (
		<section className='py-24 bg-white'>
			<div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
				{/* TEXT */}
				<div>
					<div className='flex items-center gap-3 mb-6'>
						<div className='w-12 h-12 rounded-xl bg-black flex items-center justify-center'>
							<Icon
								icon='lucide:leaf'
								className='text-white w-6 h-6'
							/>
						</div>
						<h2 className='text-4xl md:text-5xl font-bold text-black'>
							Our Story
						</h2>
					</div>

					<div className='text-gray-800 text-lg leading-relaxed space-y-5'>
						<p>
							Founded in 2025, <strong>Africa Tech Business</strong>{" "}
							was created to fill a widening gap: credible, sharp, and
							context-rich coverage of Africa’s fast-growing tech and
							business ecosystem.
						</p>

						<p>
							Instead of repeating surface-level narratives, we dive
							into the real drivers of growth — founders, funding,
							markets, regulation, digital infrastructure, and the
							economic forces shaping the continent’s future.
						</p>

						<p>
							Today, our analysts, writers, and operators deliver
							insights to thousands across Africa and beyond,
							providing a trusted lens into the opportunities,
							challenges, and innovations defining modern African
							business.
						</p>
					</div>
				</div>

				{/* IMAGE */}
				<div className='flex justify-center'>
					<Image
						src={pod}
						alt='Podcast illustration'
						className='rounded-2xl shadow-lg w-full max-w-lg object-cover'
					/>
				</div>
			</div>
		</section>
	);
};

export default OurStory;
