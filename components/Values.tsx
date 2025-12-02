"use client";

import { values } from "@/utils/data";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

const Values = () => {
	return (
		<section className='max-w-7xl mx-auto px-6 py-24'>
			{/* HEADER */}
			<div className='flex items-center gap-3 mb-12'>
				<div className='w-12 h-12 rounded-xl bg-black flex items-center justify-center'>
					<Icon icon='lucide:star' className='text-white w-6 h-6' />
				</div>
				<h2 className='text-4xl md:text-5xl font-bold text-black'>
					Our Core Values
				</h2>
			</div>

			{/* GRID */}
			<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
				{values.map((value, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.12 }}
						viewport={{ once: true }}
						className='bg-white border border-black/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition'
					>
						<h3 className='text-xl font-semibold text-black mb-3'>
							{value.title}
						</h3>
						<p className='text-gray-700 leading-relaxed'>
							{value.body}
						</p>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Values;
