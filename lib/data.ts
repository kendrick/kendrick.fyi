import IconGitHub from '@/assets/svg/github.svg';
import IconLinkedIn from '@/assets/svg/linkedin.svg';
import IconThreads from '@/assets/svg/threads.svg';

export const pageLinks = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'Info',
		href: '/info',
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

import CdsHeroImage from '@/app/projects/compassion-design-system/images/hero-450h.png';
export const projectsData = [
	{
		title: 'Compassion Design System',
		image: CdsHeroImage,
		description:
			'Compassion International revolutionized its global brand identity with a cutting-edge, token-based multi-brand design system, dramatically enhancing design consistency, slashing development times, and fostering seamless collaboration across 13 independent fundraising offices.',
		projectPage: 'compassion-design-system',
	},
] as const;

export const skillsData = [
	'Design Thinking',
	'Google Design Sprints',
	'Design Systems',
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
		name: 'Info',
		hash: '#info',
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
