"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { report } from "@/assets";
import NewsLetterSub from "@/components/others/NewsLetterSub";

const Reports = () => {
	const [openModal, setOpenModal] = useState(false);

	const handleSuccess = () => {
		window.location.href = "/Profitable_Commerce.pdf";
	};

	return (
		<div className='relative min-h-screen p-6 bg-black text-white flex items-center justify-center overflow-hidden px-6'>
			{/* BACKGROUND GLOW */}
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute -top-32 -left-32 w-[450px] h-[450px] bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse-slow' />
				<div className='absolute bottom-0 right-0 w-[350px] h-[350px] bg-gradient-to-tr from-gray-700/10 to-white/5 rounded-full blur-2xl' />
			</div>

			{/* CONTENT */}
			<div className='relative z-10 flex flex-col items-center text-center max-w-3xl'>
				{/* Header */}
				<div className='flex items-center gap-3 mb-6'>
					<Icon
						icon='mdi:chart-timeline-variant'
						className='w-12 h-12 text-white'
					/>
					<h1 className='text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
						Premium Reports
					</h1>
				</div>

				{/* Report Image */}
				<div className='relative mb-8 group'>
					<div className='absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition' />
					<Image
						src={report}
						alt='Africa Tech Report Cover'
						className='relative rounded-xl shadow-2xl'
					/>
				</div>

				{/* Main Description */}
				<p className='text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl'>
					Dive deep into Africa's rapidly evolving tech and business
					landscape. Our reports deliver expert analysis, actionable
					insights, and data-driven strategies crafted specifically
					for founders, operators, and decision-makers.
				</p>

				<p className='text-white/90 text-base md:text-lg font-medium mb-10'>
					No fluff. No noise. Just the clarity you need to move your
					strategy forward.
				</p>

				{/* CTA Button */}
				<button
					onClick={() => setOpenModal(true)}
					className='group relative bg-gradient-to-r bg-white text-black font-bold text-base px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mb-12'
				>
					<Icon
						icon='mdi:download'
						className='w-6 h-6 group-hover:animate-bounce'
					/>
					Access Full Report
					<Icon
						icon='mdi:arrow-right'
						className='w-5 h-5 group-hover:translate-x-1 transition-transform'
					/>
				</button>

				{/* Info Cards Grid */}
				<div className='grid md:grid-cols-2 gap-6 w-full mb-10'>
					{/* Why These Reports Matter */}
					<div className='bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow'>
						<div className='flex items-center gap-3 mb-4'>
							<div className='w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center'>
								<Icon
									icon='mdi:lightbulb-on'
									className='w-6 h-6 text-white'
								/>
							</div>
							<h2 className='text-xl font-bold text-white'>
								Why It Matters
							</h2>
						</div>
						<p className='text-gray-300 text-sm leading-relaxed'>
							Africa's digital economy is expanding faster than most
							realize. We cut through the hype to deliver grounded
							intelligence on markets, consumer behavior,
							infrastructure gaps, and emerging opportunities.
						</p>
					</div>

					{/* What You'll Learn */}
					<div className='bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow'>
						<div className='flex items-center gap-3 mb-4'>
							<div className='w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center'>
								<Icon
									icon='mdi:brain'
									className='w-6 h-6 text-white'
								/>
							</div>
							<h2 className='text-xl font-bold text-white'>
								What You'll Discover
							</h2>
						</div>
						<p className='text-gray-300 text-sm leading-relaxed'>
							Market trends, competitive landscapes, consumer
							insights, infrastructure developments, and strategic
							opportunities—all backed by rigorous research and
							real-world data.
						</p>
					</div>
				</div>

				{/* Trust Indicators */}
				<div className='flex flex-wrap justify-center gap-6 text-gray-400 text-sm'>
					<div className='flex items-center gap-2'>
						<div className='w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse' />
						<span>Updated Regularly</span>
					</div>
					<div className='flex items-center gap-2'>
						<div className='w-2.5 h-2.5 bg-purple-400 rounded-full animate-pulse-slow' />
						<span>Research-Backed</span>
					</div>
					<div className='flex items-center gap-2'>
						<div className='w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse' />
						<span>Actionable Insights</span>
					</div>
				</div>
			</div>

			{/* MODAL */}
			{openModal && (
				<NewsLetterSub
					onComplete={handleSuccess}
					onClose={() => setOpenModal(false)}
				/>
			)}

			<style jsx>{`
				@keyframes pulse-slow {
					0%,
					100% {
						opacity: 0.4;
					}
					50% {
						opacity: 0.9;
					}
				}
				.animate-pulse-slow {
					animation: pulse-slow 4s ease-in-out infinite;
				}
			`}</style>
		</div>
	);
};

export default Reports;
