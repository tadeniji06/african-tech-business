"use client";
import React from "react";
import { Icon } from "@iconify/react";

const Reports = () => {
	return (
		<div className='relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden px-6'>
			{/* --- Ambient Background Glow (Subtle + Premium) --- */}
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute -top-32 -left-32 w-[450px] h-[450px] bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse-slow' />
				<div className='absolute bottom-0 right-0 w-[350px] h-[350px] bg-gradient-to-tr from-gray-700/10 to-white/5 rounded-full blur-2xl' />
			</div>

			{/* --- Main Content --- */}
			<div className='relative z-10 flex flex-col items-center text-center max-w-2xl'>
				{/* Icon + Title */}
				<div className='flex items-center gap-3 mb-4'>
					<Icon
						icon='mdi:chart-timeline-variant'
						className='w-12 h-12 text-white'
					/>
					<h1 className='text-4xl md:text-5xl font-extrabold tracking-tight'>
						Reports Dashboard
					</h1>
				</div>

				{/* Subtitle */}
				<p className='text-gray-400 text-lg mb-6 leading-relaxed'>
					We’re building an advanced analytics engine that breaks down
					Africa’s tech, business and innovation landscape with brutal
					clarity.
					<br />
					<span className='text-white/80'>
						Data-rich, story-driven, insight-focused.
					</span>
				</p>

				{/* Coming Soon Card */}
				<div className='bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl px-8 py-10 shadow-xl hover:bg-white/10 transition-all duration-500 w-full'>
					<Icon
						icon='mdi:clock-outline'
						className='w-10 h-10 mx-auto mb-4 text-white/90'
					/>
					<h2 className='text-2xl font-semibold tracking-wide mb-2'>
						Coming Soon
					</h2>
					<p className='text-gray-300 text-sm leading-relaxed'>
						We’re currently engineering a powerful reporting suite —
						interactive charts, industry breakdowns, ecosystem deep
						dives, and sector-level insights. Everything you need to
						understand Africa’s digital economy at a glance.
					</p>
				</div>

				{/* Mini Indicators */}
				<div className='mt-10 flex gap-4 text-gray-400 text-sm'>
					<div className='flex items-center gap-1'>
						<div className='w-2 h-2 bg-green-400 rounded-full animate-pulse' />
						In Development
					</div>
					<div className='flex items-center gap-1'>
						<div className='w-2 h-2 bg-yellow-400 rounded-full animate-pulse-slow' />
						New Features Loading
					</div>
				</div>

				{/* Notify Button */}
				<button className='mt-8 bg-white text-black font-semibold text-sm px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition-all flex items-center gap-2'>
					<Icon icon='mdi:bell-ring' className='w-5 h-5' />
					Notify Me When It’s Live
				</button>
			</div>

			{/* --- Custom Animations --- */}
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
