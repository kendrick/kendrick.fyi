'use client';

import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

import av from '@/assets/av.jpg';

export default function Intro() {
	const { ref } = useSectionInView('Home', 0.5);
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

	return (
		<section ref={ref} id="home">
			<div>
				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'tween',
							duration: 0.2,
						}}
					>
						<Image
							src={av}
							alt="Kendrick's avatar"
							width="192"
							height="192"
							quality="95"
							priority={true}
						/>
					</motion.div>

					<motion.span
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'spring',
							stiffness: 125,
							delay: 0.1,
							duration: 0.7,
						}}
					>
						👋
					</motion.span>
				</div>
			</div>

			<motion.h1
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<span className="font-bold">Hi, I'm Kendrick.</span>
				<p>
					I'm a skilled UX leader and front-end expert who excels at building
					user-friendly digital solutions and fostering collaborative, vibrant
					teams.
				</p>
			</motion.h1>

			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1,
				}}
			>
				<Link
					href="#contact"
					onClick={() => {
						// setActiveSection('Contact');
						setTimeOfLastClick(Date.now());
					}}
				>
					Contact me here <BsArrowRight />
				</Link>

				<a href="/CV.pdf" download>
					Download CV <HiDownload />
				</a>

				<a
					href="https://linkedin.com"
					target="_blank"
					rel="noopener"
					title="Kendrick on LinkedIn"
				>
					<BsLinkedin />
				</a>

				<a
					href="https://github.com"
					target="_blank"
					rel="noopener"
					title="Kendrick on GitHub"
				>
					<FaGithubSquare />
				</a>
			</motion.div>
		</section>
	);
}
