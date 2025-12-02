"use client";
import { missions } from "@/utils/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

const Mission = () => {
	return (
		<section className='max-w-7xl mx-auto px-6 py-24'>
			{/* HEADER */}
			<div className='flex items-center gap-3 mb-12'>
				<div className='w-12 h-12 rounded-xl bg-black flex items-center justify-center'>
					<Icon icon='lucide:leaf' className='text-white w-6 h-6' />
				</div>
				<h2 className='text-4xl md:text-5xl font-bold text-black'>
					Our Mission
				</h2>
			</div>

			{/* MISSION CARDS */}
			<div className='grid md:grid-cols-2 gap-10'>
				{missions.map((mission, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.15 }}
						viewport={{ once: true }}
						className='bg-white rounded-2xl border border-black/10 p-8 shadow-sm hover:shadow-md transition'
					>
						<h3 className='text-2xl font-semibold text-black mb-3'>
							{mission.title}
						</h3>
						<p className='text-gray-700 leading-relaxed'>
							{mission.body}
						</p>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Mission;
