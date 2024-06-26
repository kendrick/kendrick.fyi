import IconGitHub from '@/assets/svg/github.svg';
import IconLinkedIn from '@/assets/svg/linkedin.svg';
import IconThreads from '@/assets/svg/threads.svg';

export const pageLinks = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'Projects',
		href: '/projects',
	},
	{
		name: 'Kind Words',
		href: '/kind-words',
	},
	{
		name: 'About',
		href: '/about',
	},
	{
		name: 'Contact',
		href: '/contact',
	},
	{
		name: 'Résumé',
		href: '/resume',
	},
];

export const socialLinks = [
	{
		name: 'GitHub',
		href: 'https://github.com/kendrick',
		icon: IconGitHub,
	},
	{
		name: 'LinkedIn',
		href: 'https://linkedin.com/in/kendrickarnett',
		icon: IconLinkedIn,
	},
	{
		name: 'Threads',
		href: 'https://www.threads.net/@kendrick.fyi',
		icon: IconThreads,
	},
];

export const email = `kendrick@kendrick.fyi`;

export const year = new Date().getFullYear();

interface ProjectData {
	image?: StaticImageData;
	title: string;
	description: ReactNode | string;
	projectPage?: string;
}

import ComingSoonImage from '@/app/projects/coming-soon.jpg';
import CdsHeroImage from '@/app/projects/compassion-design-system/images/hero-450h.png';
import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
export const projectsData: ProjectData[] = [
	{
		title: 'Compassion Design System',
		image: CdsHeroImage,
		description:
			'Enhancing design consistency, slashing development time, and fostering seamless collaboration with a cutting edge token-driven design system.',
		projectPage: 'compassion-design-system',
	},
	{
		title: 'Field Strategies',
		description: 'Coming Soon.',
		image: ComingSoonImage,
	},
	{
		title: 'Optimizing Search',
		description: 'Coming Soon.',
		image: ComingSoonImage,
	},
	{
		title: 'Design-Driven Innovation',
		description: 'Coming Soon.',
		image: ComingSoonImage,
	},
] as const;

export const skillsData = [
	'Design Thinking',
	'Google Design Sprints',
	'Design Systems',
	'Human-Centered Design',
	'UX Research',
	'Usability Testing',
	'Accessibility',
	'Ideation',
	'Interaction Design',
	'Prototyping',
	'Wireframing',
	'Responsive Web Design',
	'Visual Design',
	'Figma',
	'Agile Methodologies',
	'HTML5',
	'CSS',
	'SCSS',
	'TypeScript',
	'JavaScript',
	'ReactJS',
	'A/B & Multivariate Testing',
	'Conversion Rate Optimization (CRO)',
	'Public Speaking',
] as const;

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},

	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Kind Words',
		hash: '#kind-words',
	},
] as const;
